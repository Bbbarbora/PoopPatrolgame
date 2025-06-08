import "./Dog.css";
import { DebugCircle } from "../DebugCircle/DebugCircle";

export const Dog = ({
  state: { x, y, width, height, r, dy, direction, isMoving },
}) => {
  return (
    <div
      style={{
        left: x - width / 2,
        top: y - height,
        zIndex: Math.round(y),
      }}
      className={`dog ${isMoving ? "walk-" + direction : "sit"}`}
    >
      <DebugCircle r={r} dy={dy} c={3} />
    </div>
  );
};
