import "./Rules.css";
import poop from "./imgs/poop_small.png";
import { Link } from "react-router-dom";

export const Rules = () => {
  return (
    <main className="rules-screen">
      {/* Back button */}
      <div className="rules-screen__top-bar">
        <button
          className="rules-screen__back-btn"
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
          💩 <strong> Scoop the poop</strong>
          <br />
          Walk over the poop to collect it. But that’s not enough — carry it to
          the trash can to earn points!
        </p>

        <p>
          🗑️ <strong>Take it to the bin</strong>
          <br />
          Only poop delivered to the trash counts. That’s right — no shortcuts
          to cleanliness.
        </p>

        <p>
          💥 <strong>Don’t let the poop pile up</strong>
          <br />
          If more than 100 poops are chilling on the ground, you lose. Nobody
          wants to hang out in a poopocalypse.
        </p>

        <p>
          ⏸️ <strong>Need a break? Hit pause</strong>
          <br />
          Even heroes deserve to breathe. Tap the pause button anytime.
        </p>
      </section>

      {/* <!-- fun fact --> */}
      <p className="rules-screen__quote">
        "Behind every happy tail is a tired human with a poop bag." 🐾
      </p>
    </main>
  );
};
