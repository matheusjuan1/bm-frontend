import styled from 'styled-components';
import Image from '../../assets/undraw_login.svg'

export const SectionLogin = styled.section`
    height: 100%;
`

export const LogoDiv = styled.div`
    width: 100%;
    text-align: center;

    img {
        width: 15vmin;
        margin-top: 2vmin;
        margin-bottom: 2vmin;
        -webkit-filter: drop-shadow(5px 5px 4px #222);
        filter: drop-shadow(5px 5px 4px #222);
    }
`;

export const ContainerMain = styled.div`
    display: grid;
    grid-template-columns: 1fr 50%;
    justify-items: center;
    @media (max-width: 940px) {
        grid-template-columns: 100%;
    }
`

export const ImageLogin = styled.div`
    width: 100%;
    background: url(${Image}) center center no-repeat;
    background-size: cover;
    margin-top: 10vh;
    @media (max-width: 940px) {
        display: none;
    }
`

export const GridLogin = styled.div`
    width: 50%;

    @media (max-width: 940px) {
        width: 100%;
        padding-top: 2.5rem;
    }
`

export const ContainerForm = styled.div`
    width: 340px;
    height: auto;
    border-radius: 15px;
    border: 4px solid #7BAAC4;
    align-items: center;
    text-align: center;
    padding-bottom: 5vmin;
    margin: auto;

    a {
        display: block;
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-weight: bold;
        color: #273746;
        font-size: 16px;
        margin-top: 2vmin;
        transition: 0.2s;
    }

    a:hover {
        color: #7BAAC4;
    }

    .fa-user-circle {
        color: #7BAAC4;
        margin-top: 1vmin;
    }

    form {
        width: 80%;
        margin-left: 10%;
        margin-top:2rem;
    }
`
