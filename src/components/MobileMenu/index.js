import React from 'react';
import {MobileMenuContainer, Icon, CloseIcon, MobileWrapper, MMenu, MobileMenuLink} from './MobileMenuElements';

const MobileMenu = ({ isOpen, toggle }) => {
    return (
        <MobileMenuContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={ toggle }>
                <CloseIcon/>
            </Icon>
            <MobileWrapper>
                <MMenu>
                    <MobileMenuLink 
                        to='home'
                        smooth={true}
                        duraction={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onClick={toggle}
                        >Home</MobileMenuLink>
                    <MobileMenuLink 
                        to='projects'
                        smooth={true}
                        duraction={500}
                        spy={true}
                        exact='true'
                        offset={-20} onClick={toggle}
                        >Projects</MobileMenuLink>
                    <MobileMenuLink 
                        to='skills' 
                        smooth={true}
                        duraction={500}
                        spy={true}
                        exact='true'
                        offset={-150}
                        onClick={toggle}
                        >Skills</MobileMenuLink>
                    <MobileMenuLink 
                        to='contact' 
                        smooth={true}
                        duraction={500}
                        spy={true}
                        exact='true'
                        offset={60}
                        onClick={toggle}
                        >Contact</MobileMenuLink>                    
                </MMenu>
            </MobileWrapper>
        </MobileMenuContainer>
    )
}

export default MobileMenu
