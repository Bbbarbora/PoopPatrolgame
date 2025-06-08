import "./Bin.css";
import { DebugCircle } from "../DebugCircle/DebugCircle";

export const Bin = ({ state: { x, y, width, height, r, dy, type } }) => {
  return (
    <div
      style={{
        left: x - width / 2,
        top: y - height,
        zIndex: Math.round(y),
      }}
      id="trash-bin"
    >
      <DebugCircle r={r} dy={dy} c={5} />
    </div>
  );
};
