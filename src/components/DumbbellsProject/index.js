import React from 'react'
import {HomeContainer, HomeBackground, HomeContent, VideoBg} from '../HomeBlock/HomeBlockElements';
import Video from '../../video/pink.mp4';
import {HeadContainer, BodyContainer, Header, ImageContainer, Description, ButtonLinks, Links } from '../NightsInProject/NightsInElements';
import workoutapp from '../../images/portfolio/workoutapp.png';

const DumbbellsProject = () => {
    return (
        <HomeContainer id="home">
            <HomeBackground>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBackground>

            <HomeContent>
                <HeadContainer>
                    <Header style={{fontSize: "40px", marginTop: "25px"}}>Dumbbells For Dummies</Header>
                </HeadContainer>

                <ImageContainer >
                    <img 
                    src={workoutapp} 
                    height={300} 
                    width={300}
                    style={{border: "20px solid black", marginTop: "18px"}}
                    />
                </ImageContainer>

                <BodyContainer>
                    <Description>This program will help people new to the gym get started with workout routines. It allows a user to search workouts based on the equipment they have available and certain muscle groups to ensure they have the proper workouts. </Description>
                    <Description style={{fontStyle: "italic", marginBottom: "0"}}>Technology Used:</Description><Description style={{marginTop: "0"}}>HTML, CSS, Bootstrap, JavaScript, Express Handlebars, AnimeJS, Express, mySQL, Sequelize, and Exercise API</Description>
                    
                    <a href='https://github.com/katemilano/project2/'>
                    <ButtonLinks style={{marginRight: "0", backgroundColor: "#ecb7bf"}}>View on Github</ButtonLinks>
                    </a>

                    <a href='https://project2-kate.herokuapp.com/'>
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

export default DumbbellsProject;
