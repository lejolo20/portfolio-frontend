import React from "react";

const Intro = ({ language }) => {
  return (
    <>
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          {language ? (
            <div>
              Hi, I am <strong>Leonardo López</strong>
            </div>
          ) : (
            <div>
              Hola, soy <strong>Leonardo López</strong>
            </div>
          )}
        </h1>
        {language ? (
          <p className="section__subtitle section__subtitle--intro">
            <li>Mechanical Engineer</li>
            <li>Front and Back-end dev</li>
          </p>
        ) : (
          <p className="section__subtitle section__subtitle--intro">
            <li>Ingeniero Mecánico</li>
            <li>Front and Back-end dev</li>
          </p>
        )}

        <img
          src="/lejodev-03.png"
          alt="a picture of Leonardo López"
          className="intro__img"
        />
      </section>
    </>
  );
};

export default Intro;
