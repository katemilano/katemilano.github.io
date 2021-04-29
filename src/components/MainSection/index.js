import React from 'react'
import {MainContainer, MainContent, MainCard, MainCardContent, CardFront, CardBack, CardTitle, CardBody} from './MainSectionElements'
import pic from '../../images/image.png';

const MainSection = () => {
    return (
        <>
            <MainContainer>
                <MainContent>
                    <MainCard>
                        <MainCardContent>
                            <CardFront>
                                <img src={pic} alt="project1" height={300} width={300}/>
                            </CardFront>
                            <CardBack>
                                <CardTitle>Project 1</CardTitle>
                                <CardBody>This project was </CardBody>
                            </CardBack>
                        </MainCardContent>
                    </MainCard>
                    <MainCard>
                        <MainCardContent>
                            <CardFront>
                                <img src={pic} alt="project1" height={300} width={300}/>
                            </CardFront>
                            <CardBack>
                                <CardTitle>Project 1</CardTitle>
                                <CardBody>This project was </CardBody>
                            </CardBack>
                        </MainCardContent>
                    </MainCard>
                    <MainCard>
                        <MainCardContent>
                            <CardFront>
                                <img src={pic} alt="project1" height={300} width={300}/>
                            </CardFront>
                            <CardBack>
                                <CardTitle>Project 1</CardTitle>
                                <CardBody>This project was </CardBody>
                            </CardBack>
                        </MainCardContent>
                    </MainCard>
                </MainContent>
            </MainContainer>
        </>
    )
}

export default MainSection
