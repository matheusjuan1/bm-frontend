import styled from 'styled-components';

export const Switch = styled.label`
    input:checked+span:before {
        left: 20px;
    }
    input:checked+span {
        background-color: #03a9f4;
    }
`;

export const Input = styled.input`
    display: none;
`

export const Span = styled.span`
    display: block;
    width: 35px;
    position: absolute;
    height: 15px;
    background-color: #c6c6c6;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, .2);
    cursor: pointer;
    border-radius: 20px;
    transition: ease-in 0.2s;
    margin: 0.2vmin 1vmin;

    &:before {
        content: '';
        width: 15px;
        position: absolute;
        height: 15px;
        transform: scale(1.1);
        border-radius: 50%;
        background-color: white;
        top: 0;
        left: 0;
        box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    }
`
