import styled from 'styled-components';

export const Header = styled.header`
    background-color: #232323;
    height: 10vmin;
    border-bottom: 2px solid #FF3D22;
    z-index: 1;

    img {
        width: 10vmin;
        margin: 1vmin 0 0 7vmin;
        -webkit-filter: drop-shadow(5px 5px 6px #222);
        filter: drop-shadow(5px 5px 6px #222);
        position: absolute;
    }

    h1 {
       position: absolute;
    color: white;
    margin: 0 10% 0 10%;
    font-size: 4vmin;
    text-shadow: rgba(0, 0, 0, 0.5) 2px 2px 4px;
    width: 80%;

    left: 0;
    text-align: center;
    }

    button {
        float: right;
        font-size: 5vmin;
        cursor: pointer;
        margin: 2.5vmin 4.3vmin 0 0;
        color: white;
        background-color: transparent;
        z-index: 1;
        border: 0;
    }

    button:hover {
        color: #FF3D22;
    text-shadow: #FF3D22 0px 0px 6px;
    }
`;
