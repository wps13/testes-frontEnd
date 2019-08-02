import React, { useState } from "react";

import Logo from "../../components/Logo";
import MenuBar from "../../components/MenuBar";
import ServicesArea from "../../components/ServicesArea";
import ProcessArea from "../../components/ProcessArea";
import SignUpForm from "../../components/SignUpForm";
import Adress from "../../components/Adress";
import SNSArea from "../../components/SNSArea";
import Copyright from "../../components/Copyright";
import About from "../../components/About";
import Table from "../../components/Table";

import "./style.scss";

const fakeData = [
  {
    id: 1,
    name: "Joao",
    lastName: "Silva",
    value: 9000
  },
  {
    id: 2,
    name: "Joao",
    lastName: "Silva",
    value: 9000
  }
];

const Home = () => {
  const [inputs, onChangeInput] = useState({});
  const handleInput = e => {
    onChangeInput(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
  };
  const sendData = () => inputs;

  return (
    <div className="home">
      <header className="home-header">
        <Logo />
        <MenuBar />
      </header>
      <main className="home-main">
        <h2 style={{ textAlign: "center" }}>Carrossel a construir</h2>
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
          <About />
        </div>
      </section>
      <section className="home-steps">
        <div className="home-steps-container">
          <div className="home-steps-container-title">
            <h2>Como funciona?</h2>
            <p>alguma desc</p>
          </div>

          <ProcessArea />
        </div>
      </section>
      <section className="home-signup">
        <SignUpForm inputChange={handleInput} btnClick={sendData} />
      </section>
      <section className="home-graph">
        <div className="home-graph-container">
          <h2>Dados</h2>
          <p>Gráfico</p>
          <Table data={fakeData} />
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-footer-container">
          <div className="home-footer-container-sns">
            <Adress />
            <SNSArea />
          </div>
          <Copyright />
        </div>
      </footer>
    </div>
  );
};

export default Home;
