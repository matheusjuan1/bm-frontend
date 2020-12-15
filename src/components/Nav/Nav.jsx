import React from "react";
import * as S from "./style";
import UndrawProfile from '../../assets/undraw_profile.png';
import { UserContext } from "../../UserContext";

export const Nav = ({ setNav }) => {
  const { dados, userLogout } = React.useContext(UserContext);

  return (
    <S.Nav className="animeNav">
      <S.ButtonExit onClick={() => setNav(false)}>
        <i className="fas fa-times"></i>
      </S.ButtonExit>{" "}
      <br /> <br />
      <S.Perfil>
        <img src={UndrawProfile} alt="" />
        <h3>{dados && dados.nome}</h3>
        <h5>{dados && dados.empresa}</h5>
      </S.Perfil>
      <hr />
      <ul>
        <S.NavItem>
          <a id="selecionado" href="/bm">
            <i className="fas fa-chart-bar"></i>
            Painel de Controle
          </a>
        </S.NavItem>
        <S.NavItem>
          <i className="fas fa-cog"></i>
          Configurações
        </S.NavItem>
        <S.NavItem>
          <i className="fas fa-headset"></i>
          Suporte
        </S.NavItem>
      </ul>
      <S.Logout onClick={userLogout}>
        <i className="fas fa-sign-out-alt"></i> 
         Sair
      </S.Logout>
    </S.Nav>
  );
};
