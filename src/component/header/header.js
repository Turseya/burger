import React from "react";
import {NavLink} from "react-router-dom";
import "./header.css";
import images from "../../assets/images.jpg"


const Header = () => {
    return (
        <div className="header">
            <div className="header-img">
                <img src={images} />
            </div>
            <div className="header-nav">
                <NavLink to="/burger-order">Burger</NavLink>
                <NavLink to="/auth">Authenticate</NavLink>
            </div>
        </div>
    )
}

export default Header;