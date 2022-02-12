import React from 'react'
import './SideBar.css'

function SideBar() {
  return (

    <div className='sidebar'>
        <div className="sidebarlink logo">
            <img src={process.env.PUBLIC_URL + 'images/logo.svg'} alt="logo" />
        </div>
        <div className="main__menu">
            
            <div className="sidebarlink home">
                <img src={process.env.PUBLIC_URL + 'images/home.svg'} alt="home" />
            </div>

            <div className="sidebarlink search">
                <img src={process.env.PUBLIC_URL + 'images/search.svg'} alt="search" />
            </div>

            <div className="sidebarlink group">
                <img src={process.env.PUBLIC_URL + 'images/group.svg'} alt="group" />
            </div>

            <div className="sidebarlink product">
                <img src={process.env.PUBLIC_URL + 'images/product.svg'} alt="product" />
            </div>

            <div className="sidebarlink global">
                <img src={process.env.PUBLIC_URL + 'images/global.svg'} alt="global" />
            </div>

            <div className="sidebarlink cart">
                <img src={process.env.PUBLIC_URL + 'images/cart.svg'} alt="cart" />
            </div>
        </div>

        <div className="secondary__menu">
            <div className="sidebarlink settings">
                <img src={process.env.PUBLIC_URL + 'images/settings.svg'} alt="" />
            </div>

            <div className="sidebarlink help">
                <img src={process.env.PUBLIC_URL + 'images/help.svg'} alt="" />
            </div>

            <div className="sidebarlink logout">
                <img src={process.env.PUBLIC_URL + 'images/logout.svg'} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SideBar