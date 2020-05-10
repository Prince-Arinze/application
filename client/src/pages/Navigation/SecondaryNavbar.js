import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCaretDown, FaAlignRight } from "react-icons/fa"
import "./SecondaryNav.css";
const SecondaryNavbar = (props) => {
  
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = ()  => setIsOpen(!isOpen);
    return (
        <div className="secondary-navbar">
            <button type="button" id="nav-btn" onClick={handleToggle}><FaAlignRight /></button>
            <ul className={!isOpen? "navbar-lists-1 show-nav":"navbar-lists-1"}>
                <li><NavLink to="#">All Collections &nbsp;<FaCaretDown /> </NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/news">News & Updates</NavLink ></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>

                <li><NavLink to="/genealogy">Genealogy</NavLink></li>
                <li><NavLink to="/research">Academic Research</NavLink></li>
                <li><NavLink to="/resources">Digital Resources</NavLink ></li>
                <li><NavLink to="/education">Education</NavLink></li>
                <li><NavLink to="/media">Media</NavLink></li>
                <li><NavLink to="/donate">Donate/Community</NavLink></li>
            </ul>
        </div>
    )
}


export default SecondaryNavbar