import React, { Component } from 'react';

import { Route, Switch, Link } from "react-router-dom";
import "./Navbar.css";

import {
  Navbar,
  NavbarBrand,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  UncontrolledDropdown,
  Nav
} from 'reactstrap';
import Dashboard from './Dashboard';
import Notification from './Notification';
import Request from './Request';
import Produce from './Produce';
import Message from './Message';
import Profile from './Profile';
import Auth from "../../helper/Auth";
class FarmerDashboard extends Component{
    onLogout = async () => {
        const { users } = this.props;
        console.log(users)
        const { logout } = this.props;
        console.log(logout)
        await logout();
        await Auth.deauthenticateUser();
        
    }
   render() {
       const { computedMatch } = this.props;
       console.log(this.props, " this is the props");
       const { users, data } = this.props;
       console.log("This are the users", users, data)
    return (
       
        <div className="wrapper">
            <div className="navigation">
            <Navbar light expand="md">
            
            <NavbarBrand color="dark" className="brand"><Link to="/">Green Connect</Link></NavbarBrand>
                <Nav className="ml-auto tWhite" navbar>
                    <UncontrolledDropdown nav inNavbar className="brand1">
                        <DropdownToggle nav caret>
                        <i className="fas fa-user"/> <span></span>
                        </DropdownToggle>
                        <DropdownMenu right className="dropdown-bg">
                            <DropdownItem>
                              Dashboard
                            </DropdownItem>
                            <DropdownItem>
                              Profile
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                               <span onClick={this.onLogout}>Sign Out</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
            </div>
            <div className="page-wrapper">
                  {/* The left sidebar */}
                  <div className="left-sidebar">
                 
                       <ul>
                            <li><i className="fas fa-tachometer-alt items-nav"/>  <Link to="/dashboard" >Dashboard</Link></li>
                            <li><i className="fas fa-bell items-nav"/>  <Link to="/dashboard/notification" className="app-name">Notifications</Link></li>
                            <li><i className="fab fa-accessible-icon items-nav"/>  <Link to="/dashboard/requests" className="app-name">View Requests</Link></li>
                            <li><i className="fab fa-sellsy items-nav"/>  <Link to="/dashboard/produce" className="app-name">Sell Produce</Link></li>
                            <li><i className="far fa-envelope items-nav"/>  <Link to="/dashboard/message" className="app-name">Unread Messages</Link></li>
                            <li><i className="fas fa-cog items-nav"/>  <Link to="/dashboard/profile" className="app-name">Profile</Link></li>
                       </ul>
                    </div>

                      {/* The main content */}
                
                 <div className="main-content">
                       <div className="content-container">
                        <Switch>
                            <Route exact path={`${computedMatch.url}`} component={Dashboard} />
                            <Route path={`${computedMatch.url}/notification`} component={Notification} />
                            <Route path={`${computedMatch.url}/requests`} component={Request} />
                            <Route path={`${computedMatch.url}/produce`} component={Produce} />
                            <Route path={`${computedMatch.url}/message`} component={Message} />
                            <Route path={`${computedMatch.url}/profile`} component={Profile} />
                        </Switch>
                    </div>  
                    </div>
                 </div>
            </div>
    )
   }
    
}

export default FarmerDashboard;