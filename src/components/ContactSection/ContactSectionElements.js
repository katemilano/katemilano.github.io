import styled from 'styled-components';

export const ContactFirstContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 400px;
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
    
    
`;

export const SecondWrap = styled.div`
    float: right;
    color: pink;
    height: 100px;
    width: 600px;
`;

export const SectionHeader = styled.h3`
    margin-left: 50px;
    font-size: 400%;
    color: white;
    margin-top: 0;
    color: #A4D7CE;

`;

export const ImageContainer = styled.div`
    height: 300px;
    width: 300px;
    background-color: white;
    margin-top: 130px;
    z-index: 1;
    margin-left: 180px;
    
`;

export const IconList = styled.ul`
    margin-top: 70px;
    margin-left: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center; 

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`;

export const Description = styled.p`
    font-size: 20px;
    color: #E5A0B1;
    margin-right: 50px;
    font-style: italic;
    margin-left: 10%;
    margin-top: -10%;
    line-height: 1.8;
    `;
