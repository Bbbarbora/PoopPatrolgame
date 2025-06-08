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
import { useAudio } from "../../hooks/useAudio";
import musicUrl from "./sounds/music.mp3";
import pickupUrl from "./sounds/pickup.mp3";
import putUrl from "./sounds/put.mp3";
import { TopBar } from "../TopBar/TopBar";
import { Menu } from "../Menu/Menu";
import { useNavigate } from "react-router-dom";


export const Game = () => {
  const navigate = useNavigate()
  const [, forceRefresh] = useState({});
  const dog = useRef(createDog(300, 300));
  const player = useRef(createPlayer(200, 299));
  const items = useRef([
    createBin(200, 100),
    createTree(300, 300),
  ]);

  const dogSpeedIncrease = 0.3;
  const playerSpeedIncrease = 0.2;
  const poopAfter = 7;
  const lastPoopTime = useRef(0);

  const poopCount = useRef(0)
  const time = useRef(0)
  const isGamePaused = useRef(false)
  const isSoundEnabled = useRef(true)
  const music = useAudio(musicUrl)
  const pickupSound = useAudio(pickupUrl)
  const putSound = useAudio(putUrl)
  const requestAnimationId = useRef()
  const lastTime = useRef(0)
  const topBarHeight = 55

  useEffect(() => {
    const gameLoop = (currentTime) => {
        const deltaTime = (currentTime - lastTime.current)/1000
        if (deltaTime < 0.05) {
          requestAnimationId.current = requestAnimationFrame(gameLoop);
          return;
        }
        lastTime.current = currentTime
        
        if (!isGamePaused.current) {
          time.current += deltaTime

      // PLAYER block
      {
        let newX = player.current.x;
        let newY = player.current.y;
        const step = 7 + playerSpeedIncrease * poopCount.current;

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
          Math.min(window.innerHeight - topBarHeight, newY)
        );

        player.current.x = newX;
        player.current.y = newY;

        // Collision with poop
        if (!player.current.isCarryingPoop) {
          for (let i = items.current.length - 1; i >= 0; i--) {
            if (
              isCollision(player.current, items.current[i]) &&
              items.current[i].type === "poop"
            ) {
              items.current.splice(i, 1);
              player.current.isCarryingPoop = true;
              if (isSoundEnabled.current) { pickupSound.play() };
              break;

            }
          }
        }

        // Collision with bin
        const bin = items.current.find((item) => {
          return item.type === "bin";
        });
        if (isCollision(player.current, bin) && player.current.isCarryingPoop) {
          player.current.isCarryingPoop = false;
          if (isSoundEnabled.current) { putSound.play() }
          poopCount.current += 1
        }
      }

      // DOG block
      {
        let newX = dog.current.x;
        let newY = dog.current.y;
        const step = 7 + dogSpeedIncrease * poopCount.current

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
          Math.min(window.innerHeight - topBarHeight, newY)
        );

        let newStepsToGo = dog.current.stepsToGo - 1;
        let newDirection = dog.current.direction;
        if (newStepsToGo === 0
          || newX === 0 + dog.current.width / 2
          || newX === window.innerWidth - dog.current.width / 2
          || newY === 0 + dog.current.height
          || newY === window.innerHeight - topBarHeight
        ) {
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
          
        }

        if (time.current > lastPoopTime.current + poopAfter) {
          items.current.push(createPoop(newX, newY));
          lastPoopTime.current = time.current
          // test na Game Over
          const poopItems = items.current.filter (item => item.type === "poop")
          if (poopItems.length === 3) {
            navigate("/gameover", {state: {score: poopCount.current}})
          }
        }

        dog.current.x = newX;
        dog.current.y = newY;
        dog.current.stepsToGo = newStepsToGo;
        dog.current.direction = newDirection;
      }
    }
      forceRefresh({});
      requestAnimationId.current = requestAnimationFrame(gameLoop);
    };

    soundOn();

    requestAnimationId.current = requestAnimationFrame(gameLoop);
    

    return () => {
      music.stop();
      cancelAnimationFrame(requestAnimationId.current);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('selectstart', preventDefault);
    document.addEventListener('contextmenu', preventDefault);

    return () => {
      document.removeEventListener('selectstart', preventDefault);
      document.removeEventListener('contextmenu', preventDefault);
    }
  }, [])

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

  const pauseGame = () => {
    isGamePaused.current = true
  }

  const resumeGame = () => {
    isGamePaused.current = false
  }

  const soundOn = () => {
    isSoundEnabled.current = true
    if (!music.isPlaying) {
      music.volume(0.5)
      music.play()
    }
  }

  const soundOff = () => {
    isSoundEnabled.current = false
    if (music.isPlaying) {
      music.stop()
    }
  }

  return (
    <div className="game-screen">
      {isGamePaused.current && <Menu onSoundOn={soundOn}
        onSoundOff={soundOff}
        onResume={resumeGame} />}
      <TopBar isCarryingPoop={player.current.isCarryingPoop}
        poopCount={poopCount.current}
        time={time.current.toFixed(0)}
        onPause={pauseGame} />
     <div className="game-wrap"> 
      <div id="game-area">
        <Player state={player.current} />
        <Dog state={dog.current} />
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
      </div>
      <GhostArea className="gameGhost" width="100%" height="100%">
        <Joystick
          directionCount={DirectionCount.Nine}
          baseRadius={60}
          controllerRadius={30}
          onDirectionChange={handleDirectionChange}
        />
      </GhostArea>
      </div>  
    </div>
  );
};
