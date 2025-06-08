import "./Player.css";
import { DebugCircle } from "../DebugCircle/DebugCircle";

export const Player = ({
  state: { x, y, width, height, r, dy, direction, isMoving, isCarryingPoop },
}) => {
  return (
    <div
      style={{
        left: x - width / 2,
        top: y - height,
        zIndex: Math.round(y),
      }}
      className={`player ${isMoving ? "walk" : "idle"}-${direction}`}
    >
      {isCarryingPoop ? <div className="poopBubble"></div> : null}
      <DebugCircle r={r} dy={dy} c={0} />
    </div>
  );
};
