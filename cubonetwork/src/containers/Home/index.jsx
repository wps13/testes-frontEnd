import React from "react";

import Logo from "../../components/Logo";
import MenuBar from "../../components/MenuBar";
import ServicesArea from "../../components/ServicesArea";
import ProcessArea from "../../components/ProcessArea";
import SignUpForm from "../../components/SignUpForm";

import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <Logo />
        <MenuBar />
      </header>
      <main className="home-main">
        <p>Carrossel a construir</p>
      </main>
      <section className="home-services">
        <div className="home-services-container">
          <div className="home-services-container-title">
            <h2>Serviços</h2>
            <p>Alguma descrição aqui</p>
          </div>

          <ServicesArea />
        </div>
      </section>
      <section className="home-about">
        <div className="home-about-container">
          <p>sobre nós </p>
        </div>
      </section>
      <section className="home-steps">
        <div className="home-steps-container">
          <div className="home-steps-container-title">
            <h2>passos </h2>
            <p>alguma desc</p>
          </div>

          <ProcessArea />
        </div>
      </section>
      <section className="home-signup">
        <SignUpForm />
      </section>
      <section className="home-graph">
        <div className="home-graph-container">
          <p>Gráfico</p>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-footer-container">redes socias e copyright</div>
      </footer>
    </div>
  );
};

export default Home;
