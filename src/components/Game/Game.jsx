import './Game.css'
import './components/Bin/Bin'
import { Bin } from './components/Bin/Bin'
import { Player } from './components/Player/Player'


export const Game = () => {
    return (
        <div id="game-screen">
            <div id="game-area">
                <div id="dog" className="dog-walk-up dog-walk-left"></div>
                <Player/>
                <div class="poop"></div>
                <Bin/>
            </div>
        </div>
        
    )
}


