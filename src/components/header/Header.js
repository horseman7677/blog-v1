import React from 'react'
import './header.css'

function Header() {
    return (
        <div className='header'>
            <div className='headerTitles'>
                <span className='headerTitleSm'>horseman company</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img
                className='headerImg'
                src='https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80'
                alt=''
            />
        </div>
    )
}

export default Header