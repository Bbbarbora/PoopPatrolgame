import './Dog.css'

export const Dog = ({direction = 'down', isMoving = false}) => {
    return (
        <div className={`dog ${direction} ${isMoving}`}></div>
    )
}