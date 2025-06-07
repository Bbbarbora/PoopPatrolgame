import './Game.css'
import { Tree } from './components/Tree/Tree'
import { Poop } from './components/Poop/Poop'
import { Dog } from './components/Dog/Dog'
import { Bin } from './components/Bin/Bin'
import { Player } from './components/Player/Player'
import { useState } from 'react'



export const Game = () => {
    const [dog, setDog] = useState({
        x : 300,
        y : 300,
        width: 82,
        height: 68,
        direction: "down-left",
        isMoving: true,
    })

    const [player, setPlayer] = useState({
        x : 100,
        y : 100,
        width: 45,
        height: 84,
        direction: "up",
        isMoving: true,
    })

    const [items, setItems] =useState([
        {
        id: 1,
        x : 100,
        y : 100,
        width: 30,
        height: 30,
        type: "poop",
    },  
    {
        id: 2,
        x : 200,
        y : 100,
        width: 30,
        height: 30,
        type: "poop",
    },
    {
        id: 3,
        x : 200,
        y : 100,
        width: 100,
        height: 100,
        type: "bin",
    },
    {
        id: 4,
        x : 300,
        y : 301,
        width: 200,
        height: 200,
        type: "tree",
    },



    ])

    return (

            <div id="game-area">
                {items.map((item)=> {
                    switch(item.type) {
                        case "poop":
                            return <Poop  state={item}/>
                        case "tree":
                            return <Tree  state={item}/>
                        case "bin":
                            return <Bin  state={item}/>
                        }
                })}
                
                <Player state = {player} />
                <Dog state= {dog}/>
            </div>

        
    )
}


