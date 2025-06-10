import "./Entrance.css";
import information from "./imgs/rules_small.png";
import gameTitle from "./imgs/logowhite_small.png";
import poop from "./imgs/poop_small.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAudio } from "../../hooks/useAudio";
import gamestartUrl from "../../components/Game/sounds/gamestart.mp3";

export const Entrance = () => {
  const navigate = useNavigate();
  const gameStartSound = useAudio(gamestartUrl);
  return (
    <main className="start-screen">
      <div className="start-screen-content">
        <button
          className="start-screen__info-btn"
          aria-label="Game information"
        >
          <Link to="/rules">
            <img
              src={information}
              alt="Info icon"
              className="start-screen__info-icon"
            />
          </Link>
        </button>

        <h1 className="start-screen__title visually-hidden">Poop Patrol</h1>

        <img
          src={gameTitle}
          alt="Poop Patrol logo"
          className="start-screen__title-img"
        />

        <div className="start-screen__dog"></div>

        <button
          className="start-screen__btn"
          onClick={() => {
            // gameStartSound.play(); nastavenie 1.
            // nastavenie s pomocou ai
            const audio = new Audio(gamestartUrl);
            audio.play().catch((e) => console.log("Autoplay failed:", e));

            navigate("/gamePage");
          }}
          aria-label="Start"
        >
          START GAME
          <img src={poop} alt="Poop icon" className="start-screen__poop-icon" />
        </button>
      </div>
    </main>
  );
};
