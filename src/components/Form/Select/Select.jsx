import React from 'react'
import * as S from './Style';

const Select = ({opcoes}) => {
    return (
        <S.Select>
            {opcoes.map(opcao => (
                <option key={opcao}>{opcao}</option>
            ))}
        </S.Select>
    )
}

export default Select;
