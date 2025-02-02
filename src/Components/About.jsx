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
              Mechanical Engineer and Developer with experience in the design and simulation of mechanical components, as well as in frontend and backend web development. I have solid expertise in tools like AutoCAD and SolidWorks for 2D and 3D design and modeling. Additionally, I develop web applications using HTML, CSS, and JavaScript, along with frameworks such as React.js. On the backend, I work with Node.js and Express.js, as well as SQL and NoSQL databases, including SQLite and MongoDB.

              I also have experience with Python and libraries like Pandas and NumPy, as well as cloud services such as AWS EC2. My focus is on creating innovative and efficient technical solutions in both mechanical design and web development, following best practices and a results-oriented approach. By combining my skills in mechanical engineering and software development, I provide comprehensive and creative solutions to a wide range of technical challenges.
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
