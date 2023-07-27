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
                <Homeh1 style={{marginRight: "500px", fontSize:"100px"}}>Hello, Welcome</Homeh1>
            </HomeContent>

            
        </HomeContainer>
    )
}

export default HomeBlock
