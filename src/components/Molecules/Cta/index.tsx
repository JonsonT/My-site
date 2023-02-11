import React from "react";
import * as S from "./styles";

export const Cta = () => {
  return (
    <S.Wrapper className="cta">
      <a href="#about" className="btn">
        About me
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact
      </a>
    </S.Wrapper>
  );
};
