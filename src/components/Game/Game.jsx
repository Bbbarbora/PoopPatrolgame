import './Game.css'
import { Tree } from './components/Tree/Tree'
import { Poop } from './components/Poop/Poop'
import { Dog } from './components/Dog/Dog'

export const Game = () => {
    return (
        <div id="game-screen">
            <div id="game-area">
                <Dog />
                <div id="player"></div>
                <Poop />
                <div id="trash-bin"></div>
                <Tree />
            </div>
        </div>
        
    )
}


