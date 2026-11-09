import { memo } from 'react';

// Dinamik içerik (can, şarjör, sayaçlar) motor tarafından id'lerle güncellenir;
// bu yüzden bileşen hiç yeniden çizilmez.
export const Hud = memo(function Hud() {
  return (
    <div id="hud">
      <div id="topbar">
        <div>
          <div className="stat"><span className="label">DALGA</span> <span id="waveNum">1</span></div>
          <div id="health" />
          <div id="powerups" />
        </div>
        <div className="stat" style={{ textAlign: 'right' }}>
          <span className="label">ÖLDÜRME</span> <span id="kills">0</span><br />
          <span className="label" id="zleft" />
        </div>
      </div>

      <div id="ammoWrap">
        <div id="mag" />
        <div id="reloadBar"><div id="reloadFill" /></div>
        <div id="reloadHint">[R] ŞARJÖR</div>
      </div>

      <div id="banner"><span id="bannerText" /><span id="bannerSub" /></div>
      <div id="toast" />
    </div>
  );
});
