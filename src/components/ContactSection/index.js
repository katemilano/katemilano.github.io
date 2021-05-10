import React from 'react'
import {ContactFirstContainer, ContactSecondContainer, SectionHeader, ImageContainer, IconList, FirstWrap, SecondWrap, Description} from './ContactSectionElements';
import profilepic from '../../images/profilepic.jpg'
import {FaEnvelope} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import Pink2 from '../../images/pink1.png';


const ContactSection = () => {
    return (
        <>
            <ContactFirstContainer id="contact" style={{backgroundImage: `url(${Pink2})`}}>
                <FirstWrap>
                    <SectionHeader>Get In Touch!</SectionHeader>
                    <Description>Have questions? Feel free to reach out to me through my email, LinkedIn, or my Github page.</Description>
                    <IconList>
                        <FaEnvelope style={{color: '#DCE3AA', marginBottom: "50px"}} size={35}/>
                        <FaGithub style={{color: '#A4D7CE', marginBottom: "50px"}} size={35}/>
                        <FaLinkedin style={{color: '#FD4B54', marginBottom: "30px"}} size={35}/>
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
