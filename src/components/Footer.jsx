import Logo from "../img/logo.svg";
import FooterProject from "../img/project.png";

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__wrapper">
        <div className="footer__box">
          <a href="/" className="logo footer__logo">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="footer__box footer__project">
          <img src={FooterProject} alt="" />
        </div>
        <p className="footer__box footer__date">2023 год</p>
      </div>
    </div>
  </footer>
);
