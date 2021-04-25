import React, { Component, useEffect } from 'react';
import MenuItems from './MenuItems';
import {Button} from '../Button';
import './Navbar.css';

class Navbar extends Component{
    state = {clicked: false, nav: false}
    
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    
    listener = null;
    
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    
    componentWillUnmount() {
      window.removeEventListener('scroll');
    }
    
    handleScroll = () => {
        if(window.pageYOffset > 140) {
            if(!this.state.nav) {
                this.setState({ nav: true });
            }
        } else {
            if(this.state.nav) {
                this.setState({ nav: false });
            }
        }
    }
    
    render () {
        return (
            <nav className = {`NavbarItems ${this.state.nav && 'Nav'}`}>
                
                <h1 className = "navbar-logo">Covid Conqueror <em className = 'fas fa-shield-virus'></em></h1>
                
                <div className = "menu-icon" onClick = {this.handleClick}>
                    <em className = {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></em>
                </div>
                
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key = {index}>
                                <a className = {item.cName} href = {item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;