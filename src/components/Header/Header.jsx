import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className="left">
            <div className="switch">
                <span className="explore">
                    <div className="activelink">
                        Explore
                    </div>
                </span>
                <span className="activity">
                    Activity
                </span>
            </div>
        </div>

        <div className="middle">
            <img src={process.env.PUBLIC_URL + 'images/searchicon.svg'} alt="" />
            <input type="text" placeholder='Search by name, group, type or others' />
        </div>

        <div className="right">
            <div className="messanger">
                <div className="total__messages">2</div>
                <img src={process.env.PUBLIC_URL + 'images/messanger.svg'} alt="navbar" />
            </div>

            <div className="notification">
                <div className="total__notifications">
                    5
                </div>
                <img src={process.env.PUBLIC_URL + 'images/notification.svg'} alt="navbar" />
            </div>

            <div className="user">
                <img src={process.env.PUBLIC_URL + 'images/crocodile.svg'} alt="navbar" />
            </div>
        </div>
    </div>
  )
}

export default Header