import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { RightItems } from "./RightItems";
import { LeftItems } from './LeftItems';
import './Navbar.css';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    } 

    render() {
        return(
            <nav className="NavbarItems">
                <Link className="navbar-logo" to="/">FitForYou<i className="fab fa-foursquare"></i></Link>
                <div className="leftside"></div>
                 <ul className ={this.state.clicked ? 'nav-leftside active' : 'nav-leftside'}>
                    {LeftItems.map((item, index) => {
                     return (
                        <li key ={index}>
                             <Link className={item.cName} to = {item.url}>
                                {item.title} 
                            </Link>
                         </li>
                        )
                    })}
                </ul>

                <div className="rightside"></div>
                 <ul className ={this.state.clicked ? 'nav-rightside active' : 'nav-rightside'}>
                    {RightItems.map((item, index) => {
                     return (
                        <li key ={index}>
                             <Link className={item.cName} to = {item.url}>
                                {item.title} 
                            </Link>
                         </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;