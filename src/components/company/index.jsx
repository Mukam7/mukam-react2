import React, { Component } from "react";

import "../company/Company.scss";

import video from "../../assets/images/video.png";

export class Company extends Component {
  render() {
    return (
      <div className="container">
        <div className="company-title">
          <h1>
            О компании <span>LEANGROUP</span>
          </h1>
        </div>
        <div className="company-cards">
          <div className="company-card-left">
            <img src={video} alt="img"></img>
          </div>
          <div className="company-card-right">
            <p>
              Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на
              сегодняшний день является ведущей компанией по производству
              ламинатных и экструзионных туб. Имея две технологии – для
              производства ламинатных и экструзионных туб, мы предлагаем вам
              широкий спектр возможностей. Большим преимуществом является
              собственный печатный цех в ламинате и in-line печать в экструзии с
              возможностью различных дополнительных опций декора. Особое
              внимание уделяется работе с поставщиками для контроля и
              поддержания качества производимой нами продукции. С января 2018
              года компания стала членом Европейской Ассоциации производителей
              туб (ETMA), что подтверждает сильную позицию бренда и на рынке
              Европы.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Company;
