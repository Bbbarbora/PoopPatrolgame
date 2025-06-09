import "../Bench/Bench.css";
import { DebugCircle } from "../DebugCircle/DebugCircle";

export const Bench = ({ state: { x, y, width, height, r, dy, type } }) => {
  return (
    <div
      style={{
        left: x - width / 2,
        top: y - height,
        zIndex: Math.round(y),
      }}
      id="bench"
    >
      <DebugCircle r={r} dy={dy} c={1} />
    </div>
  );
};
