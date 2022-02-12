import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/SideBar";
import useManufacturersList from "./hooks/useManufacturersList";
import Login from "./pages/Login";

function App() {
  const [token, settoken] = useState(
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkaGFrYWkuY29tIiwiZGF0YSI6eyJlbWFpbCI6InJhamliMkBnbWFpbC5jb20iLCJkZXZpY2VVdWlkIjoiMTIxM3Nkc2ZzNDU2c2RzZDc3OHNkczg3Nzg3ZHNkIiwidXNlclVpZCI6IkJVLTFNSlZGIiwibmFtZSI6Ik1kIFR1c2hlciBIZWxsbyIsImNvbXBhbnlOYW1lIjoiRGhha2FpIEJhbmdsYWRlc2giLCJ1c2VyVHlwZSI6IkJVWUVSIiwidXNlclJvbGUiOiJCVVlFUiIsImxvZ2luVHlwZSI6IkVNQUlMIn0sImlhdCI6MTY0NDU5OTY5NywiZXhwIjoxNjUyMzc1Njk3fQ.tqZCLxBaQFfkLgmKnGOGo7Q8qPR4EX87SemZx8qFXBSsTijoC3KI_3wyln6BekOe2bOEbUSmSgV3FOxFdgYeZUNdTZ0drSQmSfxNa5NBOdRU8OGet_AXhWJdnFu6HFVffZ3eCt-0WBYQfiaqrP_mQczJYYX5m5sVRsZu1MoudxcC0AaWtOCRm0hzHRmSYGwrU09g3ctcwsIpxKLOdrc1vUomBFflBZBJ11emCYgUoWiddpmFeAYghP8hmDUAhr3rmm8vknAcWGiBxxB8yZYxwarAErPe8_YOTQHHQlD6msulQjOBunUBQkK9AO18zAepZYOHye_k8wdIswQdWyQwPcgZRzkMw-QABcML1pbvPaQnnUCimpZHkYHMTO7AEa_BvXTWxmRJaOmypG8r79DNGuEiRZ8EtgAFwGDYmuF7oj8W8rHwuUJKHZlBtdMo_mrpQSI-Egiq2OPZn59A_v1fUN0mAiTfrfh_e4bfgT6SGwl630Wpx_uBSpw282qZJmUZ5tF1AgquTvHmWQ-90uAi8cTSGZQGCdkIUfmflJbgI7Oi6JEAQ9hgNNVzmIwFnMfLt5PoZhai171hONqm7xbBAnqKSqdbUnH2T-DoWOP8vOIWlXVBJC3LH8n18rbrzOyl56KJrGtXvt210B1DmdWdygScJHLUO1IfQAY-cyz7zzs"
  );

  const { manufacturerslist, loading, error } = useManufacturersList(token);
  console.log(manufacturerslist);
  return (
    <div className="App">
      {token ? (
        <>
          <SideBar />
          <Header />
          <Category />
          <div className="wrapper">
            {manufacturerslist.map((manufacturer) => {
              const { banners, companyName, companyShortDesc, logo } =
                manufacturer.meta;

              return (
                <Card
                  key={companyName}
                  logo={logo}
                  banners={banners}
                  companyName={companyName}
                  companyShortDesc={companyShortDesc}
                  addresses={manufacturer.addresses}
                  minOrderQty={manufacturer.minOrderQty}
                  productGroups={manufacturer.productGroups}
                />
              );
            })}
          </div>
        </>
      ) : (
        <Login settoken={settoken} />
      )}
    </div>
  );
}

export default App;
