import React from 'react'
import './Card.css'

function Card({ logo, banners, companyName, companyShortDesc,productGroups, addresses, minOrderQty}) {
  return (
    <div className='card__container'>
        <div className="product__images">
            {
                banners?.map(banner => {
                    return(
                        <div key={banner.url} className="product__image">
                            <img src={banner.url} alt="pr" />
                        </div>
                    )
                })
            }
        </div>

        <div className="manufacturer__logo">
            <img src={logo.url} alt="brand" />
        </div>

        <div className="manufacturer__info">
            <h1 className="manufacturer__name">
                {companyName}
            </h1>
            <div className="details">
                <div className="location">
                {addresses[0].city}, {addresses[0].country}
                </div>
                <span className="quantity">
                    Min Qty: {minOrderQty}
                </span>
            </div>
            <span className="product__category">
                {productGroups?.map((group,index) => {
                    return(
                        <span key={index} className="productGroup">
                            {group.name}
                            {productGroups.length > (index + 1) ?"," : ""}
                        </span>
                    )
                })}
            </span>
        </div>


        <div className="card__button">
            View Details
        </div>
    </div>
  )
}

export default Card