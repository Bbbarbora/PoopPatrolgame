import '../Poop/Poop.css'

export const Poop = ({state:{x, y, width, height, type}}) => {
    return (
        <div
        style={{
            left:x-width/2, 
            top: y-height,
            zIndex: y,
        }} 
        id='poop'></div>
    )
}