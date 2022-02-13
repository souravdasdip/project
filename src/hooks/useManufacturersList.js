import { useEffect, useState } from "react";

export default function useManufacturersList(token, limit, skip) {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [manufacturerslist, setmanufacturerslist] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [count, setcount] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(
      `https://devapi.dhakai.com/api/v2/manufacturers?limit=${limit}&skip=${skip}`,
      {
        signal: controller.signal,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not OK");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        seterror(false);
        setloading(false);
        const { manufacturers, count } = data.result;
        setcount(count);
        sethasMore(skip > count ? false : true);
        setmanufacturerslist((prevManufacturerslist) => {
          return [...prevManufacturerslist, ...manufacturers];
        });
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted!");
        }
        seterror("Something is went wrong!");
        setloading(false);
        console.log(error);
      });

    return () => controller.abort();
  }, [limit, skip, token]);

  return { manufacturerslist, loading, error, count, hasMore };
}
