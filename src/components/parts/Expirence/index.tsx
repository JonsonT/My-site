import React from "react";
import * as S from "./styles";
import { AiFillCheckCircle } from "react-icons/ai";

export const Expirence = () => {
  return (
    <S.Wrapper id="experience">
      <h5>Skill</h5>
      <h2>My technologies</h2>

      <S.ExperienceContainer className="container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>

          <div className="experience_content">
            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Good</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Excellent</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Excellent</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Next Js</h4>
                <small className="text-light">Good</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Good</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediary</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Sass</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Excellent</small>
              </div>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Redux Js</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Good</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediary</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Nest JS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>MongonDB</h4>
                <small className="text-light">Good</small>
              </div>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Express Js</h4>
                <small className="text-light">Good</small>
              </div>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Excellent</small>
              </div>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </S.ExperienceContainer>
    </S.Wrapper>
  );
};
