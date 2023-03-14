import React from "react";
import { TeamList } from "./TeamList";

export const Team = () => {
  const [team, setTeam] = React.useState([
    {
      name: "Николай Сорокин",
      role: "Капитан, дизайнер, монтажёр, 3D artist, помощник в frontend’e и обучении ИИ",
    },
    {
      name: "Дарья Маркова",
      role: "Backend разработчик, автор идеи, помощник в ИИ",
    },
    {
      name: "Ростислав Боронин",
      role: "Backend разработчик, главный по распознованию и ИИ",
    },
    {
      name: "Никита Казанцев",
      role: "Backend разработчик",
    },
    {
      name: "Денис Мирошников",
      role: "Frontend разработчик ",
    },
    {
      name: "Роман Самофалов",
      role: "Frontend разработчик ",
    },
  ]);

  return (
    <section className="team">
      <div className="container">
        <div className="team__wrapper">
          <h2 className="title title--level_h1 team__title">Наша команда</h2>
          <TeamList team={team} />
        </div>
      </div>
    </section>
  );
};
