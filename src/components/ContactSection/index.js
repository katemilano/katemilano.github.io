import React from 'react'
import {ContactFirstContainer, ContactSecondContainer, SectionHeader, ImageContainer, IconList, FirstWrap, SecondWrap, Description} from './ContactSectionElements';
import profilepic from '../../images/profilepic.jpg'
import {FaEnvelope} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'


const ContactSection = () => {
    return (
        <>
            <ContactFirstContainer>
                <FirstWrap>
                    <SectionHeader>Get In Touch!</SectionHeader>
                    <Description>Feel free to reach out to me through my email, LinkedIn, or my Github page if you have any questions.</Description>
                    <IconList>
                        <FaEnvelope style={{color: 'white'}} size={35}/>
                        <FaGithub style={{color: 'white'}} size={35}/>
                        <FaLinkedin style={{color: 'white'}} size={35}/>
                    </IconList>
                </FirstWrap>

                <SecondWrap>
                    <ImageContainer>
                        <img src={profilepic} alt="profilepic" height={300} width={350}/>
                    </ImageContainer>
                </SecondWrap>
            </ContactFirstContainer>
            <ContactSecondContainer>
                
            </ContactSecondContainer>
        </>
    )
}

export default ContactSection
