import { Box } from "./Box";

export const Try = () => {
  return (
    <section className="try">
      <div className="container">
        <div className="try__wrapper">
          <h2 className="title title--level_h1 title--tac try__title">
            Попробуйте сами
          </h2>
          <div className="try__inner">
            <div className={`box box--devices`}>
              <h3 className="title title--level_h3 box__title">
                Ваши устройства
              </h3>
              <div className="devices">Устройства</div>
            </div>
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
            {/* <Box title="Ваши устройства" classes="box--devices">
              <div className="devices">Устройства</div>
            </Box>
            <Box title="Камера" classes="box--camera">
              <a href="#" className="camera">
                <span className="title title--level_h3 camera__title">
                  Подключить камеру
                </span>
              </a>
            </Box> */}
          </div>
        </div>
      </div>
    </section>
  );
};
