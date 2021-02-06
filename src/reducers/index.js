import { TeamScoreReducer } from "./team-score-reducer";
import { PlayerScoreReducer } from "./player-scores-reducer";
import { combineReducers } from "redux";
import { UPDATE_EXTRAS } from "./types";
import { useDispatch } from "react-redux";

function ExtrasReducer(state = { extras: 0 }, action) {
  switch (action.type) {
    case UPDATE_EXTRAS:
      return {
        ...state,
        extras: state.extras + action.payload
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  teamScore: TeamScoreReducer,
  playerScore: PlayerScoreReducer,
  extrasScore: ExtrasReducer
});

export default rootReducer;
