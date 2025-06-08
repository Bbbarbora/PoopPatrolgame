import "./Menu.css"
import soundOn from "./imgs/soundon_small.png"
import soundOff from "./imgs/sounoff_small.png"
import { useNavigate } from "react-router-dom"

export const Menu = ({onSoundOn, onSoundOff, onResume}) => {
  const navigate = useNavigate()  
  return (

<div className="pause-overlay">
  <div className="pause-menu">
    <h2 className="pause-menu__title">Menu</h2>

    <button className="pause-menu__btn" onClick={onResume} >Resume</button>
    <button className="pause-menu__btn" onClick={() => {navigate("/")}}>Quit</button>

    <div className="pause-menu__settings">
      <h3 className="pause-menu__subtitle">Settings</h3>

      {/* <!-- Zvuk --> */}
      <div className="pause-menu__section">
        <p className="pause-menu__label">Sound</p>
        <button className="pause-menu__icon-btn" aria-label="Sound On" onClick={onSoundOn}>
          <img src={soundOn} alt="Sound On" />
        </button>
        <button className="pause-menu__icon-btn" aria-label="Sound Off" onClick={onSoundOff}>
          <img src={soundOff} alt="Sound Off" />
        </button>
      </div>


      </div>
    </div>
  </div>

)
}