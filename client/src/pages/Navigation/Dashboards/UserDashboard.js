import React, { Component } from 'react';

import { Link, Route, Switch } from "react-router-dom";
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
class UserDashboard extends Component{
    onLogout = async () => {
        const { logout } = this.props;
        await logout();
        await Auth.deauthenticateUser();
    }
   render() {
       const { computedMatch } = this.props;
       console.log(this.props, " this is the props");
    return (
       
        <div className="wrapper">
            <div className="navigation">
            <Navbar light expand="md">
            
            <NavbarBrand color="dark" className="brand"><Link to="/">Green Connect</Link></NavbarBrand>
                <Nav className="ml-auto tWhite" navbar>
                    <UncontrolledDropdown nav inNavbar className="brand1">
                        <DropdownToggle nav caret>
                        <i className="fas fa-user"/> <span>Hi, Prince!</span>
                        </DropdownToggle>
                        <DropdownMenu right className="dropdown-bg">
                            <DropdownItem className="dropdowns">
                              Dashboard
                            </DropdownItem>
                            <DropdownItem className="dropdowns">
                              Profile
                            </DropdownItem>
                            <DropdownItem divider className="divide"/>
                            <DropdownItem className="dropdowns"  onClick={this.onLogout}>
                               sign out
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
                       <li><Link to="/dashboard">Dashboard</Link></li>
                       <li><Link to="/dashboard/notification">Notifications</Link></li>
                       <li><Link to="/dashboard/requests">View Requests</Link></li>
                       <li><Link to="/dashboard/produce" >Sell Produce</Link></li>
                       <li><Link to="/dashboard/message" >Unread Messages</Link></li>
                       <li><Link to="/dashboard/profile" >Profile</Link></li>
                       <li><Link to="/dashboard/logout" >Logout</Link></li>
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

export default UserDashboard;