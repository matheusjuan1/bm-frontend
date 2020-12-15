import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 3vmin 0;
    padding: 0 0 2vmin 0;
    background-color: white;
    border-radius: 25px;
    transition: 0.6s;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px;
    overflow: hidden;

    h5 {
        text-align: center;
        margin: 1.8vmin;
    }
`;

export const Container2 = styled.div`
    width: 100%;
    height: auto;
    margin: 3vmin 0;
    padding: 2vmin 0;
    background-color: white;
    border-radius: 25px;
    transition: 0.6s;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 2px;
    text-align: center;

    .funcionarios {
        display: grid;
        grid-template-columns: 50% 50%;
        width: 80%;
        margin: 1.5rem 10%;
    }

    .funcionarioStatus {
        width: 70%;
        margin: auto 15%;
        padding: 1rem;
        border-radius: .4rem;
        transition: 0.2s;
        p {
            font-size: 3rem;
        }

        &:hover {
            opacity: 0.8;
        }
    }
`

export const GridTop = styled.div`
    display: grid;
    grid-template-columns: 50% auto;

    @media (max-width: 715px) {
        grid-template-columns: 100%;
    }
`

export const ContainerGraficos = styled.div`
    width: 80%;
    margin-left: 10%;

    @media (max-width: 715px) {
        width: 100%;
        margin: 0;

        .funcionarios {
            grid-template-columns: 1fr;
        }
}
`
