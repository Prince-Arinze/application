import React from "react";
import imgs from "../../../images/military.jpg";
import imgss from "../../../images/machinegun.jpg"
import "./News.css"
const News = props => {
    return (
        <div className="news">
           <div className="news1">
               <h3 className="title">Christmas and New Year 2019/2020</h3>
               <h4 className="date">19 Dec 2019</h4>
               
               <p className="message">The Military Archives Reading Room is now closed for the Christmas period and public services will resume on Tuesday 7th January 2020.2019 has been a very successful year for the Military Archives, with the completion of several important projects. These have included: the cataloguing and release…<b>More...</b></p>
               <img src={imgs}  className="newsImg" alt="image1" />

           </div>
           <div className="news2">
               <h3 className="title2">Launch of the book "Badges and Insignia of the Irish Defence Forces"</h3>
               <h4 className="date2">22 Oct 2019</h4>
               
               <p className="message2">This afternoon the Military Archives proudly hosted the launch of ‘Badges and Insignia of the Irish Defence Forces’ by Flight Sergeant James G. Perkins (Retired). The book was launched in the Commandant Peter Young Reading Room by Brigadier General Rory O’Connor, General Officer Commanding the Air… <b>More...</b></p>
               <img src={imgss}  className="newsImg2" alt="image1" />
           </div>
           <div className="news3">
               <h3 className="title3">The Collins Papers Online Release</h3>
               <h4 className="date3">14 Oct 2019</h4>
               
               <p className="message3">In response to the ongoing Decade of Centenaries and increased public interest in accessing archives which chart the revolutionary period, the Military Archives is pleased to announce the online release of The Collins Papers. Over 6,000 documents dating from 1918 to early 1922, taking in the War of…<b>More...</b></p>
               <img src={imgss}  className="newsImg3" alt="image1" />
           </div>
           <div className="news4">
               <hr className="divider"/>
               <blockquote className="twitter-tweet"><p lang="en" dir="ltr">TROOPS MAUL ESCAPING INSURGENTS AND ARREST HIGH PROFILE INFORMANTS IN CLEARING OPERATIONS IN THE NORTH EAST<a href="https://t.co/CRwG3K4cVs">https://t.co/CRwG3K4cVs</a><a href="https://t.co/WzOCaWk1BY">https://t.co/WzOCaWk1BY</a></p>&mdash; Nigerian Army (@HQNigerianArmy) <a href="https://twitter.com/HQNigerianArmy/status/1257772963346202625?ref_src=twsrc%5Etfw">May 5, 2020</a></blockquote> 
              
           </div>
            <div className="news5">
               <h2 style={{marginTop: "-40px", color:"black", textAlign:"center", fontSize:"36px"}}>Featured Flickr Image</h2>
               <a data-flickr-embed="true" href="https://www.flickr.com/photos/militaryarchives/45247634804/in/photostream/" title="A_6(b) Kerry 1st Brigade &#x27;old records&#x27; Part 2_124"><img src="https://live.staticflickr.com/4850/45247634804_f2987d08b2.jpg" width="98%" height="300" alt="A_6(b) Kerry 1st Brigade &#x27;old records&#x27; Part 2_124"/></a>
           </div>
          
        </div>
    )
}

export default News;