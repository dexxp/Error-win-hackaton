import React from "react";

export const TeamItem = ({ name, role }) => {
  return (
    <div className="team-item">
      <div className="title title--level_h4 team-item__name">{name}</div>
      <div className="text text--size_md team-item__role">{role}</div>
    </div>
  );
};
