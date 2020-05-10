import React, { Component } from "react";
import { FaHome, FaUserAlt, FaTwitter,FaAddressCard,FaInstagram, FaProjectDiagram, FaAddressBook, FaBlog, FaMapPin, FaFacebookF } from "react-icons/fa";
import "./Dashboard.css";

class Dashboard extends Component{
  render() {
    return(
      
         <div className="container">
             <div className="sidebar">
                  <h2>Dashboard</h2>
                  <ul>
                    <li><a href="/"><FaHome className="fas-icon"/>Home</a></li>
                    <li><a href="/"><FaUserAlt className="fas-icon"/>Profile</a></li>
                    <li><a href="/"><FaAddressCard className="fas-icon"/>About</a></li>
                    <li><a href="/"><FaProjectDiagram className="fas-icon"/>Portfolio</a></li>
                    <li><a href="/"><FaBlog className="fas-icon"/>Blogs</a></li>
                    <li><a href="/"><FaAddressBook className="fas-icon"/>Contacts</a></li>
                    <li><a href="/"><FaMapPin className="fas-icon"/>Map</a></li>
                  </ul>
                  <div className="socials">
                     <a href="/"><FaFacebookF /></a>
                     <a href="/"><FaTwitter /></a>
                     <a href="/"><FaInstagram /></a>
                  </div>
             </div>
             <div className="main">
                <div className="header">Welcome Admin</div>
                <div className="info">
                   <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae mollitia voluptatibus ex cumque vel commodi laborum voluptas officiis! Commodi molestiae amet quidem quae iusto omnis similique consequatur? Neque dolorum rerum quis distinctio, commodi esse ab sed aliquam fugiat et veniam reprehenderit mollitia repudiandae officiis eaque suscipit nesciunt exercitationem ex quo? Aliquam dolores maiores, delectus error aliquid porro nostrum voluptates repellendus hic ea, necessitatibus voluptatibus odio, distinctio natus reiciendis itaque consectetur tenetur. Sunt odio possimus fugit autem delectus facilis ipsam?</div>
                   <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae mollitia voluptatibus ex cumque vel commodi laborum voluptas officiis! Commodi molestiae amet quidem quae iusto omnis similique consequatur? Neque dolorum rerum quis distinctio, commodi esse ab sed aliquam fugiat et veniam reprehenderit mollitia repudiandae officiis eaque suscipit nesciunt exercitationem ex quo? Aliquam dolores maiores, delectus error aliquid porro nostrum voluptates repellendus hic ea, necessitatibus voluptatibus odio, distinctio natus reiciendis itaque consectetur tenetur. Sunt odio possimus fugit autem delectus facilis ipsam?</div>
                   <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae mollitia voluptatibus ex cumque vel commodi laborum voluptas officiis! Commodi molestiae amet quidem quae iusto omnis similique consequatur? Neque dolorum rerum quis distinctio, commodi esse ab sed aliquam fugiat et veniam reprehenderit mollitia repudiandae officiis eaque suscipit nesciunt exercitationem ex quo? Aliquam dolores maiores, delectus error aliquid porro nostrum voluptates repellendus hic ea, necessitatibus voluptatibus odio, distinctio natus reiciendis itaque consectetur tenetur. Sunt odio possimus fugit autem delectus facilis ipsam?</div>

                </div>
             </div>
         </div>
    )
  }
}

export default Dashboard;