import React from "react";

import Logo from "../../components/Logo";
import MenuBar from "../../components/MenuBar";
import ServicesArea from "../../components/ServicesArea";
import ProcessArea from "../../components/ProcessArea";
import SignUpForm from "../../components/SignUpForm";

import "./style.scss";

const Home = () => {
  return (
    <div>
      <header>
        <Logo />
        <MenuBar />
      </header>
      <main>
        <p>Carrossel a construir</p>
      </main>
      <section>
        <h2>Serviços</h2>
        <p>Alguma descrição aqui</p>
        <ServicesArea />
      </section>
      <section>
        <p>sobre nós </p>
      </section>
      <section>
        <h2>passos </h2>
        <p>alguma desc</p>
        <ProcessArea />
      </section>
      <section>
        <SignUpForm />
      </section>
      <section>
        <p>Gráfico</p>
      </section>
      <footer>redes socias e copyright</footer>
    </div>
  );
};

export default Home;
