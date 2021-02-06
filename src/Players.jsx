import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PLAYER_ONE_SCORE,
  PLAYER_TWO_SCORE,
  UPDATE_TEAM_SCORE
} from "./reducers/types";

export const Players = () => {
  const { playerOneScore, playerTwoScore } = useSelector(
    (state) => state.playerScore
  );
  const dispatch = useDispatch();

  const playerCallback = (type) => {
    dispatch({ type, payload: 1 });
    dispatch({ type: UPDATE_TEAM_SCORE, payload: 1 });
  };
  return (
    <div
      style={{
        padding: "10px",
        background: "aliceblue",
        fontSize: "14px",
        fontWeight: "bold"
      }}
    >
      <p>
        Player One: {playerOneScore}
        <input
          style={{ marginLeft: "10px" }}
          type="button"
          onClick={() => playerCallback(PLAYER_ONE_SCORE)}
          value="Update Player 1"
        />
      </p>
      <p>
        Player Two: {playerTwoScore}
        <input
          style={{ marginLeft: "10px" }}
          type="button"
          onClick={() => playerCallback(PLAYER_TWO_SCORE)}
          value="Update Player 2"
        />
      </p>
    </div>
  );
};
