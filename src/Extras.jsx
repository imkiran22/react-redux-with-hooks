import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Players } from "./Players";
import { UPDATE_EXTRAS, UPDATE_TEAM_SCORE } from "./reducers/types";

export const Extras = () => {
  const { extras } = useSelector((state) => state.extrasScore);
  const dispatch = useDispatch();

  const callBack = () => {
    dispatch({ type: UPDATE_EXTRAS, payload: 1 });
    dispatch({ type: UPDATE_TEAM_SCORE, payload: 1 });
  };
  return (
    <div
      style={{
        padding: "10px",
        background: "lightgreen",
        fontSize: "14px",
        fontWeight: "bold"
      }}
    >
      <p>
        Extras: {extras}
        <input
          style={{ marginLeft: "10px" }}
          type="button"
          onClick={callBack}
          value="Update Extras"
        />
      </p>
    </div>
  );
};
