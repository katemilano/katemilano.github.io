import styled from 'styled-components';

export const SkillContainer = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 450px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 960px){
        margin-bottom: 150px;
    }

    @media screen and (max-width: 640px){
        margin-bottom: 650px;
        height: 500px;

    }
`;

export const Header = styled.h1`
    font-size: 300%;
    text-align: center;
    color: #FD4B54;
    padding-top: 60px;
    margin-top: 800px;
    font-family: 'Montserrat Subrayada', sans-serif;


    @media screen and (max-width: 960px){
        margin-top: 1050px;
    }

    @media screen and (max-width: 640px){
        margin-top: 1800px;

    }
`;

export const SkillContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: auto;
    grid-gap: 6rem;
    margin-top: -100px;


    @media screen and (max-width: 960px){
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: auto;
        grid-gap: 5rem;
    }

    @media screen and (max-width: 640px){
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;
        grid-gap: 4rem;
        margin-top: 200px;
    }
`;

export const SkillCard = styled.div`
    background-color: transparent;
    width: 60px;
    height: 60px;
    border: 1px solid #f1f1f1;
    perspective: 1000px
    margin: 400px;
    border:none;
    box-shadow: 5px 5px 2.5px lightgrey;
`;

export const Label = styled.h4`
    color: darkgrey;
    font-style: italic;
    margin-left: 11px;
    margin-top: 15px;
`;

