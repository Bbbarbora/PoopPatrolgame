import './Player.css'

export const Player = ({state:{x, y, width, height, direction, isMoving}}) => {
    return (
        <div
        style={{
            left:x-width/2, 
            top: y-height,
            zIndex: y,
        }} 
        className={`player ${isMoving?'walk':'idle'}-${direction}`}></div>
    )
};

