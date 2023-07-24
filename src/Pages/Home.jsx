import React, { useContext, useEffect } from "react";
import About from "../Components/About";
import Header from "../Components/Header";
import Intro from "../Components/Intro";
import MyWork from "../Components/MyWork";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import { useState } from "react";
import { Animated } from "react-animated-css";
import StateLanguage from "../context/StateLanguage";
import { languageContext } from "../context/languageContext";

const Home = () => {
  const { languageFunction, language } = useContext(languageContext);

  console.log(languageFunction);
  return (
    <>
      <StateLanguage>
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div>
            <input
              className="btn-language"
              type={"checkbox"}
              name="checkbox"
              id="toggle"
              onClick={languageFunction}
            />

            <label htmlFor="toggle" className="switch" />
            <div className="language-selection">
              <div>En</div>
              <div>Es</div>
            </div>
          </div>
        </Animated>

        <Header language={language} />
        <Intro language={language} />
        <Services language={language} />
        <About language={language} />
        <MyWork language={language} />
        <Footer />
      </StateLanguage>
    </>
  );
};

export default Home;
