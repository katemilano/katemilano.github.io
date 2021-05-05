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
                    <MobileMenuLink to='/' onClick={toggle}>Home</MobileMenuLink>
                    <MobileMenuLink to='projects' onClick={toggle}>Projects</MobileMenuLink>
                    <MobileMenuLink to='skills' onClick={toggle}>Skills</MobileMenuLink>
                    <MobileMenuLink to='contact' onClick={toggle}>Contact</MobileMenuLink>                    
                </MMenu>
            </MobileWrapper>
        </MobileMenuContainer>
    )
}

export default MobileMenu
