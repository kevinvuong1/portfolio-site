import React, {Component} from 'react';
import {Navbar, Nav, NavItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Header extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    navHandler = (eventKey) => {
        const {history} = this.context.router;

        switch(eventKey) {
            case 1:
                history.push('/');
                break;
            case 2:
                history.push('/about');
                break;
            case 3:
                history.push('/contact');
                break;
            default:
                break;
        }
    };

    render(){
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Kevin Vuong's Portfolio</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={2} onSelect={this.navHandler}>About Me</NavItem>
                    <NavItem eventKey={3} onSelect={this.navHandler}>Contact</NavItem>
                </Nav>
            </Navbar>
        );
    }

}

export default Header;