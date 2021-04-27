import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
// import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    background: #add9e;
    display: flex;

    @media screen and (max-width: 960px) {
        transition 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    z-index: 1;
`;
export const NavLogo = styled(LinkRouter)`
    color: #ffff
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-item: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;