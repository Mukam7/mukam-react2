import React, { Component } from "react";
import logoSite from "../../assets/images/logo-site.png";
import "./Header.scss";

class Header extends Component {
  openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
  }

  closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
  }

  componentDidMount() {
    document
      .getElementById("navbar-open")
      .addEventListener("click", this.openNavbar);
    document
      .getElementById("navbar-close")
      .addEventListener("click", this.closeNavbar);
  }

  componentWillUnmount() {
    document
      .getElementById("navbar-open")
      .removeEventListener("click", this.openNavbar);
    document
      .getElementById("navbar-close")
      .removeEventListener("click", this.closeNavbar);
  }

  render() {
    return (
      <header>
        <div className="container">
          <nav className="nav-link">
            <div className="nav-link-left">
              <a href="#index">
                <img src={logoSite} alt="site-logo" />
              </a>
            </div>
            <div className="nav-link-center">
              <li>
                <a href="#index">Продукция</a>
              </li>
              <li>
                <a href="#index">Сертификаты</a>
              </li>
              <li>
                <a href="#index">Наша команда</a>
              </li>
              <li>
                <a href="#index">О нас</a>
              </li>
              <li>
                <a href="#index">Новости</a>
              </li>
              <li>
                <a href="#index">Вакансии</a>
              </li>
              <li>
                <a href="#index">Контакты</a>
              </li>
              <div class="header-hover-menu">
                <ul>
                  <li>Ламинатные тубы</li>
                  <li>Экструзионные тубы</li>
                  <li>Другая упаковка</li>
                </ul>
              </div>
            </div>
            <div className="nav-link-right">
              <a href="#index">RU</a> | <a href="#index">UZ</a>
              <button id="navbar-open">
                <i class="fa-solid fa-bars"></i>
              </button>
            </div>
            <div id="navbar-responsive">
              <button id="navbar-close">
                <i class="fa-solid fa-xmark"></i>
              </button>
              <div className="mobile-link-center">
                <li>
                  <a href="#index">Продукция</a>
                </li>
                <li>
                  <a href="#index">Сертификаты</a>
                </li>
                <li>
                  <a href="#index">Наша команда</a>
                </li>
                <li>
                  <a href="#index">О нас</a>
                </li>
                <li>
                  <a href="#index">Новости</a>
                </li>
                <li>
                  <a href="#index">Вакансии</a>
                </li>
                <li>
                  <a href="#index">Контакты</a>
                </li>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
