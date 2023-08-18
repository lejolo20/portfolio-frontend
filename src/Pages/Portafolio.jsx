import React, { useContext, useState, useEffect } from "react";
import Header from "../Components/Header";
import { Link, useParams } from "react-router-dom";
import StateLanguage from "../context/StateLanguage";
import { languageContext } from "../context/languageContext";

const Portafolio = () => {
  const params = useParams();
  const { language } = useContext(languageContext);
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

  return (
    <>
      <StateLanguage>
        <div key={params.id} className="portafolio__main">
          <div className="portafolio__container">
            <h1 className="portafolio__title">{data[params.id]?.title}</h1>
            <a href={data[params.id]?.url} target="_blank">
              {params.id < 9 ? (
                <div className="portafolio__img__container">
                  <img
                    className="portafolio__img"
                    src={`../portfolio-0${parseInt(params.id) + 1}.jpg`}
                  />
                  <div className="center">Click Here!!</div>
                </div>
              ) : (
                <div className="portafolio__img__container">
                  <img
                    className="portafolio__img"
                    src={`../portfolio-${parseInt(params.id) + 1}.jpg`}
                  />
                  <div className="center">Click Here!!</div>
                </div>
              )}
            </a>
            <p className="portafolio__description">
              {language
                ? data[params.id]?.descriptionEnglish
                : data[params.id]?.descripcionEspañol}
            </p>
          </div>
          <div className="portafolio__btn__container">
            <Link to={"/"}>
              <button className="portafolio__btn">Go Back</button>
            </Link>
          </div>
        </div>
      </StateLanguage>
    </>
  );
  return (
    <>
      <Header />
      {porta}
    </>
  );
};

export default Portafolio;
