import "./Rules.css";
import poop from "./imgs/poop_small.png";
import { Link } from "react-router-dom";

export const Rules = () => {
  return (
    <main className="rules-screen">
      {/* Back button */}
      <div className="rules-screen__top-bar">
        <button className="rules-screen__back-btn" 
          aria-label="Back to start screen"
        >
          <Link to="/gamePage">
            <img
              src={poop}
              alt="Back icon"
              className="rules-screen__back-icon"
            />
          </Link>
        </button>
      </div>

      {/* <!-- Title --> */}
      <h1 className="rules-screen__title">Rules of Poop Patrol</h1>

      {/* <!-- image of our Hero --> */}
      <div className="sprite-dog"></div>

      {/* <!-- Rules text --> */}
      <section className="rules-screen__content">
        <p>
          👋 <strong>Welcome to Poop Patrol!</strong>
          <br />
          Your adorable dog is having the time of his life… and leaving poops
          behind wherever he goes. It’s your job to clean up the mess and keep
          the park spotless!
          <br />
          Let’s get scooping! 💪💩🕹️
        </p>

        <p>
          🎮 <strong>Move your character using the joystick</strong>
          <br />
          Control your character with the virtual joystick on the screen.
        </p>

        <p>
          🐶 <strong>Your dog is running around and pooping everywhere!</strong>
          <br />
          Keep an eye on your pup — he's leaving surprises all over the park.
        </p>

        <p>
          💩 <strong>Pick up as many poops as you can</strong>
          <br />
          Walk over the poops to collect them. The cleaner the park, the better
          your score!
        </p>

        <p>
          ⏱️ <strong>Watch the timer!</strong>
          <br />
          The game ends when time runs out, so be quick!
        </p>

        <p>
          ⏸️ <strong>Need a break? Hit pause</strong>
          <br />
          You can pause the game anytime by tapping the pause button.
        </p>
      </section>

      {/* <!-- fun fact --> */}
      <p className="rules-screen__quote">
        "Being a good dog owner starts with the little things!" 🐾
      </p>
    </main>
  );
};
