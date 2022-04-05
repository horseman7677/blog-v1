import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'

function TopBar() {
    const user = false

    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link to='/' className='link'>Home</Link>
                    </li>
                    <li className='topListItem'>
                        <Link to='/about' className='link'>About</Link>
                    </li>
                    <li className='topListItem'><Link to='/contact' className='link'>Contact</Link></li>
                    <li className='topListItem'><Link to='/write' className='link'>Write</Link></li>
                    <li className='topListItem'>
                        {user && 'Logout'}
                    </li>
                </ul>

            </div>
            <div className='topRight'>
                {
                    user ? (
                        <img
                            className='topImg'
                            src='https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/wgud0rg9ffk5kfdl_1593102048.jpeg'
                            alt=''
                        />
                    ) : (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link className='link' to='/login'>Login</Link>
                            </li>
                            <li className='topListItem'>
                                <Link className='link' to='/register'>Register</Link>
                            </li>
                        </ul>
                    )
                }

                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default TopBar