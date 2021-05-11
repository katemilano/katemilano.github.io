import React from 'react'
import {ContactFirstContainer, ContactSecondContainer, SectionHeader, ImageContainer, IconList, FirstWrap, SecondWrap, Description, Icons} from './ContactSectionElements';
import profilepic from '../../images/profilepic.jpg'
import {FaEnvelope} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import pink3 from '../../images/pink3.png';


const ContactSection = () => {
    return (
        <>
            <ContactFirstContainer id="contact" style={{backgroundImage: `url(${pink3})`}}>
                <FirstWrap>
                    <ImageContainer>
                        <img 
                            src={profilepic} alt="profilepic" 
                            height={320} 
                            width={380}
                            style={{border: "15px solid black"}}
                            />
                    </ImageContainer>
                </FirstWrap>

                <SecondWrap>
                    <SectionHeader>Get In Touch</SectionHeader>
                        <Description>Have questions? Feel free to reach out to me through my email, LinkedIn, or my Github page.</Description>
                        <IconList>
                            <Icons>
                                <FaEnvelope style={{color: 'black', marginLeft: "-300px"}} size={35}/>
                                <a href="mailto:catherine.ann.milano@gmail.com" style={{color: 'black', marginLeft: "80px", marginTop: "0px", fontSize: "28px", fontFamily: "'Montserrat Subrayada', sans-serif"}}>My Email</a>
                            </Icons>
                            <Icons>
                                <FaGithub style={{color: 'black', marginLeft: "-290px"}} size={35}/>
                                <a href="https://github.com/katemilano/" style={{color: 'black', marginLeft: "80px", marginTop: "0px", fontSize: "28px", fontFamily: "'Montserrat Subrayada', sans-serif"}}>My Github</a>
                            </Icons>
                            <Icons>
                                <FaLinkedin style={{color: 'black', marginLeft: "-270px"}} size={38}/>
                                <a href="https://www.linkedin.com/in/catherine-milano-3aa22a116/" style={{color: 'black', marginLeft: "80px", marginTop: "0px", fontSize: "26px", fontFamily: "'Montserrat Subrayada', sans-serif"}}>My LinkedIn</a>
                            </Icons>
                        </IconList>

                    
                </SecondWrap>
            </ContactFirstContainer>
            <ContactSecondContainer>
                
            </ContactSecondContainer>
        </>
    )
}

export default ContactSection
