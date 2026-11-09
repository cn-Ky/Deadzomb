import { memo } from 'react';

export const PauseMenu = memo(function PauseMenu() {
  return (
    <div id="pause" className="overlay hidden">
      <div id="pauseTitle" className="distressed">DURAKLATILDI</div>
      <div id="pauseStat" />
      <div id="pauseMenu" className="vmenu">
        <button id="resumeBtn">DEVAM ET</button>
        <button id="quitBtn">ANA MENÜYE DÖN</button>
      </div>
      <div className="sub" style={{ marginTop: 28 }}><span className="key">ESC</span> devam et</div>
    </div>
  );
});

export const DeathMenu = memo(function DeathMenu() {
  return (
    <div id="death" className="overlay hidden">
      <div id="deathTitle" className="distressed">ÖLDÜN</div>
      <div id="deathStat" />
      <div id="deathBest" />
      <div id="deathMenu" className="vmenu">
        <button id="retryBtn">TEKRAR DENE</button>
        <button id="deathQuitBtn">ANA MENÜ</button>
      </div>
    </div>
  );
});
