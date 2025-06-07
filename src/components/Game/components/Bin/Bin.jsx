import './Bin.css'

export const Bin = ({state:{x, y, width, height, type}}) => {
    return (
            <div
            style={{
            left:x-width/2, 
            top: y-height,
            zIndex: y,
        }} 
            id="trash-bin"></div>
    )
};

