import React from 'react'
import {HomeContainer, HomeBackground, HomeContent, VideoBg} from '../HomeBlock/HomeBlockElements'
import Video from '../../video/pink.mp4';
import {HeadContainer, BodyContainer, Header, ImageContainer, Description, ButtonLinks, Links } from './NightsInElements'
import image from '../../images/portfolio/image.png';

const NightsInProject = () => {
    return (
        <HomeContainer id="home">
            <HomeBackground>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBackground>

            <HomeContent>
                <HeadContainer>
                    <Header style={{fontFamily: "'Montserrat Subrayada',sans-seri" }}>Nights-In</Header>
                </HeadContainer>

                <ImageContainer >
                    <img 
                    src={image} 
                    height={300} 
                    width={300}
                    style={{border: "20px solid black", marginTop: "18px"}}
                    />
                </ImageContainer>

                <BodyContainer>
                    <Description>Nights-In is an interactive app that allows you to sign into your account and invite friends through calendar invites to an online game.  Whether you are close or far away you can join the game and virtually have game night and play trivia game together. </Description>
                    <Description style={{fontStyle: "italic", marginBottom: "0"}}>Technology Used:</Description><Description style={{marginTop: "0"}}>HTML, CSS, React, and mySQL</Description>
                    
                    <a href='https://github.com/JFunck1990/Nights-In'>
                    <ButtonLinks style={{marginRight: "0", backgroundColor: "#fc4c4e"}}>View on Github</ButtonLinks>
                    </a>

                    <a href='https://nights-in.herokuapp.com/'>
                    <ButtonLinks style={{marginRight: "100px", marginLeft: "10px", backgroundColor: "#DCE3AA"}}>View it Live</ButtonLinks>
                    </a>

                    <Links
                     to='/'
                     smooth={true}
                     duraction={500}
                     spy={true}
                     exact='true'
                     offset={-80}
                     style={{color: "lightgrey", fontSize: "18px"}}
                     >Back to home </Links>



                </BodyContainer>
           
            </HomeContent>

            
        </HomeContainer>
    )
}

export default NightsInProject
