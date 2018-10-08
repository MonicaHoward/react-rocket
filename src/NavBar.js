import React, {Component} from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    background: #561D39;
    color: #002A32;
    display: grid;
    grid-template-columns: 300px auto 200px 200px;
    padding: 40px;
    position: relative;
    z-index: 1;
`
const Logo = styled.div`
    color: #002A32;
    font-size: 2em;
`
const NavLink = styled.a`
    cursor: pointer;
    font-size: 1.5em;    
`

class NavBar extends Component {
    render(){
        return(
            <Nav>
                <Logo>
                    Rocket Watcher
                </Logo>
                <div>
                </div>
                <NavLink>
                    About
                </NavLink>
                <NavLink>
                    Upcoming Launches
                </NavLink>
            </Nav>
        )
    }
}

export default NavBar;