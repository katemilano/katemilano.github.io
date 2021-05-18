import React from 'react'
import {HomeContainer, HomeBackground, HomeContent, VideoBg} from '../HomeBlock/HomeBlockElements';
import Video from '../../video/pink.mp4';
import {HeadContainer, BodyContainer, Header, ImageContainer, Description, ButtonLinks, Links } from '../../components/NightsInProject/NightsInElements';
import locationhub from '../../images/portfolio/locationhub.png';

const LocationHubProject = () => {
    return (
        <HomeContainer id="home">
            <HomeBackground>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBackground>

            <HomeContent>
                <HeadContainer>
                    <Header style={{fontSize: "60px"}}> Location Hub</Header>
                </HeadContainer>

                <ImageContainer >
                    <img 
                    src={locationhub} 
                    height={300} 
                    width={300}
                    style={{border: "20px solid black", marginTop: "18px"}}
                    />
                </ImageContainer>

                <BodyContainer>
                    <Description>The Location Hub was a group application made to make traveling and visiting a new place easier.  This application allows you to search the city of your choosing and provide information about the area including the covid cases, weather, and local high-rated restaurant all with one click. </Description>
                    <Description style={{fontStyle: "italic", marginBottom: "0"}}>Technology Used:</Description><Description style={{marginTop: "0"}}>HTML, CSS, JQuery, Bootstrap, Google Fonts, Weather API, Covid API, and Restaurant API.
</Description>
                    
                    <a href='https://github.com/zsmith4331/project1-team4'>
                    <ButtonLinks style={{marginRight: "0",  backgroundColor: "#fc4c4e"}}>View on Github</ButtonLinks>
                    </a>

                    <a href='https://zsmith4331.github.io/project1-team4/'>
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

export default LocationHubProject;
