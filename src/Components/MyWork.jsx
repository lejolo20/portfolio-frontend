import React from "react";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const MyWork = ({ language }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_API_URL);
      const data = await res.json();
      return setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const showPortfolio = data.map((item) => {
    console.log(item);
    return (
      <div key={item.id}>
        <Link to={`/portafolio/${item.id}`}>
          {item.id == 0 ? (
            <img
              src={`../portfolio-01.jpg`}
              alt={`${item.title}`}
              className="portfolio__img"
            />
          ) : (
            <img
              src={`../portfolio-0${item.id + 1}.jpg`}
              alt={`${item.title}`}
              className="portfolio__img"
            />
          )}
        </Link>
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
      <div className="portfolio">{showPortfolio}</div>
    </section>
  );
};

export default MyWork;
