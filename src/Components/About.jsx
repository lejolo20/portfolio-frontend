import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = ({ language }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section data-aos="fade-up" className="about-me" id="about">
        <h2 className="section__title section__title--about">
          {language ? "Who I am" : "Quien soy"}
        </h2>
        <p className="section__subtitle section__subtitle--about">
          {language
            ? "Engineer & developer based out of Valencia"
            : "Ingeniero & Desarrollador ubicado en Valencia"}
        </p>
        <div className="about-me__body">
          {language ? (
            <p>
              I am a Mechanical Engineer and Full-stack Developer with
              experience in mechanical parts design and simulation, as well as
              frontend and backend web development. I have a strong command of
              tools such as Autocad and Solidworks for 2D and 3D design and
              modeling. Additionally, I have hands-on experience in developing
              web applications using HTML, CSS, and JavaScript, along with
              frameworks like ReactJs. I am also well-versed in backend
              technologies like NodeJs and ExpressJs, and proficient in both SQL
              and NoSQL databases, including MongoDB. My focus lies in creating
              innovative and efficient technical solutions, whether in
              mechanical design or web application development, by employing
              best programming practices and a results-driven approach. With my
              combined skills in mechanical engineering and web development, I
              can provide comprehensive and creative solutions to diverse
              technical challenges
            </p>
          ) : (
            <p>
              Ingeniero mecánico y desarrollador con experiencia en el diseño y
              simulación de piezas mecánicas, así como en el desarrollo de
              aplicaciones web frontend y backend. Sólidos conocimientos en
              herramientas como Autocad y Solidworks para el diseño y modelado
              2D y 3D. Además, tengo experiencia en el desarrollo de
              aplicaciones web utilizando HTML, CSS y JavaScript, y frameworks
              como ReactJs. También estoy familiarizado con tecnologías de
              backend como NodeJs y ExpressJs, así como con bases de datos SQL y
              NoSQL, incluyendo SQLite y MongoDB. Mi enfoque se centra en crear
              soluciones técnicas innovadoras y eficientes, ya sea en el ámbito
              del diseño mecánico o en el desarrollo de aplicaciones web,
              utilizando buenas prácticas de programación y un enfoque orientado
              a resultados. Con la combinación de habilidades en ingeniería
              mecánica y desarrollo web, puedo ofrecer soluciones integrales y
              creativas a desafíos técnicos diversos.
            </p>
          )}
        </div>
        <img
          src="/lejodev-02.jpg"
          alt="Leonardo looking the horizon"
          className="about-me__img"
        />
      </section>
    </>
  );
};

export default About;
