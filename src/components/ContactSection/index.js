import React from 'react'
import {ContactFirstContainer, ContactSecondContainer, SectionHeader, ImageContainer, IconList, FirstWrap, SecondWrap, Description, Icons, Img, ImgCont} from './ContactSectionElements';
import profilepic from '../../images/profilepic.jpg'
import {FaEnvelope} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaFileDownload} from 'react-icons/fa'
import pink3 from '../../images/pink3.png';
import resume from '../../files/CMilanoResume.pdf';


const ContactSection = () => {
    return (
        <>
            <ContactFirstContainer id="contact" style={{backgroundImage: `url(${pink3})`}}>
                <FirstWrap>
                    <ImageContainer>
                        <ImgCont>
                            <Img 
                                src={profilepic} alt="profilepic" 
                                height={320} 
                                width={380}
                            />
                        </ImgCont>
                        
                    </ImageContainer>
                </FirstWrap>

                <SecondWrap>
                    <SectionHeader>Get In Touch</SectionHeader>
                        <Description>Have questions? Feel free to reach out to me through my email, LinkedIn, or my Github page.</Description>
                        <IconList>
                            <Icons>
                                <FaEnvelope style={{color: 'black', marginLeft: "-300px"}} size={35}/>
                                <a href="mailto:catherine.ann.milano@gmail.com" style={{color: 'black', marginLeft: "50px", fontSize: "28px", fontFamily: "'Montserrat Subrayada', sans-serif"}}>My Email</a>
                            </Icons>
                            <Icons>
                                <FaGithub style={{color: 'black', marginLeft: "-290px"}} size={35}/>
                                <a href="https://github.com/katemilano/" style={{color: 'black', marginLeft: "50px", marginTop: "0px", fontSize: "28px", fontFamily: "'Montserrat Subrayada', sans-serif"}}>My Github</a>
                            </Icons>
                            <Icons>
                                <FaLinkedin style={{color: 'black', marginLeft: "-270px"}} size={38}/>
                                <a href="https://www.linkedin.com/in/catherine-milano-3aa22a116/" style={{color: 'black', marginLeft: "50px", marginTop: "0px", fontSize: "26px", fontFamily: "'Montserrat Subrayada', sans-serif"}}>My LinkedIn</a>
                            </Icons>
                            <Icons>
                                <FaFileDownload style={{color: 'black', marginLeft: "-290px"}} size={38}/>
                                <a href={resume} style={{color: 'black', marginLeft: "50px", marginTop: "0px", fontSize: "26px", fontFamily: "'Montserrat Subrayada', sans-serif"}}>My Resume</a>
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
