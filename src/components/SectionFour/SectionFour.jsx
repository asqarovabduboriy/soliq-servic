import React from "react";
import "./SectionFour.scss";
import addcircle from '../../assets/imgs/add-circle.svg'

const SectionFour = () => {
  const arrydata = [
    "Farobiy IT Academy bu nima?",
    "Farobiy IT Academy a'zoligimga nimalar kiradi?",
    "Farobiy IT Academy dan nimani o'rganishim mumkin?",
    "Sinovim tugagandan keyin nima bo'ladi?",
    "Farobiy IT Academy da dars bera olamanmi?",
  ];

  const data = arrydata.map((el)=>(
    <div key={el} className="wrapper_question">
       <p>{el}</p>
       <img src={addcircle} alt="add" />
    </div>
  ))
  return (
    <>
      <section>
        <div className="container">
          <h2 className="title_section_one">Ko'p so'raladigan savollar</h2>
          <div className="big_wrapper_question">
            {data}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFour;
