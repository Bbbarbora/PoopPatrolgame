import './Player.css'

export const Player = ({direction = 'down', isMoving = false}) => {
    return (
        <div className={`player ${direction} ${isMoving}`}></div>
    )
};
