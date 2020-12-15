import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    html {
        margin: 0!important;
        padding: 0!important;
    }

    body {
        font-family: "Poppins", sans-serif!important;
        background-color: #f6f6f6;
        color: #333;
        overflow-x: hidden;
    }
    table {
        text-align: center;
        width: 100%;
    }

    .tableHist {
        text-align: left;
    }

    table caption {
        margin-left: 3vmin;
    }

    a{
        text-decoration: none;
        color: #333;
    }

    .icons {
        color: #333!important;
        font-size: 3vmin;
        cursor: pointer;
        transition: 0.1s;
    }

    .icons:hover {
        color: #7BAAC4!important;
        text-shadow: #7baac4 0px 0px 3px;
    }

    #selecionado {
        color: #7baac4!important;
        text-shadow: #7baac4 0px 0px 6px!important;
    }

    .online {
        color: green;
        font-size: 2vmin;
        margin-right: 1vmin;
    }

    .offline {
        color: red;
        font-size: 2vmin;
        margin-right: 1vmin;
    }

    .animeLeft {
        opacity: 0;
        transform:translateX(-20px);
        animation: animeLeft .55s forwards;
    }

    .animeTop {
        opacity: 0;
        transform:translateY(-20px);
        animation: animeTop .55s forwards;
    }

    .animeNav {
        transform:translateX(45vmin);
        animation: animeTop .6s forwards;
    }
    
    @keyframes animeNav {
        to {
            transform: initial;
        }
    }

    @keyframes animeTop {
        to {
            opacity: 1;
            transform: initial;
        }
    }

    @keyframes animeLeft {
        to {
            opacity: 1;
            transform: initial;
        }
    }
`