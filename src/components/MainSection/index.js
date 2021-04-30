import React from 'react'
import {MainContainer, MainContent, MainCard, MainCardContent, CardFront, CardBack, CardTitle, CardBody, Header} from './MainSectionElements'
import pic from '../../images/image.png';
import locationhub from '../../images/locationhub.png';
import workoutapp   from '../../images/workoutapp.png'


const MainSection = () => {
    return (
        <>
        <Header>Projects</Header>
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
                                    <img src={locationhub} alt="project1" height={300} width={300}/>
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
                                    <img src={workoutapp} alt="project1" height={300} width={300}/>
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
