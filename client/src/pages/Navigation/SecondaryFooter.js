import React from "react";
import { NavLink } from "react-router-dom";
import "./SecondaryFooter.css";
const SecondaryFooter = (props) => {
    return (
        <div className="secondary-footer">
            <ul className="footer-lists-1">
                <li className="footer-items-left"><NavLink to="#">Glosary</NavLink><NavLink to="/faq">FAQ</NavLink><NavLink to="/news">Sitemap</NavLink ><NavLink to="/t&c">Terms & Conditions</NavLink><NavLink to="/contact">Accesibilty</NavLink> <NavLink to="/privacy">Privacy Statement</NavLink></li>

            <li className="footer-items-right" style={{flex: "1 1 100px", float:"right"}}>&copy; Defence Intelligence Agency {new Date().getFullYear()}</li>
            </ul>
        </div>
    )
}

export default SecondaryFooter
