import React from 'react'
import {HomeContainer, HomeBackground, HomeContent, VideoBg} from '../HomeBlock/HomeBlockElements'
import Video from '../../video/pink.mp4';
import {HeadContainer, BodyContainer, Header, ImageContainer } from './NightsInElements'
import image from '../../images/portfolio/image.png';

const NightsInProject = () => {
    return (
        <HomeContainer id="home">
            <HomeBackground>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBackground>

            <HomeContent>
                <HeadContainer>
                    <Header>Nights-In</Header>
                </HeadContainer>

                <ImageContainer >
                    <img src={image} height={300} width={300}/>
                </ImageContainer>

                <BodyContainer>
                    <p>hello world</p>
                </BodyContainer>
           
            </HomeContent>

            
        </HomeContainer>
    )
}

export default NightsInProject
