import styled from 'styled-components';

export const HomeContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`;

export const WrapText = styled.div`
    text-align: left;
    z-index: 99;
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

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: black;
`;

export const HomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 950px){
        padding: 0;
        width: 100%;
    }
`;

export const Homeh1 = styled.h1`
    margin-top: 50px;
    font-size: 70px;
    color: white;
    text-align: left;
    margin-left: 20%;
    margin-bottom: 0px;
    font-family: sans-serif;

    @media screen and (max-width: 960px){
        margin-left: 10%;
    }

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Homeh3 = styled.h3`
    font-family: math;
    color: black;
    margin-left: 22%;
    margin-right: 12%;
    text-align: left;
    margin-top: 10px;
    font-size: 26px;

    @media screen and (max-width: 960px){
        margin-left: 10%;
    }
`;

