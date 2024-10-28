import React from "react";
import dasturchi from "../../assets/imgs/dasturchi.png";
import dizayner from "../../assets/imgs/dizayner.png";
import marketing from "../../assets/imgs/marketing.png";
import logistik from "../../assets/imgs/logistika.png";
import montajchi from "../../assets/imgs/videomantaj.png";
import right from "../../assets/imgs/arrow-right.svg";
import "./SectionOne.scss";

const SectionOne = () => {
  const data = [
    {
      id: 1,
      title: "Dasturlash",
      img: dasturchi,
      width: "381px",
      height: "273px",
    },
    {
      id: 2,
      title: "Dizayn",
      img: dizayner,
      width: "482px",
      height: "273px",
      left: 'margin_left'
    },
    {
      id: 3,
      title: "Marketing",
      img: marketing,
      width: "280px",
      height: "336px",
      className: 'margin_topp'
    },
    {
      id: 4,
      title: "Logistika broketligi",
      img: logistik,
      width: "483px",
      height: "273px",
    },
    {
      id: 5,
      title: "Videomontaj va maxsus effektlar",
      img: montajchi,
      width: "381px",
      height: "273px",
      className: 'margin_top'
    },
 
  ];

  const cards = data.map((item) => (
    <div
      className={"card" + " " + item.left}
      key={item.id}
      style={{
        width: item.width,
        height: item.height,
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4) 70%), url(${item.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className={item.className ? item.className :  "wrapper_content "}>
        <h3>{item.title}</h3>
        <div>
        <button>Batafsil <img src={right} alt="rigth-icon" /> </button>
        </div>
      </div>
    </div>
  ));

  return (
    <section>
      <div className="container">
        <h2 className="title_section_one">Biz o'rgatadigan kurslar</h2>
        <div className="wrapper_cards">{cards}
          <div className="end_card">
            <h3>Tez orada yangi kurs!</h3>
             <div className="rectangle">
              <span>Tez orada yangi kurs!</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
