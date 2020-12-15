import styled from "styled-components";

export const Button = styled.button`
    margin-top: 3vmin;
    padding: .35rem 1.2rem;
    border-radius: 20px;
    border: #7BAAC4 solid 3.5px;
    font-size: 1.3rem;
    min-width: 7rem;
    font-weight: bold;
    color: white;
    cursor: pointer;
    text-shadow: black 3px 3px 5px;
    background-color: #7BAAC4;
    box-shadow: black 2px 2px 4px;
    outline: none;
    transition: 0.1s;

    &:hover {
        transform: scale(1.03);
    }

    &:disabled {
        opacity: 0.5;
        cursor: wait;
    }
`;
