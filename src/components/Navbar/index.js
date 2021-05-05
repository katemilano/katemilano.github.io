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
                            <NavLinks href='/'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href='#projects'>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href='#skills'>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href='#contact'>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
