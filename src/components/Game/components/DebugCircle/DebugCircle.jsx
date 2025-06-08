const DEBUG = false;

export const DebugCircle = ({ r, dy, c = 0 }) => {
  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
  ];
  const color = colors[c];
  const bgColor = color + "80";

  return DEBUG ? (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: `calc(100% + ${dy}px)`,
        width: 2 * r,
        height: 2 * r,
        transform: "translate(-50%, -50%)",
        border: `1px solid ${color}`,
        background: bgColor,
        borderRadius: "50%",
      }}
    />
  ) : null;
};

export default DebugCircle;
