import "./Menu.css"
import poop from "./imgs/poop_small.png"
import bag from "./imgs/poopbag_small.png"
import clock from "./imgs/clock_small.png"
import pause from "./imgs/pause_small.png"

export const Menu = () => {
  return (
    
    <div id="top-menu">
      <div className="menu-left">
        {/* <!-- Počet hovienok --> */}
        <div className="poop-counter">
          <img src={poop} alt="Poop" />
          <span id="poop-count">0</span>
        </div>

        {/* <!-- Ikona nesenia hovienka --> */}
        <div id="carrying-indicator" className="hidden">
          <img src={bag} alt="Bag with poop" />
        </div>
      </div>

      {/* <!-- ⏱️ Časovač - nižšie kvôli výrezu --> */}
      <div className="menu-center">
        <div className="timer">
          <img src={clock} alt="Clock" />
          <span id="time-left">60</span>s
        </div>
      </div>

      {/* <!-- ⏸️ Pauza --> */}
      <div className="menu-right">
        <button id="pause-button">
          <img src={pause} alt="Pause" />
        </button>
      </div>
    </div>
    )
}