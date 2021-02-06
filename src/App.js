import { Provider } from "react-redux";
import { Extras } from "./Extras";
import { ScoreCard } from "./ScoreCard";
import store from "./store/store";
import "./styles.css";
import { TeamScore } from "./TeamScore";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ScoreCard>
          <TeamScore />
          <Extras />
        </ScoreCard>
      </div>
    </Provider>
  );
}
