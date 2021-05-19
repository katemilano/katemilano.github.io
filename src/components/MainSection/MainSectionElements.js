import styled from 'styled-components';

export const Wrapper1 = styled.div`
    float: left;
    width: 30%;
    height: 100px;

    @media screen and (max-width: 960px){
        margin-top: 10%;
        width: 100%;
        margin-bottom: 20px;
    }
`;

export const Wrapper2 = styled.div`
    margin-top: 10%;
    float: right;
    width: 65%;
    height: 100px;

    @media screen and (max-width: 1250px){
        width: 75%;
        margin-top: 2%;
    }

    @media screen and (max-width: 1180px){
        width: 90%;
        margin-top: 2%;
        margin-left: 25px; 
    }

    @media screen and (max-width: 960px){
        width: 90%;
        margin-right: 0%;
        margin-left: 20%;
        float: none;
    }

    @media screen and (max-width: 640px){
        width: 100%;
        margin-right: 0%;
        margin-left: 0;
    }
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
        width: 500px;
        height: 825px;
    }

    @media screen and (max-width: 640px){
        margin-bottom: 900px;
        height: 1650px;
        // width: 300px;
    }
`;

export const Header = styled.h1`
    font-size: 300%;
    text-align: center;
    color: black;
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
        margin-top: 30px;
    }

    @media screen and (max-width: 640px){
        grid-template-columns: repeat(1, 1fr);
        grid-auto-rows: auto;
        grid-gap: 1rem;
        margin-top: 30px;
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
    transition: 0.5s ease-out;
    padding: 0.6rem;

    &:click:before{
        opacity: 1;
    }

    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        background: rgba(0, 0, 0, 0.6);
        z-index: 2;
        transition: 0.5s;
        opacity: 0;
    }
		
`;

export const CardButton = styled.button`
    padding: 0.6rem;
    outline: none;
    border: none;
    border-radius: 3px;
    background: #DCE3AA;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;
    margin-top: 42%;
    margin-left: 5%;

    &:hover{
        background: #bcc95e;
        color: white;
    }
        

`;

export const Info = styled.div`
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 1s;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    margin-top: -10%;

    &:hover{
        opacity: 1;
        // transform: translateY(-20px);
        z-index: 1;

    }
`;

export const Title = styled.h2`
    margin: 0px;

`;

export const Descript = styled.p`
    letter-spacing: 1px;
    font-size: 15px;
    margin-top: 8px;

`;
