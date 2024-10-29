import styled from "styled-components"

export const Container = styled.button`

background: none;
color: ${({theme, isActive}) => isActive ? theme.COLORS.WHITE1 : theme.COLORS.WHITE2};
border: none;
font-size: 1.6rem;

`
