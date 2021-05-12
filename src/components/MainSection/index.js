import React, { useState } from 'react'
import {MainContainer, MainContent, MainCard, MainCardContent, CardFront, Wrapper1, Wrapper2, Header, CardButton, Info, Title, Descript} from './MainSectionElements'
import nightsin from '../../images/portfolio/image.png';
import locationhub from '../../images/portfolio/locationhub.png';
import workoutapp   from '../../images/portfolio/workoutapp.png';
import burger from '../../images/portfolio/burger.png';
import codequiz from '../../images/portfolio/codequiz.png';
import weatherdashboard from '../../images/portfolio/weatherdashboard.png'
import pink3 from '../../images/pink3.png';


const MainSection = () => {

    return (
        <>
        
        <Wrapper1>
            <Header id="projects">Projects</Header>
        </Wrapper1>
        <Wrapper2>

            <MainContainer style={{backgroundImage: `url(${pink3})`}}>
                    <MainContent>
                            <MainCard>
                                <MainCardContent>
                                    <CardFront style={{backgroundImage: "${nightsin}"}}>
                                    <img src={nightsin} alt="nightsin" height={230} width={230}/>
                                    </CardFront>

                                    <Info >
                                        <CardButton > Click to View Project </CardButton>
                                    </Info>
                                  
                                </MainCardContent>
                            </MainCard>
                            <MainCard>
                                <MainCardContent>
                                    <CardFront>
                                        <img src={locationhub} alt="locationhub" height={230} width={230}/>
                                    </CardFront>
                                    
                                    <Info >
                                        <CardButton > Click to View Project </CardButton>
                                    </Info>

                                </MainCardContent>
                            </MainCard>
                            <MainCard>
                                <MainCardContent>
                                    <CardFront>
                                        <img src={workoutapp} alt="workoutapp" height={230} width={230}/>
                                    </CardFront>
                                
                                    <Info >
                                        <CardButton > Click to View Project </CardButton>
                                    </Info>

                                </MainCardContent>
                            </MainCard>
                            <MainCard>
                                <MainCardContent>
                                    <CardFront>
                                        <img src={burger} alt="burger" height={230} width={230}/>
                                    </CardFront>

                                    <Info >
                                        <CardButton > Click to View Project </CardButton>
                                    </Info>
                                    
                                </MainCardContent>
                            </MainCard>
                            <MainCard>
                                <MainCardContent>
                                    <CardFront>
                                        <img src={codequiz} alt="codequiz" height={230} width={230}/>
                                    </CardFront>
                                    
                                    <Info >
                                        <CardButton > Click to View Project </CardButton>
                                    </Info>

                                </MainCardContent>
                            </MainCard>
                            <MainCard>
                                <MainCardContent>
                                    <CardFront>
                                        <img src={weatherdashboard} alt="weatherdashboard" height={230} width={230}/>
                                    </CardFront>

                                    <Info >
                                        <CardButton > Click to View Project </CardButton>
                                    </Info>
                                    
                                </MainCardContent>
                            </MainCard>
                </MainContent>
            </MainContainer>

        </Wrapper2>
            
        </>
    )
}

export default MainSection
