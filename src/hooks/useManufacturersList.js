import { useEffect, useState } from "react";

export default function useManufacturersList(token) {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [manufacturerslist, setmanufacturerslist] = useState([]);

  useEffect(() => {
    fetch("https://devapi.dhakai.com/api/v2/manufacturers?limit=8", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not OK");
        }
        return res.json();
      })
      .then((data) => {
        seterror(false);
        setloading(false);
        const { manufacturers } = data.result;
        setmanufacturerslist((prevManufacturerslist) => {
          return [...prevManufacturerslist, ...manufacturers];
        });
      })
      .catch((error) => {
        seterror("Something is went wrong!");
        setloading(false);
        console.log(error);
      });
  }, [token]);

  return { manufacturerslist, loading, error };
}
