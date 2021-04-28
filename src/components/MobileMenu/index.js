import React from 'react';
import {MobileMenuContainer, Icon, CloseIcon} from './MobileMenuElements';

const MobileMenu = () => {
    return (
        <MobileMenuContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <MobileWrapper>
                <MMenu>
                    <MobileMenuLink to='home'>Home</MobileMenuLink>
                    <MobileMenuLink to='projects'>Projects</MobileMenuLink>
                    <MobileMenuLink to='skills'>Skills</MobileMenuLink>
                    <MobileMenuLink to='contact'>Contact</MobileMenuLink>                    
                </MMenu>
            </MobileWrapper>
        </MobileMenuContainer>
    )
}

export default MobileMenu
