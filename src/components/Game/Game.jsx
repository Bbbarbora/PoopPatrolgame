import './Game.css'


export const Game = () => {
    return (
        <div id="game-screen">
            <div id="game-area">
                <div id="dog" className="dog-walk-up dog-walk-left"></div>
                <div id="player"></div>
                <div class="poop"></div>
                <div id="trash-bin"></div>
            </div>
        </div>
        
    )
}


