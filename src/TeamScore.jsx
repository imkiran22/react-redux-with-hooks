import React from "react";
import { useSelector } from "react-redux";
import { Players } from "./Players";

export const TeamScore = () => {
  const score = useSelector(state => state.teamScore.score)
  return (
    <div
      style={{
        padding: "20px 10px",
        background: "lightgrey",
        fontSize: "14px",
        fontWeight: "bold"
      }}
    >
      {score}
      <Players />
    </div>
  );
};
