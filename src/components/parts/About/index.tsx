import React from "react";
import * as S from "./styles";
import Me from "../../../assets/johny3_1_25.png";
import CV from "../../../assets/cv.pdf";

export const About = () => {
  return (
    <S.Wrapper id="about">
      <h5>Come and meet me</h5>
      <h2>About me</h2>

      <S.AboutContainer className="container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <p>
            As a highly motivated and enthusiastic individual, I have developed
            a deep passion for code writing and programming, which has led me to
            pursue a career as a Full Stack Engineer. With a strong commitment
            to excellence and a natural aptitude for technology, I have honed my
            skills and become proficient in various programming languages and
            development frameworks. My fast-paced and self-directed approach to
            learning has enabled me to quickly adapt to new technologies and
            programming paradigms, and I am always seeking to expand my
            knowledge and expertise. Whether working independently or as part of
            a team, I am committed to delivering high-quality results and
            exceeding expectations. I believe that my combination of technical
            aptitude, drive, and attention to detail makes me an ideal candidate
            for any Full Stack Engineer role. I am confident that my passion for
            programming, combined with my strong work ethic, will enable me to
            make a significant contribution to any organization. I am eager to
            apply my skills and experience to new challenges and opportunities,
            and I am committed to doing whatever it takes to achieve my goals.
          </p>

          <div style={{ display: "flex", gap: "10px" }}>
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>

            <a href={CV} className="btn">
              Download CV
            </a>
          </div>
        </div>
      </S.AboutContainer>
    </S.Wrapper>
  );
};
