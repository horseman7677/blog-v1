import React from 'react'
import './topbar.css'

function TopBar() {
    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>Home</li>
                    <li className='topListItem'>About</li>
                    <li className='topListItem'>Contact</li>
                    <li className='topListItem'>Write</li>
                    <li className='topListItem'>Logout</li>
                </ul>

            </div>
            <div className='topRight'>
                <img
                    className='topImg'
                    src='https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/wgud0rg9ffk5kfdl_1593102048.jpeg'
                    alt=''
                />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default TopBar