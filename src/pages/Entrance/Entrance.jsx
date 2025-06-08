import "./Entrance.css";
import information from "./imgs/information_small.png"
import translate from "./imgs/translate_small.png"
import gameTitle from "./imgs/logo_new.png"
import poop from "./imgs/poop_small.png"
import { Link } from "react-router-dom";

export const Entrance = () => {
    return (
    <main className="start-screen">
      <div className="start-screen-content">
    <button className="start-screen__info-btn" aria-label="Game information">
      <Link to="/rules"><img src= {information} alt="Info icon" className="start-screen__info-icon"/></Link>
    </button>

    <button className="start-screen__language-btn" aria-label="Change language">
      <img src={translate} alt="Language icon" className="start-screen__language-icon"/>
    </button>

    <h1 className="start-screen__title visually-hidden">Poop Patrol</h1>
    <Link to="/gamePage"><img  src={gameTitle} alt="Poop Patrol logo" className="start-screen__title-img"/></Link>

    <Link to="/gamePage"><div className="start-screen__dog"></div></Link>

    <button className="start-screen__poop-btn" aria-label="Start game">
      <Link to="/gamePage"><img src={poop} alt="Poop icon" className="start-screen__poop-icon"/></Link>
    </button>

    <Link to="gamePage/"><p className="start-screen__text">Pick me up to continue</p></Link>
    </div>
    </main>
    )
};