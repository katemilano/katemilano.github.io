import styled from 'styled-components';

export const Wrapper1 = styled.div`
    float: left;
    width: 30%;
    height: 100px;
`;

export const Wrapper2 = styled.div`
    margin-top: 10%;
    float: right;
    width: 65%;
    height: 100px;
`;

export const MainContainer = styled.div`
    background-color: black;    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 560px;
    position: relative;
    z-index: 3;
    margin-bottom: -150px;
    margin-top: 30px;
    width: 750px;

    @media screen and (max-width: 960px){
        margin-bottom: 600px;
    }

    @media screen and (max-width: 640px){
        margin-bottom: 900px;

    }
`;

export const Header = styled.h1`
    font-size: 300%;
    text-align: center;
    color: #DCE3AA;
    background-color: transparent;
    padding-top: 30px;
    padding-bottom: 10px;
    margin-bottom: 120px;
    z-index: 1;
    font-family: 'Montserrat Subrayada', sans-serif;


    @media screen and (max-width: 960px){
        padding-bottom: 300px;
    }

    @media screen and (max-width: 640px){
        padding-bottom: 1200px;
    }
`;

export const MainContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, .5fr);
    grid-auto-rows: auto;
    grid-gap: .2rem;

    @media screen and (max-width: 960px){
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;
        grid-gap: 1rem;
        margin-top: -300px;
    }

    @media screen and (max-width: 640px){
        grid-template-columns: repeat(1, 1fr);
        grid-auto-rows: auto;
        grid-gap: 1rem;
        margin-top: -1200px;
    }
`;

export const MainCard = styled.div`
    width: 250px;
    height: 250px;
    perspective: 1000px

    &:hover{
        transform: rotateY(180deg);
    }
`;

export const MainCardContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
`;

export const CardFront = styled.div`
    background-color: transparent;
    color: black;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; 
    backface-visibility: hidden;
`;



