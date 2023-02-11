import React, { useState } from "react";
import { Cta } from "../../Molecules/Cta";
import * as S from "./styles";
import Me from "../../../assets/jonson1.png";
import { HeaderSocial } from "../../Molecules/HeaderSocial";

export const Header = () => {
  return (
    <>
      <S.Wrapper>
        <S.HeaderContainer className="container">
          <h5>Hello, I am</h5>
          <h1>Johnny Shafir</h1>
          <h5 className="text-alight">Developer</h5>
          <Cta />
          <HeaderSocial />
          <div className="me">
            <img src={Me} alt="" />
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </S.HeaderContainer>
      </S.Wrapper>
    </>
  );
};
