import React from 'react'
import {HomeContainer, HomeBackground, HomeContent, VideoBg} from '../HomeBlock/HomeBlockElements';
import Video from '../../video/pink.mp4';
import {HeadContainer, BodyContainer, Header, ImageContainer, Description, ButtonLinks, Links } from '../../components/NightsInProject/NightsInElements';
import codequiz from '../../images/portfolio/codequiz.png';

const CodeQuizProject = () => {
    return (
        <HomeContainer id="home">
            <HomeBackground>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBackground>

            <HomeContent>
                <HeadContainer>
                    <Header>Code Quiz</Header>
                </HeadContainer>

                <ImageContainer >
                    <img 
                    src={codequiz} 
                    height={300} 
                    width={300}
                    style={{border: "20px solid black", marginTop: "18px"}}
                    />
                </ImageContainer>

                <BodyContainer>
                    <Description>The quiz goes through a series of coding questions alerting you if you have answered the question correctly. Simultaneously, a timer begins when the quiz is started. The quiz score is made up of a combination of time left and the amount of questions answered correctly. The quiz also allows you to view highscores! </Description>
                    <Description style={{fontStyle: "italic", marginBottom: "0"}}>Technology Used:</Description><Description style={{marginTop: "0"}}>HTML, CSS, and JavaScript</Description>
                    
                    <a href='https://github.com/katemilano/codequiz'>
                    <ButtonLinks style={{marginRight: "0", backgroundColor: "#ecb7bf"}}>View on Github</ButtonLinks>
                    </a>

                    <a href='https://katemilano.github.io/codequiz/'>
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

export default CodeQuizProject;
