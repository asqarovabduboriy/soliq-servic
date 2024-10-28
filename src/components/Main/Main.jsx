import React from "react";
import "./Main.scss";
import people from "../../assets/imgs/Ellipse 2.png";
import star from "../../assets/imgs/star.svg";

const Main = () => {
  return (
    <>
      <main>
        <div className="container ">
          <div className="main">
            <div className="big_wrapper">
              <div className="main_text">
                <div className="main_title">
                  <p className="main_p">Zamonaviy IT o'quv markazi</p>
                  <img src={star} alt="star" />
                </div>
                <h3>
                  Biz sizga <span>zamonaviy kasbni</span> o'rganishga va ish
                  boshlashingizga yordam beramiz
                </h3>
                <button>Kurslarni tanlash</button>
              </div>
              <div className="img_wrapper">
                <img src={people} alt="people" />
              </div>
            </div>
          </div>
          <div className="line_wrapper">
                {Array.from({ length: 2 }).map((_, index) => (
                    <div key={index}  className="line"></div>
                ))}
                <div className="long_line"></div>
            </div>
        </div>
      </main>
    </>
  );
};

export default Main;
