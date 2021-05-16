import React from 'react'
import {HomeContainer, HomeBackground, HomeContent, VideoBg} from '../HomeBlock/HomeBlockElements'
import Video from '../../video/pink.mp4';
import {HeadContainer, BodyContainer, Header, ImageContainer, Description, ButtonLinks, Links } from '../../components/NightsInProject/NightsInElements';
import weatherdashboard from '../../images/portfolio/weatherdashboard.png';

const WeatherDashboardProject = () => {
    return (
        <HomeContainer id="home">
            <HomeBackground>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBackground>

            <HomeContent>
                <HeadContainer>
                    <Header style={{fontSize: "46px", marginTop: "20px"}}>Weather Dashboard</Header>
                </HeadContainer>

                <ImageContainer >
                    <img 
                    src={weatherdashboard} 
                    height={300} 
                    width={300}
                    style={{border: "20px solid black", marginTop: "18px"}}
                    />
                </ImageContainer>

                <BodyContainer>
                    <Description>This App allows you to enter in a city and it will display the weather with city name, icon, temperature, humidity, wind speed, and uv index. It also will show a 5-day forecast for that city and create a button for each search. If the page is reloaded, the last city search with pop up. </Description>
                    <Description style={{fontStyle: "italic", marginBottom: "0"}}>Technology Used:</Description><Description style={{marginTop: "0"}}>HTML, CSS, Javascript, Bootstrap, and Local</Description>
                    
                    <a href='https://github.com/katemilano/weatherdashboard'>[]
                    <ButtonLinks style={{marginRight: "0", backgroundColor: "#ecb7bf"}}>View on Github</ButtonLinks>
                    </a>

                    <a href='https://katemilano.github.io/weatherdashboard/'>
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

export default WeatherDashboardProject
