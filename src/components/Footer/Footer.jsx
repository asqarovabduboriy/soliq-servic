import React from "react";
import "./Footer.scss";
import logo from "../../assets/imgs/logo.svg";

const Footer = () => {
  const data = [
    {
      id: 1,
      title: "Manzil",
      text: "Toshkent shahri, Yunusobod tumani, ko'ch. Amir Temur 129B",
      width: "238px",
    },
    {
      id: 2,
      title: "Yordam",
      text: "+998 91 7775411",
    },
    {
      id: 3,
      title: "Pochta",
      text: "Info@farobiy.com",
    },
  ];

  const icons = ["Facebook", "Twitter", "Telegram", "Instagram"];

  const mapdata = data?.map((el) => (
    <div key={el?.id} className="footer_card">
      <h3>{el?.title}</h3>
      <p style={{ width: el?.width }}>{el?.text}</p>
    </div>
  ));

  const iconmap = icons?.map((el) => (
    <p key={el} className="icons_footer">
      {el}
    </p>
  ));
  return (
    <>
      <footer>
        <div className="container">
          <div className="flex_one_wrapper">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="wrapper_footer_card">{mapdata}</div>
          </div>
          <div className="flex_two_wrapper">
            <div>
              <h4>
                Biz sizga mahsulot sotish uchun bu yerda emasmiz, biz tajribamiz
                orqali qiymat sotamiz.
              </h4>
            </div>

            <div className="icons_wrapper_footer">{iconmap}</div>
          </div>

          <div className="line_footer"></div>

          <p className="footer_text">© 2022 by Fido Studio. Farobiy IT Academy</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
