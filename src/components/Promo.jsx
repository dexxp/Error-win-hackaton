import PromoPattern from "../img/promo-pattern.svg";
import PromoVideo from "../img/promo-video.mp4";
import PromoPatternTop from "../img/promo-pattern-top.svg";

export const Promo = () => (
  <section className="promo">
    <div
      className="promo__wrapper-outer"
      style={{ backgroundImage: `url(${PromoPattern})` }}
    >
      <video className="promo__video" autoPlay="autoplay" loop muted>
        <source src={PromoVideo} type="video/mp4" />
      </video>
      <div
        className="promo__inner-outer"
        style={{ backgroundImage: `url(${PromoPatternTop})` }}
      >
        <div className="container">
          <div className="promo__wrapper">
            <div className="tile promo__tile">
              <div className="tile__wrapper">
                <h2 className="title title--level_h3 tile__title">
                  Наша технология позволяет управлять умным домом с помощью
                  языка жестов.
                </h2>
                <div className="text text--size_lg tile__text">
                  <p>
                    Пользователь подкючает свой аккаунт с умными устройствами и,
                    показывая жесты, может ими управлять.
                  </p>
                  <p>
                    Бум-бум, тут будет что-то про камеру, пока надо тестить. Вот
                    так вот , да.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
