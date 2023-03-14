import { Box } from "./Box";
import { Camera } from "./Camera";
import { Devices } from "./Devices";

export const Try = () => {
  return (
    <section className="try">
      <div className="container">
        <div className="try__wrapper">
          <h2 className="title title--level_h1 title--tac try__title">
            Попробуйте сами
          </h2>
          <div className="try__inner">
            <Box title="Ваши устройства" classes="box--devices">
              <Devices />
            </Box>
            <Box title="Камера" classes="box--camera">
              <Camera />
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
};
