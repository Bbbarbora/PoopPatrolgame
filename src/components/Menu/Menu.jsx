import "./Menu.css"
import {poop} from "./imgs/poop_small.png"
import {bag} from "./imgs/poopbag_small.png"
import {clock} from "./imgs/clock_small.png"
import {pause} from "./imgs/pause_small.png"

export const Menu = () => {
    <div id="game-screen">

    {/* <!-- Horný panel --> */}
    <div id="top-menu">
      <div class="menu-left">
        {/* <!-- Počet hovienok --> */}
        <div class="poop-counter">
          <img src={poop} alt="Poop" />
          <span id="poop-count">0</span>
        </div>

        {/* <!-- Ikona nesenia hovienka --> */}
        <div id="carrying-indicator" class="hidden">
          <img src={bag} alt="Bag with poop" />
        </div>
      </div>

      {/* <!-- ⏱️ Časovač - nižšie kvôli výrezu --> */}
      <div class="menu-center">
        <div class="timer">
          <img src={clock} alt="Clock" />
          <span id="time-left">60</span>s
        </div>
      </div>

      {/* <!-- ⏸️ Pauza --> */}
      <div class="menu-right">
        <button id="pause-button">
          <img src={pause} alt="Pause" />
        </button>
      </div>
    </div>

    {/* <!-- Tu neskôr pridáme herné objekty, ktoré sa budú hýbať --> */}
    <div id="game-area">
      <div id="dog" class="dog-walk-up dog-walk-left"></div>
      <div id="player"></div>
      <div class="poop"></div>
      <div id="trash-bin"></div>
    </div>

    {/* <!-- Skryté menu pri pauze --> */}
    <div id="pause-menu" class="hidden">
      {/* <!-- Obsah menu (tlačidlo pokračovať, znovu, atď.) --> */}
    </div>

    </div>
}