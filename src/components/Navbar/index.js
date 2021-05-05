import React from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll } from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks
} from './NavbarElements';
import home from '../HomeBlock'
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import { Link } from 'react-router-dom';


const Navbar = ({ toggle }) => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/home' onClick={toggleHome}>Catherine Milano</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                                to='home'
                                smooth={true}
                                duraction={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='projects'
                                smooth={true}
                                duraction={500}
                                spy={true}
                                exact='true'
                                offset={-20}
                                >Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='skills'
                                smooth={true}
                                duraction={500}
                                spy={true}
                                exact='true'
                                offset={-150}
                                >Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                to='contact'
                                smooth={true}
                                duraction={500}
                                spy={true}
                                exact='true'
                                offset={60}
                                >Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
