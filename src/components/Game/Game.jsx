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
    stepsToGo: 50,
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
      setPlayer((currentPlayer) => {
        let newX = currentPlayer.x;
        let newY = currentPlayer.y;
        const step = 7;

        if (currentPlayer.isMoving) {
          switch (currentPlayer.direction) {
            case "right":
              newX += step;
              break;
            case "left":
              newX -= step;
              break;
            case "down":
              newY += step;
              break;
            case "up":
              newY -= step;
              break;
            case "up-left":
              newX -= step * 0.7;
              newY -= step * 0.7;
              break;
            case "up-right":
              newX += step * 0.7;
              newY -= step * 0.7;
              break;
            case "down-left":
              newX -= step * 0.7;
              newY += step * 0.7;
              break;
            case "down-right":
              newX += step * 0.7;
              newY += step * 0.7;
              break;
          }
        }

        newX = Math.max(
          0 + currentPlayer.width / 2,
          Math.min(window.innerWidth - currentPlayer.width / 2, newX)
        );
        newY = Math.max(
          0 + currentPlayer.height,
          Math.min(window.innerHeight, newY)
        );

        return { ...currentPlayer, x: newX, y: newY };
      });
      setDog((currentDog) => {
        let newX = currentDog.x;
        let newY = currentDog.y;
        const step = 7;

        if (currentDog.isMoving) {
          switch (currentDog.direction) {
            case "right":
              newX += step;
              break;
            case "left":
              newX -= step;
              break;
            case "down":
              newY += step;
              break;
            case "up":
              newY -= step;
              break;
            case "up-left":
              newX -= step * 0.7;
              newY -= step * 0.7;
              break;
            case "up-right":
              newX += step * 0.7;
              newY -= step * 0.7;
              break;
            case "down-left":
              newX -= step * 0.7;
              newY += step * 0.7;
              break;
            case "down-right":
              newX += step * 0.7;
              newY += step * 0.7;
              break;
          }
        }

        newX = Math.max(
          0 + currentDog.width / 2,
          Math.min(window.innerWidth - currentDog.width / 2, newX)
        );
        newY = Math.max(
          0 + currentDog.height,
          Math.min(window.innerHeight, newY)
        );

        let newStepsToGo = currentDog.stepsToGo - 1;
        let newDirection = currentDog.direction;
        if (newStepsToGo === 0) {
          console.log("ndiaefsop");
          newStepsToGo = Math.floor(Math.random() * 20 + 30);
          const dogDirection = [
            "up",
            "up-right",
            "right",
            "down-right",
            "down",
            "down-left",
            "left",
            "up-left",
          ];
          newDirection = dogDirection[Math.floor(Math.random() * 8)];

          setItems((currentItems) => {
            return [
              ...currentItems,
              {
                id: [Math.floor(Math.random() * 1000)],
                x: newX,
                y: newY,
                width: 30,
                height: 30,
                type: "poop",
              },
            ];
          });
        }

        return {
          ...currentDog,
          x: newX,
          y: newY,
          stepsToGo: newStepsToGo,
          direction: newDirection,
        };
      });
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

    const newDirection = dir === "Center" ? player.direction : conversion[dir];
    const newIsMoving = dir === "Center" ? false : true;

    console.log(conversion[dir], dir);
    if (player.direction !== newDirection || player.isMoving !== newIsMoving) {
      setPlayer((currentPlayer) => {
        return {
          ...currentPlayer,
          direction: newDirection,
          isMoving: newIsMoving,
        };
      });
    }
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
