import { PLAYER_ONE_SCORE, PLAYER_TWO_SCORE } from "./types";

export function PlayerScoreReducer(
  state = { playerOneScore: 0, playerTwoScore: 0 },
  action
) {
  switch (action.type) {
    case PLAYER_ONE_SCORE:
      return {
        ...state,
        playerOneScore: state.playerOneScore + action.payload
      };
    case PLAYER_TWO_SCORE:
      return {
        ...state,
        playerTwoScore: state.playerTwoScore + action.payload
      };
    default:
      return state;
  }
}
