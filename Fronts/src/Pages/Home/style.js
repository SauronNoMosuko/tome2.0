import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 25rem auto;
    grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    background-color: ${({theme}) => theme.COLORS.WHITE2};

`;

export const Brand = styled.div`

    grid-area: brand;

    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BLUE3};
    background-color: ${({ theme }) => theme.COLORS.BLUE3};

        > h1 {
            font-size: 2.4rem;
            color: ${({ theme }) => theme.COLORS.WHITE1};
        }

`;

export const Menu = styled.ul`

    grid-area: menu;
    background-color: ${({ theme }) => theme.COLORS.BLUE3};
    padding-top: 6.4rem;
    text-align: center;

        > li{
            margin-bottom: 2.4rem;
        }


`;

export const Search = styled.div`

    grid-area: search;
    padding: 6.4rem 6.4rem 0;
    
    input {
        background: #4e35fc;
        color: white;

    }



`;

export const Content = styled.div`

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${({ theme }) => theme.COLORS.BLUE1};
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #2196F3;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

`;

export const NewNote = styled(Link)`

    grid-area: newnote;
    background-color: ${({ theme }) => theme.COLORS.BLUE2};
    color: ${({ theme }) => theme.COLORS.WHITE1};
    display: flex;
    align-items: center;
    justify-content: center;

        > svg {
            margin-right: 0.8rem;
        }


`;
