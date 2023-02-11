import React, { useRef, useState } from "react";
import * as S from "./styles";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from "emailjs-com";

export const Contact = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ut918e9",
        "template_xhx8g8j",
        form.current,
        "dTVqLZ2-Dtk-bF3RP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <S.Wrapper id="contact">
      <h5>Let's talk!</h5>
      <h2>Contact</h2>

      <S.ContactContianer className="container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>jonikshafirr@gmail.com</h5>
            <a href="emailto:jonikshafirr@gmail.com" target="_blank">
              Send a menssage
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon" />
            <h4>Menssager</h4>
            <h5>jonikshafirr@gmail.com</h5>
            <a href="mailto:jonikshafirr@gmail.com" target="_blank">
              Send a menssage
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon" />
            <h4>Whatsapp</h4>
            <h5>+972 538292263</h5>
            <a
              href="https://api.whatsapp.com/send?phone=538292263&text="
              target="_blank"
            >
              Send a menssage
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </S.ContactContianer>
    </S.Wrapper>
  );
};
