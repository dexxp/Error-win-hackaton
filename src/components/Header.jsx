import Logo from "../img/logo.svg";
import HeaderLampa from "../img/header-lampa.png";

export const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <a href="/" className="logo header__logo">
          <img src={Logo} alt="" />
        </a>
        <div className="header__inner">
          <div className="header__img">
            <img src={HeaderLampa} alt="" />
          </div>
          <h1 className="title title--level_h1 header__title">
            Управление умным домом языком жестов
          </h1>
        </div>
      </div>
    </div>
  </header>
);
