import React from "react";
import "./Form.scss";
import farobiylogo from "../../assets/imgs/farobiylogo.png";

const Form = () => {
  return (
    <>
      <section>
        <div className="container">
          <form className="form">
            <div className="flex_div">
              <h2>Tanlovda yordam beramis!</h2>
              <p>
                Kurs haqida savollaringiz bo'lsa yoki nimani tanlashni
                bilmasangiz, raqamingizni qoldiring - biz barcha savollaringizga
                javob beramiz.
              </p>
              <img className="farobiylogo" src={farobiylogo} alt="" />
            </div>
            <div className="inputs_wrapper">
              <input type="text" placeholder="Ismingiz" className="input_one" />
              <div className="smal_input_wrapers">
                <input type="text" placeholder="Telefon raqamingiz" />
                <input type="text" placeholder="Pochtangiz" />
              </div>
              <button>Yuborish</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
