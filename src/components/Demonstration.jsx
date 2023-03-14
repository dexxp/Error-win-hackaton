import DemonstrationPattern from "../img/demonstration-pattern.svg";
import DemonstrationPatternTop from "../img/demonstration-pattern-top.svg";

export const Demonstration = () => {
  return (
    <section
      className="demonstration"
      style={{ backgroundImage: `url("${DemonstrationPattern}")` }}
    >
      <div
        className="demonstration__wrapper-outer"
        style={{ backgroundImage: `url("${DemonstrationPatternTop}")` }}
      >
        <div className="container">
          <div className="demonstration__wrapper">
            <h2 className="title title--level_h1 title--tac demonstration__title">
              Демонстрация работы
            </h2>

            <div className="demonstration__inner">
              <div className={`box box--camera`}>
                <h3 className="title title--level_h3 box__title">
                  Ваши устройства
                </h3>
                <a href="#" className="camera">
                  <span className="title title--level_h3 camera__title">
                    Подключить камеру
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
