import "./Game.css";
import { Tree } from "./components/Tree/Tree";
import { Poop } from "./components/Poop/Poop";
import { Dog } from "./components/Dog/Dog";
import { Bin } from "./components/Bin/Bin";
import { Player } from "./components/Player/Player";
import { useState } from "react";
import Joystick, { GhostArea, DirectionCount } from "rc-joystick";
import { useEffect } from "react";

export const Game = () => {
  const [dog, setDog] = useState({
    x: 300,
    y: 300,
    width: 82,
    height: 68,
    direction: "down-left",
    isMoving: true,
  });

  const [player, setPlayer] = useState({
    x: 100,
    y: 100,
    width: 45,
    height: 84,
    direction: "up",
    isMoving: true,
  });

  const [items, setItems] = useState([
    {
      id: 1,
      x: 100,
      y: 100,
      width: 30,
      height: 30,
      type: "poop",
    },
    {
      id: 2,
      x: 200,
      y: 100,
      width: 30,
      height: 30,
      type: "poop",
    },
    {
      id: 3,
      x: 200,
      y: 100,
      width: 100,
      height: 100,
      type: "bin",
    },
    {
      id: 4,
      x: 300,
      y: 301,
      width: 200,
      height: 200,
      type: "tree",
    },
  ]);

  useEffect(() => {
    const gameLoop = () => {
      console.log("ble");
    };
    setInterval(gameLoop, 50);
  }, []);

  const handleDirectionChange = (dir) => {
    const conversion = {
      Top: "up",
      RightTop: "up-right",
      Right: "right",
      BottomRight: "down-right",
      Bottom: "down",
      LeftBottom: "down-left",
      Left: "left",
      TopLeft: "up-left",
      Center: "",
    };
    console.log(conversion[dir], dir);
    setPlayer((currentPlayer) => {
      return {
        ...currentPlayer,
        direction: dir === "Center" ? currentPlayer.direction : conversion[dir],
        isMoving: dir === "Center" ? false : true,
      };
    });
  };

  return (
    <div className="game-screen">
      <div id="game-area">
        {items.map((item) => {
          switch (item.type) {
            case "poop":
              return <Poop key={item.id} state={item} />;
            case "tree":
              return <Tree key={item.id} state={item} />;
            case "bin":
              return <Bin key={item.id} state={item} />;
          }
        })}

        <Player state={player} />
        <Dog state={dog} />
      </div>
      <GhostArea width="100%" height="100%">
        <Joystick
          directionCount={DirectionCount.Nine}
          baseRadius={60}
          controllerRadius={30}
          onDirectionChange={handleDirectionChange}
        />
      </GhostArea>
    </div>
  );
};
