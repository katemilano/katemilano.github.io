import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    background: black;
    height: 90px;
    justify-content: center;
    font-size: 1rem;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    background-color: black;
`;
export const NavLogo = styled(LinkRouter)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-item: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    margin-top: 30px;
    font-family: math;   
`;

export const MobileIcon = styled.div`
    display: none;
    color: white;
    @media screen and (max-width: 768px) {
        display:block;
        position:absolute;
        top: 0;
        right: 0;
        transform: translate (-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        margin-top: 35px;
        margin-right: 35px;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-top: 55px;
    margin-right: 20px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 50px;
    font-family: math;
`;

export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-item: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer:   

    &.active{
        padding-bottom: none;
        margin-bottom: none;
        border-bottom: 6px solid #DCE3AA;
    }
`;