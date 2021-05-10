import styled from 'styled-components';

export const HomeContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 650px;
    position: relative;
    z-index: 2;

`;

export const WrapText = styled.div`
    text-align: left;
`;

export const HomeBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%
    overflow: hidden;
`;

export const HomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    
`;

export const Homeh1 = styled.h1`
    font-size: 55px;
    color: white;
    text-align: left;
    margin-top: -2%;
    margin-left: 27%;
    margin-bottom: 10px;
    font-family: 'Farro', sans-serif;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Homeh3 = styled.h3`
    font-family: 'Farro', sans-serif;
    color: #89c7e7;
    margin-left: 27%;
    margin-right: 25%;
    text-align: left;
    margin-top: 0;
`;