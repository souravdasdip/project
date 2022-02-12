import React from 'react'
import './Category.css'

function Category() {
  return (
    <div className='categories'>
        <div className="category active">
                All for you
        </div>
        <div className="category">Recommended</div>
        <div className="category">Top Manufacturers</div>
        <div className="category">Winter Special</div>
        <div className="category">Denim Special</div>
        <div className="category">Women's wear</div>
        <div className="category">Kid's wear</div>
        <div className="category">T-shirts</div>
        <div className="category">Men's Fashion</div>
        <div className="arrowright">
            <img src={process.env.PUBLIC_URL + 'images/arrowright.svg'} alt="" />
        </div>
    </div>
  )
}

export default Category