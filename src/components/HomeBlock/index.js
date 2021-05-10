import React from 'react'
import {HomeContainer, HomeBackground, HomeContent, Homeh1, Homeh3, WrapText, VideoBg} from './HomeBlockElements'
import Video from '../../video/pink.mp4';

const HomeBlock = () => {
    return (
        <HomeContainer id="home">
            <HomeBackground>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBackground>

            <HomeContent>
                <Homeh1 style={{marginRight: "500px", fontSize:"100px", fontFamily: " 'Sen', sans-serif"}}>Hello, </Homeh1>
                <Homeh1 style={{marginTop: "0px"}}>Welcome to my webpage.</Homeh1>
                <Homeh3>
                    Software Engineer with Bachelors of Science in Engineering and Bootcamp certified in coding. Looking to apply my problem solving skills and excited to continue my passion for coding and my endless journey of learning more about new technology.
                </Homeh3>
            </HomeContent>

            
        </HomeContainer>
    )
}

export default HomeBlock
