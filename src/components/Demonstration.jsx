import DemonstrationPattern from "../img/demonstration-pattern.svg";
import DemonstrationPatternTop from "../img/demonstration-pattern-top.svg";
import { Camera } from "./Camera";
import { Box } from "./Box";

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
              <Box title="Камера" classes="box--camera">
                <Camera />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
