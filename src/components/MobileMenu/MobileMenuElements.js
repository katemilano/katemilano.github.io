import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';

export const MobileMenuContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #add8e5;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #add8e5;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const MobileWrapper = styled.div`
    color: #add8e5;
`;

export const MobileMenuLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5reml
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #add8e5;

    &:hover{
        color: yellow;
        transition: 0.2s ease-in-out;
    }
`;

export const MobileWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const MobileMenuLink = styled(LinkRouter)`
    border-raduis: 50px;
    background: yellow;
    white-space: nowrap;
    padding: 16px 64px;
    color: pink;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease in-out;
    text-decoration:none;

    &:hover{
        transition: all 0.2s ease in-out;
        background: #add8e5;
        color: pink;
    }
`;