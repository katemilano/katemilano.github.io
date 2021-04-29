import styled from 'styled-components';

export const MainContainer = styled.div`
    background: #c4ebf1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;

    @media screen and (max-width: 960px){
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;
        grid-gap: 1rem;
    }

    @media screen and (max-width: 640px){
        grid-template-columns: repeat(1, 1fr);
        grid-auto-rows: auto;
        grid-gap: 1rem;
    }
`;

export const MainCard = styled.div`
    background-color: transparent;
    width: 300px;
    height: 300px;
    border: 1px solid #f1f1f1;
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
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);  

    &:hover{
        transform: rotateY(180deg);
    }
`;

export const CardFront = styled.div`
    background-color: #bbb;
    color: black;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; 
    backface-visibility: hidden;
`;

export const CardBack = styled.div`
    background-color: white;
    width: 40px;
    height: 40px;
    transform: rotateY(180deg);
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`;

export const CardTitle = styled.h2`
    color: blue;
    font-size: 30px;
`;

export const CardBody = styled.h2`
    color: black;
    font-size: 20px;
`;