import "./GameOver.css";

export const Entrance = () => {
  return (
    <div class="gameover-screen">
      <h2 class="gameover-screen__title">Game Over</h2>

      <p class="gameover-screen__score">
        Your score: <span id="final-score">0</span>
      </p>

      <p class="gameover-screen__message">
        Don’t worry, even the best need practice! 🐾 Try again and clean up that
        park!
      </p>

      <button class="gameover-screen__btn" aria-label="Play again">
        Play again
      </button>
    </div>
  );
};
