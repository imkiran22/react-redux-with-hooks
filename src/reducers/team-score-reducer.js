import { UPDATE_TEAM_SCORE } from "./types";

export function TeamScoreReducer(state = { score: 0 }, action) {
  switch (action.type) {
    case UPDATE_TEAM_SCORE:
      return { ...state, score: state.score + action.payload };
    default:
      return state;
  }
}
