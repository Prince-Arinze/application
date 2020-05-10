import React from "react";
import { Link } from "react-router-dom";

const Services = props => {
    return (
        <div className="services">
           <div className="item1">
               <h2 className="heading"><Link to="/genealogy">Genealogy</Link></h2>
               <p>As well as personnel files, the Military Archives is the repository of several other collections, many of which are digitised and available on this website, that are of interest to those researching their family history. </p>
           </div>
           <div className="item2">
               <h2 className="heading"><Link to="/research">Academic Research</Link></h2>
               <p>As the official place of deposit for the records of the Irish Defence Forces and Department of Defence, the archival material at the Military Archives constitutes the documentary evidence of Ireland’s military heritage.  This material spans the revolutionary period, through the foundation of the National Army, right up to the present day. </p>
           </div>
           <div className="item3">
               <h2><Link to="/digital">Digital Resources </Link></h2>
                <Link to="/publications"> > Publications</Link><br /><br />
                <Link to="/exhibitions"> > Online exhibitions</Link>
           </div>
           <div className="item4">
           <h2><Link to="/education">Educations</Link></h2>
               <Link to="/publications"> > Teachers</Link><br /><br />
               <Link to="/exhibitions"> > Students</Link>
           </div>
           <div className="item5">
           <h2><Link to="/media">Media</Link></h2>
               <p>Information for media professionals who wish to use the Military Archives for content research or producing content on location.</p>
           </div>
           <div className="item6">
           <h2><Link to="/donate">Donate/Community</Link></h2>
               <p> Information for those wishing to donate material to the Military Archives, or assist in our Image Identification or Oral History Projects.</p>
           </div>
        </div>
    )
}

export default Services;