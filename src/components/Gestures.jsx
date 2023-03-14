import React from "react";

import { GesturesList } from "./GesturesList";

import G1Img from "../img/gestures/1.png";
import G1Video from "../img/gestures/1.mp4";
import G2Img from "../img/gestures/2.png";
import G2Video from "../img/gestures/2.mp4";
import G3Img from "../img/gestures/3.png";
import G3Video from "../img/gestures/3.mp4";
import G4Img from "../img/gestures/4.png";
import G4Video from "../img/gestures/4.mp4";
import G5Img from "../img/gestures/5.png";
import G5Video from "../img/gestures/5.mp4";
import G6Img from "../img/gestures/6.png";
import G6Video from "../img/gestures/6.mp4";
import G7Img from "../img/gestures/7.png";
import G7Video from "../img/gestures/7.mp4";

export const Gestures = () => {
  const [gestures, setGestures] = React.useState([
    {
      name: "Алиса",
      img: G1Img,
      video: G1Video,
    },
    {
      name: "Открыть<br />шторы",
      img: G2Img,
      video: G2Video,
    },
    {
      name: "Вкл. розетку",
      img: G3Img,
      video: G3Video,
    },
    {
      name: "Вкл. свет",
      img: G4Img,
      video: G4Video,
    },
    {
      name: "Закрыть<br />шторы",
      img: G5Img,
      video: G5Video,
    },
    {
      name: "Выкл. розетку",
      img: G6Img,
      video: G6Video,
    },
    {
      name: "Выкл. свет",
      img: G7Img,
      video: G7Video,
    },
  ]);

  return (
    <section className="gestures">
      <div className="container">
        <div className="gestures__wrapper">
          <h2 className="title title--level_h1 title--tac gestures__title">
            Доступные жесты
          </h2>
          <GesturesList gestures={gestures} />
        </div>
      </div>
    </section>
  );
};
