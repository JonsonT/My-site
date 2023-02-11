import React from "react";
import { About } from "../../components/parts/About";
import { Contact } from "../../components/parts/Contact";
import { Expirence } from "../../components/parts/Expirence";
import { Footer } from "../../components/parts/Footer";
import { Header } from "../../components/parts/Header";
import { Nav } from "../../components/parts/Nav";
import { Services } from "../../components/parts/Services";

export const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Expirence />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};
