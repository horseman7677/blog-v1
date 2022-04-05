import React from "react";
import "./sidebar.css";

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://images.unsplash.com/photo-1639502003030-34c1d317e890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
                    alt=""
                />
                <p>
                    In publishing and graphic design, Lorem ipsum is a placeholder text
                    commonly used to demonstrate the visual form of a document or a
                    typeface without relying on meaningful content. Lorem ipsum may be
                    used as a placeholder before the final copy is available
                </p>
                <div className="sidebarItem">
                    <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Life</li>
                        <li className="sidebarListItem">Music</li>
                        <li className="sidebarListItem">Style</li>
                        <li className="sidebarListItem">Sport</li>
                        <li className="sidebarListItem">Teck</li>
                        <li className="sidebarListItem">Cinema</li>
                    </ul>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                        <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                        <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
