import React from 'react'
import {HomeContainer, HomeBackground, HomeContent, Homeh1, Homeh3} from './HomeBlockElements'

const HomeBlock = () => {
    return (
        <HomeContainer>
            <HomeBackground>
                <HomeContent>
                    <Homeh1>Hello, welcome to my webpage!</Homeh1>
                    <Homeh3>My name is Catherine Milano. I am a software engineer</Homeh3>
                </HomeContent>
            </HomeBackground>
        </HomeContainer>
    )
}

export default HomeBlock
