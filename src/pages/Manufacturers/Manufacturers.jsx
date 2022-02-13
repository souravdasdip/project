import React, { useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Card from '../../components/Card/Card';
import Category from '../../components/Category/Category';
import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/SideBar';
import useManufacturersList from '../../hooks/useManufacturersList';

function Manufacturers({token}) {
    const [skip, setskip] = useState(0);
  const limit = 8;
  const { manufacturerslist, loading, error, count, hasMore } =
    useManufacturersList(token, limit, skip);
  
  return (
      <>
       {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
      
     <InfiniteScroll
            dataLength={count}
            hasMore={hasMore}
            next={() => setskip((prevSkip) => prevSkip + limit)}
          >
              <SideBar />
          <Header />
          <Category />
            <div className="wrapper">
              {manufacturerslist && manufacturerslist.map((manufacturer) => {
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
          </InfiniteScroll>
          </>
    
  )
}

export default Manufacturers