import React from "react";
import * as S from './style'

const SwitchCheck = () => {
  return (
    <S.Switch>
      <S.Input
        type="checkbox"
      />
      <S.Span></S.Span>
    </S.Switch>
  );
};

export default SwitchCheck;
