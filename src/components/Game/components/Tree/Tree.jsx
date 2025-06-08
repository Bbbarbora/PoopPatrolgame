import "../Tree/Tree.css";
import { DebugCircle } from "../DebugCircle/DebugCircle";

export const Tree = ({ state: { x, y, width, height, r, dy, type } }) => {
  return (
    <div
      style={{
        left: x - width / 2,
        top: y - height,
        zIndex: Math.round(y),
      }}
      id="tree"
    >
      <DebugCircle r={r} dy={dy} c={1} />
    </div>
  );
};
