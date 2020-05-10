import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Banner from "./Banner";
import { FaSearch } from "react-icons/fa";

const Section = () => {
    return (
        <Fragment>
            <Hero>
            <Banner title="Explore Our History, and Yours">
            <Link to="/" className="btn-primary">Browse and search all collections &nbsp; <FaSearch/></Link>
            </Banner>
            </Hero>
        </Fragment>
    )
}
export default Section;