import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Coat from "../../images/coat_of_arms.png"
import Army from "../../images/army.webp"
import Airforce from "../../images/1200px-Nigerian_Air_Force_emblem.svg.png"
import Navy from "../../images/Badge_of_the_Nigerian_Navy.svg"

const Footer = (props) => {
    return (
        <div className="footer">
            <ul className="footer-lists">
                <li className="footer-brand" style={{order: 1, flex: "1 1 37%", alignSelf: "center"}}>Follow Us: <br /><br />
                    <NavLink to="/"><AiFillTwitterCircle /></NavLink>&nbsp;&nbsp;&nbsp;
                    <NavLink to="/"><FaFacebook /></NavLink>
                </li>
                <li className="nav-item2" style={{order: 3, flex: "1 1 100px", alignSelf: "center"}}><NavLink to="/login"><img src={Coat} alt="coat of arms" style={{width: "100px", height: "100px"}}/></NavLink><NavLink to="/glosary"><img src={Army} alt="coat of arms" style={{width: "100px", height: "100px"}}/></NavLink><NavLink to="/glosary"><img src={Airforce} alt="coat of arms" style={{width: "100px", height: "100px"}}/></NavLink><NavLink to="/glosary"><img src={Navy} alt="coat of arms" style={{width: "100px", height: "100px"}}/></NavLink></li>
            </ul>

        </div>
    )
}


export default Footer