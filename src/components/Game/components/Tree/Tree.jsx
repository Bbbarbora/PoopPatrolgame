import '../Tree/Tree.css'

export const Tree = ({state:{x, y, width, height, type}}) => {
    return (
        <div
        style={{
            left:x-width/2, 
            top: y-height,
            zIndex: y,
        }} 
        id='tree'></div>
    )
}

