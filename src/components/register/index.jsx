import React, { Component } from "react";

import "./Register.scss";

export class Register extends Component {
  render() {
    return (
      <div className="container register">
        <h1>Получить подробную информацию</h1>
        <p>
          Просто заполните форму, наш менеджер свяжется с <br/> вами в ближайшее время
        </p>
        <div className="login-register">
          <input type="text" placeholder="Ваше имя"></input>
          <input type="text" placeholder="+375 (29) 0000000"></input>
        </div>
        <textarea>Комментарий</textarea> <br/>
        <button>gdsg</button>
        </div>
    );
  }
}

export default Register;