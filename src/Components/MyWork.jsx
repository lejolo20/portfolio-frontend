import React from "react";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const MyWork = ({ language }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("Ingenieria");

  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_API_URL);
      const data = await res.json();
      setData(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const filteredData = data.filter((item) => item.category === category);

/*   const showPortfolio = data.map((item) => {
    return (
      <div key={item.id}>
        <div className="portfolio__container">
          <Link to={`/portafolio/${item.id}`}>
            {item.id < 9 ? (
              <img
                src={`../portfolio-0${item.id + 1}.jpg`}
                alt={`${item.title}`}
                className="portfolio__img"
              />
            ) : (
              <img
                src={`../portfolio-${item.id + 1}.jpg`}
                alt={`${item.title}`}
                className="portfolio__img"
              />
            )}
          </Link>

          <h6 className="portfolio__title">
            {item.title.length < 18
              ? item.title
              : item.title.substring(0, 16) + "..."}
          </h6>
          <div className="portfolio__description">
            {language
              ? item.descriptionEnglish.substring(0, 64) + "..."
              : item.descripcionEspañol.substring(0, 64) + "..."}
          </div>
        </div>
      </div>
    );
  });

  return (
    <section data-aos="fade-up" className="my-work" id="work">
      <h2 className="section__title section__title--work">
        {language ? "My work" : "Mi trabajo"}
      </h2>
      <p className="section__subtitle section__subtitle--work">
        {language
          ? "A selection of my range of work"
          : "Una selección de mi trabajo"}
      </p>
      {loading ? (
        <>
          <div className="loading">Loading...</div>
          <div className="loading-bar"></div>
        </>
      ) : (
        <div className="portfolio">{showPortfolio}</div>
      )}
    </section>
  );
}; */
const showPortfolio = filteredData.map((item, index) => {
  const { title, descriptionEnglish, descripcionEspañol } = item;
  const imageUrl = `../portfolio-${String(item.id + 1).padStart(2, "0")}.jpg`;

  return (
    <div data-aos="fade-up" data-aos-delay={index * 100} key={item.id}>
      <div className="portfolio__container">
        <Link to={`/portafolio/${item.id}`}>
          <img src={imageUrl} alt={title} className="portfolio__img" />
        </Link>
        <h6 className="portfolio__title">
          {title.length < 18 ? title : title.substring(0, 16) + "..."}
        </h6>
        <div className="portfolio__description">
          {language
            ? descriptionEnglish.substring(0, 64) + "..."
            : descripcionEspañol.substring(0, 64) + "..."}
        </div>
      </div>
    </div>
  );
});

return (
  <section className="my-work" id="work">
    <h2 className="section__title section__title--work">
      {language ? "My work" : "Mi trabajo"}
    </h2>
    <p className="section__subtitle section__subtitle--work">
      {language
        ? "Click on a Button to see a selection of my work"
        : "Haz click en un botón para ver una selección de mí trabajo"}
    </p>

    {/* Botones de filtrado */}
    <div className="filter-buttons">
      
      <button
        className={`filter-button ${category === "Ingenieria" ? "active" : ""}`}
        onClick={() => setCategory("Ingenieria")}
      >
        {language ? "Engineering" : "Ingeniería"}
      </button>
      <button
        className={`filter-button ${category === "Programacion" ? "active" : ""}`}
        onClick={() => setCategory("Programacion")}
      >
        {language ? "Programming" : "Programación"}
      </button>
    </div>

    {/* Mostrar proyectos filtrados */}
    {loading ? (
      <>
        <div className="loading">Loading...</div>
        <div className="loading-bar"></div>
      </>
    ) : (
      <div className="portfolio">{showPortfolio}</div>
    )}
  </section>
);
};
export default MyWork;
