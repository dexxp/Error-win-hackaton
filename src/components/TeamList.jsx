import React from "react";
import { TeamItem } from "./TeamItem";

export const TeamList = ({ team }) => {
  return (
    <div className="team-list">
      {team.map((t) => (
        <TeamItem name={t.name} role={t.role} key={t.name} />
      ))}
    </div>
  );
};
