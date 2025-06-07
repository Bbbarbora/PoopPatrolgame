import './Game.css'
import { Tree } from './components/Tree/Tree'
import { Poop } from './components/Poop/Poop'
import { Dog } from './components/Dog/Dog'
import { Bin } from './components/Bin/Bin'
import { Player } from './components/Player/Player'


export const Game = () => {
    return (
        <div id="game-screen">
            <div id="game-area">
                <Poop />
                <Tree />
                <Player />
                <Bin />
                <Dog />
            </div>
        </div>
        
    )
}


