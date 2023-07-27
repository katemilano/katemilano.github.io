import styled from 'styled-components';

export const ContactFirstContainer = styled.div`
    background-repeat: no-repeat;
    background-position: center; 
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 380px;
    position: relative;
    z-index: 3;

    @media screen and (max-width: 960px){
        margin-bottom: 100px;
    }
    @media screen and (max-width: 640px){
        margin-bottom: 650px;
        height: 500px;
    }
`;

export const ContactSecondContainer = styled.div`
    background: #white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 50px;
    position: relative;
    z-index: 2;

    @media screen and (max-width: 960px){
        margin-bottom: 50px;
    }
    @media screen and (max-width: 640px){
        margin-bottom: 500px;
        height: 500px;
    }
`;

export const FirstWrap = styled.div`
    float: left;
    color: purple;
    height: 100px;
    width: 500px;


    @media screen and (max-width: 960px){
        width: 0px;

     }
    
`;

export const SecondWrap = styled.div`
    float: right;
    color: pink;
    height: 100px;
    width: 600px;
    @media screen and (max-width: 960px){
        width: 100%;
        
    }
`;

export const SectionHeader = styled.h3`
    margin-left: 50px;
    font-size: 400%;
    color: white;
    margin-top: -50px;
    color: white;
    font-family: sans-serif;
    margin-bottom: 60px;
    padding-bottom: 20px;

    @media screen and (max-width: 960px){
        margin-top: -100px;
        margin-left: 0;
        margin-right: none;
        text-align:center;
    }
    @media screen and (max-width: 660px){
        margin-top: -120px;
    }
    @media screen and (max-width: 535px){
        margin-top: -190px;
    }

    @media screen and (max-width: 390px){
        margin-bottom: 20px;
        font-size: 300%;
        margin-top: -150px;
    }



`;

export const ImageContainer = styled.div`
    height: 300px;
    width: 300px;
    background-color: white;
    margin-top: 50px;
    z-index: 1;
    margin-left: 30px;

    @media screen and (max-width: 960px){
        margin-top: 150px;
        display: block;
        margin-right: 0;
        width: 50%;
    }

    
`;

export const IconList = styled.ul`
    margin-top: 40px;
    margin-left: 50px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center; 
    

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }

    @media screen and (max-width: 1100px){
        margin-left: 90px;
    }

    @media screen and (max-width: 1024px){
        margin-top: -50px;
        margin-left: 130px;
    }

    @media screen and (max-width: 960px){
        margin-top: 310px;
        grid-template-rows: repeat(6, 50px);
        margin-left: 180px;
    }

    @media screen and (max-width: 960px){
        margin-top: 310px;
        grid-template-rows: repeat(6, 50px);
        margin-left: 180px;
    }
    @media screen and (max-width: 457px){
        margin-top: 250px;
        margin-left: 250px;
    }


    @media screen and (max-width: 325px){
        margin-left: 230px;
    }

    
`;

export const Icons = styled.li` 
    margin-left: -25px;
    color: transparent;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 50px);
    }
    
`;

export const Description = styled.p`
    font-size: 22px;
    color: white;
    margin-right: 20%;
    font-style: italic;
    margin-left: 12%;
    margin-top: -12%;
    line-height: 1.8;
    font-family: sans-serif;

    @media screen and (max-width: 960px){
        margin-top: -8%;
        text-align: center;
        font-size: 18px;
        margin-right: 50px;
    }
    @media screen and (max-width: 815px){
        margin-top: -10%;
    }
    @media screen and (max-width: 535px){
        margin-top: -13%;
    }
    @media screen and (max-width: 315px){
        font-size: 20px;
        line-height: 1.5;
        margin-left: 9%;
        margin-right: 9%;
    }
    @media screen and (max-width: 285px){
        font-size: 20px;
        line-height: 1.2;
        margin-left: 5%;
        margin-right: 5%;
    }
  
`;

export const Img = styled.img`
    border: 15px solid black;

    @media screen and (max-width: 960px){
        margin-right: 0%;
        margin-top: -90px;
        height: 250px;
        width: 300px;
    }

    @media screen and (max-width: 760px){
        margin-top: -70px;
    }
    @media screen and (max-width: 600px){
        margin-top: -50px;
    }
    @media screen and (max-width: 660px){
        margin-top: -90px;
    }
    @media screen and (max-width: 580px){
        margin-top: -50px;
    }
    @media screen and (max-width: 457px){
        margin-top: -20px;
        
    }
    @media screen and (max-width: 457px){
        height: 200px;
        width: 250px;
    }
  
 
`;

export const ImgCont = styled.div`
    @media screen and (max-width: 960px){
        display: flex;
        justify-content: center;
        margin-left: 400px;
    }
    @media screen and (max-width: 950px){
        margin-left: 390px;
    }
    @media screen and (max-width: 940px){
        margin-left: 380px;
    }
    @media screen and (max-width: 875px){
        margin-left: 370px;
    }
    @media screen and (max-width: 860px){
        margin-left: 360px;
    }
    @media screen and (max-width: 850px){
        margin-left: 320px;
    }
    @media screen and (max-width: 750px){
        margin-left: 300px;
    }
    @media screen and (max-width: 720px){
        margin-left: 290px;
    }
    @media screen and (max-width: 700px){
        margin-left: 280px;
        margin-right:0;
    }
    @media screen and (max-width: 670px){
        margin-left: 260px;
    }
    @media screen and (max-width: 620px){
        margin-left: 240px;
    }
    @media screen and (max-width: 600px){
        margin-left: 215px;
    }
    @media screen and (max-width: 550px){
        margin-left: 200px;
    }
    @media screen and (max-width: 510px){
        margin-left: 180px;
        margin-right:0;
    }
    @media screen and (max-width: 480px){
        margin-left: 170px;
        margin-right:0;
    }

    @media screen and (max-width: 435px){
        margin-left: 150px;
        margin-right:0;
    }
    @media screen and (max-width: 420px){
        margin-left: 140px;
        margin-right:0;
    }

    @media screen and (max-width: 390px){
        margin-left: 130px;
        margin-right:0;
    }

    @media screen and (max-width: 375px){
        margin-left: 120px;
        margin-right:0;
    }
    @media screen and (max-width: 360px){
        margin-left: 110px;
        margin-right:0;
    }
    @media screen and (max-width: 335px){
        margin-left: 100px;
        margin-right:0;
    }
    @media screen and (max-width: 320px){
        margin-left: 95px;
        margin-right:0;
    }
    @media screen and (max-width: 290px){
        margin-left: 80px;
    }
`;

