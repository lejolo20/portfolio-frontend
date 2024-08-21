import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = ({ language }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <section data-aos="fade-up" className="my-services" id="services">
        <h2 className="section__title section__title--services">
          {language ? "What I Do" : "Qué Hago"}
        </h2>
        <div className="services">
          <div className="service">
            <h3>1</h3>
            {language ? (
              <p>
                I am a Mechanical Engineer and Full-stack Developer with
                experience in mechanical parts design and simulation, I have a
                strong command of tools such as Autocad and Solidworks for 2D
                and 3D design and modeling.
              </p>
            ) : (
              <p>
                Ingeniero Mecánico con 12 años de experiencia en el diseño y
                simulación de piezas y ensamblajes mecánicos. Poseo solidos
                conocimientos en herramientas como Autocad y SolidWorks para el
                diseño y modelado 2D y 3D.
              </p>
            )}
          </div>

          <div className="service">
            <h3>2</h3>
            {language ? (
              <p>
                Web application developer using HTML, CSS and JavaScript, and
                frameworks such as ReactJs. and JavaScript, and frameworks like
                ReactJs. I am also familiar with backend familiar with backend
                technologies such as NodeJs and ExpressJs, as well as ExpressJs,
                as well as with SQL(SQLite) and NoSQL(MongoDB) databases
                NoSQL(MongoDB), I handle Python and Python libraries like
                Pandas, Numpy, among others.
              </p>
            ) : (
              <p>
                Desarrollador de aplicaciones web utilizando HTML, CSS y
                JavaScript, y frameworks como ReactJs. También estoy
                familiarizado con tecnologías de backend como NodeJs y
                ExpressJs, así como con bases de datos SQL(SQLite) y
                NoSQL(MongoDB), manejo Python y librerias de este como Pandas,
                Numpy, entre otras.
              </p>
            )}
          </div>
        </div>

        <a href="#work" className="btn">
          {language ? "My Work" : "Mi Trabajo"}
        </a>
      </section>
    </>
  );
};

export default Services;
