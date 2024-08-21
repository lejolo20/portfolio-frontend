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
              Mechanical engineer and developer with experience in the design
              and simulation of mechanical simulation of mechanical parts, as
              well as in the development of frontend and backend web frontend
              and backend web applications. Solid knowledge in tools such as
              Autocad and Solidworks for 2D and 3D design and modeling. 2D and
              3D modeling. In addition, I have experience in the development of
              web applications using HTML, CSS and JavaScript and frameworks
              such as ReactJs. I am also familiar with backend technologies such
              as NodeJs and ExpressJs, as well as SQL and NoSQL databases SQL
              and NoSQL databases, including SQLite and MongoDB. I am also
              familiar with Python and Python libraries such as Pandas, Numpy,
              among others, as well as AWS EC2. my focus is to create innovative
              and efficient technical solutions, either in mechanical design or
              in the field of mechanical design or web application development,
              using good web application development, using best practices and a
              results oriented results-oriented approach. With the combination
              of skills mechanical engineering and web development skills, I can
              offer comprehensive and creative and creative solutions to diverse
              technical challenges.
            </p>
          ) : (
            <p>
              Ingeniero mecánico y desarrollador con experiencia en el diseño y
              simulación de piezas mecánicas, así como en el desarrollo de
              aplicaciones web frontend y backend. Sólidos conocimientos en
              herramientas como Autocad y Solidworks para el diseño y modelado
              2D y 3D. Además, tengo experiencia en el desarrollo de
              aplicaciones web utilizando HTML, CSS y JavaScript y frameworks
              como ReactJs. También estoy familiarizado con tecnologías de
              backend como NodeJs y ExpressJs, así como con bases de datos SQL y
              NoSQL, incluyendo SQLite y MongoDB. de igual forma manejo Python y
              librerias de este como Pandas, Numpy, entre otras, asi como AWS
              EC2, Mi enfoque se centra en crear soluciones técnicas innovadoras
              y eficientes, ya sea en el ámbito del diseño mecánico o en el
              desarrollo de aplicaciones web, utilizando buenas prácticas y un
              enfoque orientado a resultados. Con la combinación de habilidades
              en ingeniería mecánica y desarrollo web, puedo ofrecer soluciones
              integrales y creativas a desafíos técnicos diversos.
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
