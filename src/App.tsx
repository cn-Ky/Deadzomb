import { useEffect } from 'react';
import { createGame } from './game/engine';
import { Hud } from './components/Hud';
import { UpgradePicker } from './components/UpgradePicker';
import { TitleMenu } from './components/TitleMenu';
import { PauseMenu, DeathMenu } from './components/Overlays';
import { Crosshair } from './components/Crosshair';

export default function App() {
  useEffect(() => {
    // Bileşenler DOM'a basıldıktan sonra motoru başlat; sökülürken temizle.
    const dispose = createGame();
    return dispose;
  }, []);

  return (
    <>
      <canvas id="game" />
      <Hud />
      <div id="flash" />
      <UpgradePicker />
      <TitleMenu />
      <div id="fadeIn" />
      <PauseMenu />
      <DeathMenu />
      <Crosshair />
    </>
  );
}
