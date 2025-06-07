import './Dog.css'

export const Dog = ({state:{x, y, width, height, direction, isMoving}}) => {
    return (
        <div 
        style={{
            left:x-width/2, 
            top: y-height,
            zIndex: y,
        }} 
        className={`dog ${isMoving?'walk-'+direction:'sit'}`}></div>
    )
}