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

    @media screen and (max-width: 950px){
        width: 100%;
    }
    
`;

export const SecondWrap = styled.div`
    float: right;
    color: pink;
    height: 100px;
    width: 600px;
    @media screen and (max-width: 950px){
        width: 100%;
    }
`;

export const SectionHeader = styled.h3`
    margin-left: 50px;
    font-size: 400%;
    color: white;
    margin-top: -50px;
    color: white;
    font-family: 'Montserrat Subrayada', sans-serif;
    margin-bottom: 60px;
    padding-bottom: 20px;

    @media screen and (max-width: 960px){
        margin-top: -100px;
        margin-left: 0;
        margin-right: none;
    }
`;

export const ImageContainer = styled.div`
    height: 300px;
    width: 300px;
    background-color: white;
    margin-top: 50px;
    z-index: 1;
    margin-left: 30px;
    
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
`;

export const Icons = styled.li` 
    margin-left: -25px;
    color: transparent;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
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
    font-family: 'Farro', sans-serif;
`;

