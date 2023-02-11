import React from "react";
import * as S from "./styles";
import { BiCheck } from "react-icons/bi";

export const Services = () => {
  return (
    <S.Wrapper id="services">
      <h5>What do I offer?</h5>
      <h2>services</h2>

      <S.ServicesContainer className="container">
        <article className="service">
          <div className="service_head">
            <h3>Qualifications</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Graduated in Google & Reichman Tech School.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Advanced Python.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Web Front End Development.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Web Back End Development.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Technician in Programming and Technology. </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>How can I collaborate ?</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>Web and desktop development.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Development of applications, systems and websites.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Maintenance and improvements in already developed systems.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Consumption of APIs for integration with systems.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Plus</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list_icon" />
              <p>
                Strong communication skills with the ability to discuss any
                problem.
              </p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Free fast learning, ability to adapt to new technologies.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Verbal and written communication skills in English.</p>
            </li>
            <li>
              <BiCheck className="service_list_icon" />
              <p>Excellent discipline, focus and attention to detail.</p>
            </li>
          </ul>
        </article>
      </S.ServicesContainer>
    </S.Wrapper>
  );
};
