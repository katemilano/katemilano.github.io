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
                <Homeh1 style={{marginRight: "500px", fontSize:"100px"}}>Hello, </Homeh1>
                <Homeh1 style={{marginTop: "0px"}}>Welcome to my portfolio.</Homeh1>
                <Homeh3>
                    Software Engineer with Bachelors of Science in Engineering and Bootcamp certified in coding. Excited to continue my passion for coding, problem solving, and my endless journey of learning more about new technology.
                </Homeh3>
            </HomeContent>

            
        </HomeContainer>
    )
}

export default HomeBlock
