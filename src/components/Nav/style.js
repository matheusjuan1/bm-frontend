import styled from 'styled-components';

export const Nav = styled.nav`
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: 1000;
    height: 100%;
    width: 45vmin;
    background-color: white;
    text-align: center;
    transition: 0.6s;
    box-shadow: rgba(0, 0, 0, 0.2) -10px 5px 15px;
  
    ul {
        list-style: none;
        margin-top: 6vmin;
    }
    h3 {
        font-size: 1.17em;
        font-weight: 600;
    }

    h5 {
        font-size: 0.83em;
        font-weight: 600;
    }

    hr {
        border-color: #7baac4;
    }
`;

export const ButtonExit = styled.button`
    background-color: transparent;
    border: 0;
    float: left;
    font-size: 5vmin;
    margin: 3vmin 0 0 3vmin;
    cursor: pointer;

    &:hover {
        color: #FF3D22;
        text-shadow: #FF3D22 0px 0px 6px;
    }
`

export const NavItem = styled.li`
    width: 100%;
    text-align: center;
    transition: 0.2s;
    cursor: pointer;
    margin: 2vmin 0;
    font-size: 3.5vmin;

    &:hover {
        color: #7baac4;
        text-shadow: #7baac4 0px 0px 4px;
    }

    i {
        float: left;
        margin-left: 3vmin;
        margin-top: 1vmin;
        font-family: 4vmin;
    }
`

export const Perfil = styled.div`
    margin-bottom: 3vmin;
    width: 100%;
    text-align: center;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column; 
    
    img {
        margin-left: 30%;
        width: 40%;
        border-radius: 100%;
        border: #7baac4 2px solid;
        margin-bottom: 2vmin;
    }
`

export const Logout = styled.div`
    width: 100%;
    text-align: center;
    transition: 0.2s;
    cursor: pointer;
    margin: 2vmin 0;
    font-size: 3.5vmin;
    position: absolute;
    bottom: 0px;
    background-color: white;

    &:hover {
        color: #FF3D22;
        text-shadow: #FF3D22 0px 0px 6px;
    }
`