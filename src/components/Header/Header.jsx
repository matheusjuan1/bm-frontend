import React from 'react';
import Logoapp from '../../assets/logopp.png';
import { Nav } from '../Nav/Nav';
import * as S from './style'

export const Header = ({titulo}) => {
    const [nav, setNav] = React.useState(false)

    return (
        <>
        <S.Header>
            <a href="/bm">
               <img src={Logoapp} alt=""/> 
            </a>
            <h1>{titulo}</h1>
            <button onClick={() => setNav(true)}><i className="fas fa-bars menuicon"></i></button>
        </S.Header>
        {nav && <Nav setNav={setNav}/>}
        </>
    )
}
