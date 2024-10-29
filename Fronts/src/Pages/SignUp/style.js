import styled from "styled-components"
import BackgroundImg from "../../Assets/background.jpg"

export const Container = styled.div`

    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;

` 

export const Form = styled.form`

    padding: 0 36rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE2};

    > h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.WHITE1};
    }

    > h2 {
        font-size: 2.4rem;
        margin: 4.8rem 0;
    }

    > p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE1};
    }

    > a {
        margin-top: 12.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE1};
    }

`

// export const Background = styled.div`

//     flex: 1;
//     background: url(${BackgroundImg}) no-repeat center center;
//     background-size: cover;

// `