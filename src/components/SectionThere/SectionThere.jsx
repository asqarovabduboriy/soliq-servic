import React from "react";
import "./SectionThere.scss";
import room from "../../assets/imgs/room.png";
import together from "../../assets/imgs/togather.png";
import like from "../../assets/imgs/like.svg";
import medal from "../../assets/imgs/medal-star.svg";

const SectionThere = () => {
  return (
    <>
      <section id="Bizhaqimizda">
        <div className="container">
          <h2 className="title_section_one">Biz haqimizda</h2>
          <div className="grid-container">
            <div className="card_one">
              <img src={like} alt="like" />
              <p>
                Farobiy IT Academy - da biz oddiy ko'rinadigan yaratish harakati
                odamlar hayotida o'sish.
              </p>
            </div>
            <div className="imgs_wrapper">
              <img src={together} alt="togather" />
            </div>
          </div>
          <div className="grid_container_two">
            <div className="imgs_wrapper_room">
              <img src={room} alt="room" />
            </div>
            <div className="card_two">
              <img src={medal} alt="medal" />
              <p>
                Farobiy IT Academy - da biz oddiy ko'rinadigan yaratish harakati
                odamlar hayotida o'sish.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionThere;
