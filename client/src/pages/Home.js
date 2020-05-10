import React from "react";
import Section from "./Navigation/components/Sections";
import Services from "./Navigation/components/Services";
import { Link } from "react-router-dom";
import News from "./Navigation/components/News";
import { Map } from "./Navigation/components/Map/Map";
import SecondaryFooter from "./Navigation/SecondaryFooter";
import Footer from "./Navigation/Footer";
import Navbar from "./Navigation/Navbar"
import SecondaryNavbar from "./Navigation/SecondaryNavbar"
const Home = (props) => {
    return (
        <React.Fragment>
                <Navbar />
               <SecondaryNavbar />
           <Section />
           <p className="notice">
               As a precautionary measure, given the current advice from the Government in relation to Covid-19 and consequent reduced staffing levels on-site, the reading room will be closed and we will be unable to attend to all queries until after 29th March.
            </p>
            <Services />
            <div className="update" style={{display: "flex", width: "100%",maxWidth: "100%",margin: "0 auto"}}>
                <h2 style={{order: 1, flex: "1 1 37%", alignSelf: "flex-start", padding: "0px 20px", fontSize: "36px", fontFamily: "sans-seriff", marginTop: "-3px", fontWeight: "200"}}>News & Updates</h2>
                <Link to="/some" style={{order: 2, flex: "1 1 50px", alignSelf: "flex-center", padding: "10px 15px 20px 25px", fontSize: "18px", fontFamily: "sans-seriff", textDecoration:"none", color: "#a57e38", marginTop: "2px"}}>View All > </Link>
                <Link to="/some" style={{order: 3, flex: "1 1 600px", alignSelf: "flex-end", padding: "0px 20px", marginBottom:"50px", fontSize: "36px", fontFamily: "sans-seriff", textDecoration:"none", color: "#a57e38", fontWeight: "200"}}><span style={{color:"#000000"}}>Tweets  by </span> @dfarchives </Link>
            </div>
            <News />
            <Map />
            <SecondaryFooter />
            <Footer />
        </React.Fragment>
    )
}


export default Home;