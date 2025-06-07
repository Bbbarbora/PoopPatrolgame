import "./TopBar.css";

export const TopBar = () => {
  return (
    <div className="topBar">
      <button className="start-screen__info-btn" aria-label="Game information">
        <img
          src="imgs/info.png"
          alt="Info icon"
          className="start-screen__info-icon"
        />
      </button>

      <button
        className="start-screen__language-btn"
        aria-label="Change language"
      >
        <img
          src="imgs/convert.png"
          alt="Language icon"
          className="start-screen__language-icon"
        />
      </button>
    </div>
  );
};
