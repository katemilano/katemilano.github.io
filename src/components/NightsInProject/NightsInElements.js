import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const HeadContainer = styled.div`
    background-color: black;
    height: 100px;
    width: 600px;
    margin-left: 400px;
    text-align: center;
    margin-top: -50px;
    border-radius: 12px;
    
`;

export const BodyContainer = styled.div`
    margin-top: -200px;
    background-color: black;
    height: 380px;
    width: 600px;
    overflow: hidden;
    display: inline;
    margin-left: 400px;
    border-radius: 12px;

`;

export const Header = styled.div`
    font-size: 70px;
    color: white;
    font-family: 'Montserrat Subrayada',sans-seri;
    margin-top: 10px;

`;

export const ImageContainer = styled.div`
    height: 200px;
    width: 200px;
    background-color: transparent;
    margin: 0;
    display: inline;
    margin-top: 50px;
    border-radius: 12px;
`;

export const Description = styled.p`
    color: white;
    margin: 35px;
    font-size: 21px;
`;

export const ButtonLinks = styled.button`
    font-size: 20px;
    color: white;
    margin: 35px;
    border-radius: 4px;
    margin-bottom: 0;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    
`;

export const Links = styled(LinkRouter)`
    margin: 35px;
    margin-right: 0;
    font-size: 20px;

`;