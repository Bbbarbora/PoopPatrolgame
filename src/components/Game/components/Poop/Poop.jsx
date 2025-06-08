import "../Poop/Poop.css";
import { DebugCircle } from "../DebugCircle/DebugCircle";

export const Poop = ({ state: { x, y, width, r, dy, height, type } }) => {
  return (
    <div
      style={{
        left: x - width / 2,
        top: y - height,
        zIndex: Math.round(y),
      }}
      id="poop"
    >
      <DebugCircle r={r} dy={dy} c={2} />
    </div>
  );
};
