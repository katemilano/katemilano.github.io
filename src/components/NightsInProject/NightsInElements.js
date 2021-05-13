import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const HeadContainer = styled.div`
    background-color: black;
    height: 100px;
    width: 600px;
    margin-left: 400px;
    text-align: center;
    margin-top: -50px;
    
`;

export const BodyContainer = styled.div`
    margin-top: -200px;
    background-color: black;
    height: 380px;
    width: 600px;
    overflow: hidden;
    display: inline;
    margin-left: 400px;

`;

export const Header = styled.div`
    font-size: 80px;
    color: white;

`;

export const ImageContainer = styled.div`
    height: 200px;
    width: 200px;
    background-color: transparent;
    margin: 0;
    display: inline;
    margin-top: 50px;

`;

export const Description = styled.p`
    color: white;
    margin: 35px;
    font-size: 22px;
`;

export const ButtonLinks = styled.button`
    font-size: 20px;
    color: white;
    background-color: darkgrey;
    margin: 35px;
    border-radius: 7px;
    margin-bottom: 0;
    
`;

export const Links = styled(LinkRouter)`
    margin: 35px;
    margin-right: 0;
`