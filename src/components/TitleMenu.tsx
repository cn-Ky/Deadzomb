import { memo } from 'react';

const Key = ({ children, wide }: { children: string; wide?: boolean }) => (
  <kbd className={wide ? 'wide' : undefined}>{children}</kbd>
);

const Row = ({ keys, label, note }: { keys: string[]; label: string; note?: string }) => (
  <div className="crow">
    <span className="caps">{keys.map(k => <Key key={k} wide={k.length > 1}>{k}</Key>)}</span>
    <b>{label}</b>
    {note && <em>{note}</em>}
  </div>
);

export const TitleMenu = memo(function TitleMenu() {
  return (
    <div id="menu" className="splash">
      <div id="menuShade" />
      <div id="menuCol">
        <div id="title">
          <div id="titleTop" className="distressed">TÜM UMUTLARI BIRAK</div>
          <div id="titleMain" className="distressed">DEDZOMB</div>
        </div>
        <div id="pressAny">DEVAM İÇİN BİR TUŞA BAS</div>
        <nav id="menuList">
          <div id="menuMarker" />
          <button data-act="play"><i>01</i><span>OYNA</span></button>
          <button data-act="how"><i>02</i><span>NASIL OYNANIR</span></button>
          <button data-act="settings"><i>03</i><span>AYARLAR</span></button>
        </nav>
      </div>

      <section id="howPanel" className="mpanel">
        <h2>NASIL OYNANIR</h2>
        <div className="mrows">
          <Row keys={['W', 'A', 'S', 'D']} label="HAREKET" />
          <Row keys={['FARE']} label="NİŞAN AL" />
          <Row keys={['TIK']} label="ATEŞ ET" note="basılı tut: sürekli ateş" />
          <Row keys={['R']} label="ŞARJÖR DEĞİŞTİR" />
          <Row keys={['C']} label="KAMERA AÇISI" note="DENGELİ · YÜKSEK · YAKIN" />
          <Row keys={['ESC']} label="DURAKLAT" />
          <Row keys={['M']} label="SESİ KAPAT" />
        </div>
      </section>

      <section id="settingsPanel" className="mpanel">
        <h2>AYARLAR</h2>
        <div className="mrows" id="settingRows">
          <div className="srow" data-key="master"><b>ANA SES</b><span className="meter" /><em /></div>
          <div className="srow" data-key="music"><b>MÜZİK SESİ</b><span className="meter" /><em /></div>
          <div className="srow" data-key="shake"><b>EKRAN SARSINTISI</b><span className="toggle" /><em /></div>
          <div className="srow" data-key="cam"><b>KAMERA AÇISI</b><span className="toggle" /><em /></div>
        </div>
      </section>

      <div id="menuFoot">
        <div id="bestRun" />
        <div id="menuHints" />
      </div>
    </div>
  );
});
