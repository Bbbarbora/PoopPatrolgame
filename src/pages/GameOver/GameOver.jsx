import "./GameOver.css";
import { useLocation } from "react-router-dom";
import poop from "./imgs/poop_small.png";
import educative from "./imgs/educative_small.png";
import { useNavigate } from "react-router-dom";

export const GameOver = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="gameover-screen">
      <h2 className="gameover-screen__title">Game Over</h2>

      <div className="gameover-screen__educative">
        <img src={educative} alt="educative" />
      </div>

      <p className="gameover-screen__score">
        {/* Your score:{" "} */}
        <span className="label">Your score:</span>
        <span id="final-score">
          {location.state.score}
          <img src={poop} alt="poop" className="final-score__icon" />
        </span>
      </p>

      <p className="gameover-screen__message">
        Don’t worry, even the best need practice! 🐾 Try again and clean up that
        park!
      </p>

      <button
        type="button"
        className="gameover-screen__btn"
        onClick={() => {
          navigate("/gamePage");
        }}
        aria-label="Play again"
      >
        Play again
      </button>
    </div>
  );
};
