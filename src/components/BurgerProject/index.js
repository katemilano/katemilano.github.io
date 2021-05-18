import React from 'react'
import {HomeContainer, HomeBackground, HomeContent, VideoBg} from '../HomeBlock/HomeBlockElements';
import Video from '../../video/pink.mp4';
import {HeadContainer, BodyContainer, Header, ImageContainer, Description, ButtonLinks, Links } from '../../components/NightsInProject/NightsInElements';
import burger from '../../images/portfolio/burger.png';

const BurgerProject = () => {
    return (
        <HomeContainer id="home">
            <HomeBackground>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBackground>

            <HomeContent>
                <HeadContainer>
                    <Header>Burger</Header>
                </HeadContainer>

                <ImageContainer >
                    <img 
                    src={burger} 
                    height={300} 
                    width={300}
                    style={{border: "20px solid black", marginTop: "18px"}}
                    />
                </ImageContainer>

                <BodyContainer>
                    <Description>This application allows a full stack app that the front-end and back-end interact with each other. The user is able to input their burger which appears on a list of "Burgers Made". When the "Devour it!" button is press, the burger switches into the "Burger Eaten" column. </Description>
                    <Description style={{fontStyle: "italic", marginBottom: "0"}}>Technology Used:</Description><Description style={{marginTop: "0"}}>JavaScript, ORM, jQuery, Node.js, Express.js, Handlebars.js, mySQL, BootStrap, and Heroku</Description>
                    
                    <a href='https://github.com/katemilano/burger'>
                    <ButtonLinks style={{marginRight: "0", backgroundColor: "#fc4c4e"}}>View on Github</ButtonLinks>
                    </a>

                    <a href='https://eataburger-app.herokuapp.com/'>
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

export default BurgerProject;
