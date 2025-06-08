import "./GameOver.css";
import { useLocation } from "react-router-dom";

export const GameOver = () => {
  const location = useLocation()
  return (
    <div className="gameover-screen">
      <h2 className="gameover-screen__title">Game Over</h2>

      <p className="gameover-screen__score">
        Your score: <span id="final-score">{location.state.score}</span>
      </p>

      <p className="gameover-screen__message">
        Don’t worry, even the best need practice! 🐾 Try again and clean up that
        park!
      </p>

      <button className="gameover-screen__btn" aria-label="Play again">
        Play again
      </button>
    </div>
  );
};
