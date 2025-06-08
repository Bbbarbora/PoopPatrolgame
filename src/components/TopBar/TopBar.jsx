import "./TopBar.css"
import poop from "./imgs/poop_small.png"
import bag from "./imgs/poopbag_small.png"
import clock from "./imgs/clock_small.png"
import pause from "./imgs/pause_small.png"

export const TopBar = ({poopCount, isCarryingPoop, time, onPause}) => {
  return (
    
    <div id="top-bar">
      <div className="topbar-left">
        {/* <!-- Počet hovienok --> */}
        <div className="poop-counter">
          <img src={poop} alt="Poop" />
          <span id="poop-count">{poopCount}</span>
        </div>

        {/* <!-- Ikona nesenia hovienka --> */}
        <div id="carrying-indicator" className={isCarryingPoop ? "" : "hidden"}>
          <img src={bag} alt="Bag with poop" />
        </div>
      </div>

      {/* <!-- ⏱️ Časovač - nižšie kvôli výrezu --> */}
      <div className="topbar-center">
        <div className="timer">
          <img src={clock} alt="Clock" />
          <span id="time-left">{time}</span>s
        </div>
      </div>

      {/* <!-- ⏸️ Pauza --> */}
      <div className="topbar-right">
        <button id="pause-button" onClick={onPause}>
          <img src={pause} alt="Pause" />
        </button>
      </div>
    </div>
    )
}