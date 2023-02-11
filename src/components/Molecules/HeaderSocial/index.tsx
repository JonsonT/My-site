import React from "react";
import * as S from "./styles";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

export const HeaderSocial = () => {
  return (
    <S.Wrapper>
      <a href="https://www.linkedin.com/in/johnny-shafir/" target="_black">
        <BsLinkedin />
      </a>
      <a href="https://github.com/JonsonT/" target="_black">
        <FaGithub />
      </a>
      <a href="https://discord.com/users/904897648409059358" target="_black">
        <BsDiscord />
      </a>
      <a href="https://www.instagram.com/jonny_6430/" target="_black">
        <GrInstagram />
      </a>
    </S.Wrapper>
  );
};
