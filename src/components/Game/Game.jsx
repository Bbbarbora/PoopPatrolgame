import "./Game.css";
import { Tree } from "./components/Tree/Tree";
import { Poop } from "./components/Poop/Poop";
import { Dog } from "./components/Dog/Dog";
import { Bin } from "./components/Bin/Bin";
import { Player } from "./components/Player/Player";
import { useState } from "react";
import Joystick, { GhostArea, DirectionCount } from "rc-joystick";
import { useEffect, useRef } from "react";
import {
  createBin,
  createPoop,
  createTree,
  createPlayer,
  createDog,
} from "./createItems";
import { isCollision } from "./collisionDetection";

export const Game = () => {
  const [, forceRefresh] = useState({});

  const dog = useRef(createDog(300, 300));

  const player = useRef(createPlayer(200, 299));

  const items = useRef([
    createBin(200, 100),
    createPoop(100, 100),
    createTree(300, 300),
  ]);

  useEffect(() => {
    const gameLoop = () => {
      // PLAYER block
      {
        let newX = player.current.x;
        let newY = player.current.y;
        const step = 7;

        if (player.current.isMoving) {
          switch (player.current.direction) {
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
          0 + player.current.width / 2,
          Math.min(window.innerWidth - player.current.width / 2, newX)
        );
        newY = Math.max(
          0 + player.current.height,
          Math.min(window.innerHeight, newY)
        );

        player.current.x = newX;
        player.current.y = newY;

        for (let i = items.current.length - 1; i >= 0; i--) {
          if (
            isCollision(player.current, items.current[i]) &&
            items.current[i].type === "poop"
          ) {
            items.current.splice(i, 1);
          }
        }
      }

      // DOG block
      {
        let newX = dog.current.x;
        let newY = dog.current.y;
        const step = 7;

        if (dog.current.isMoving) {
          switch (dog.current.direction) {
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
          0 + dog.current.width / 2,
          Math.min(window.innerWidth - dog.current.width / 2, newX)
        );
        newY = Math.max(
          0 + dog.current.height,
          Math.min(window.innerHeight, newY)
        );

        let newStepsToGo = dog.current.stepsToGo - 1;
        let newDirection = dog.current.direction;
        if (newStepsToGo === 0) {
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
          items.current.push(createPoop(newX, newY));
        }

        dog.current.x = newX;
        dog.current.y = newY;
        dog.current.stepsToGo = newStepsToGo;
        dog.current.direction = newDirection;
      }
      forceRefresh({});
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

    const newDirection =
      dir === "Center" ? player.current.direction : conversion[dir];
    const newIsMoving = dir === "Center" ? false : true;

    if (
      player.current.direction !== newDirection ||
      player.current.isMoving !== newIsMoving
    ) {
      player.current.direction = newDirection;
      player.current.isMoving = newIsMoving;
    }
  };

  return (
    <div className="game-screen">
      <div id="game-area">
        {items.current.map((item) => {
          switch (item.type) {
            case "poop":
              return <Poop key={item.id} state={item} />;
            case "tree":
              return <Tree key={item.id} state={item} />;
            case "bin":
              return <Bin key={item.id} state={item} />;
          }
        })}

        <Player state={player.current} />
        <Dog state={dog.current} />
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
