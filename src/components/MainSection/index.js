import React from 'react'
import {MainContainer, MainContent, MainCard, MainCardContent, CardFront, CardBack, CardTitle, CardBody, Header} from './MainSectionElements'
import nightsin from '../../images/portfolio/image.png';
import locationhub from '../../images/portfolio/locationhub.png';
import workoutapp   from '../../images/portfolio/workoutapp.png';
import burger from '../../images/portfolio/burger.png';
import codequiz from '../../images/portfolio/codequiz.png';
import weatherdashboard from '../../images/portfolio/weatherdashboard.png'

const MainSection = () => {
    return (
        <>
        <Header id="projects">Projects</Header>
            <MainContainer>
                <MainContent>
                        <MainCard>
                            <MainCardContent>
                                <CardFront>
                                    <img src={nightsin} alt="nightsin" height={300} width={300}/>
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
                                    <img src={locationhub} alt="locationhub" height={300} width={300}/>
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
                                    <img src={workoutapp} alt="workoutapp" height={300} width={300}/>
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
                                    <img src={burger} alt="burger" height={300} width={300}/>
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
                                    <img src={codequiz} alt="codequiz" height={300} width={300}/>
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
                                    <img src={weatherdashboard} alt="weatherdashboard" height={300} width={300}/>
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
