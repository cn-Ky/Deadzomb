import { memo } from 'react';

// Fare imlecinin yerine geçen nişangah. Konum, boşluk ve şarjör halkası motor tarafından güncellenir.
export const Crosshair = memo(function Crosshair() {
  return (
    <div id="crosshair" aria-hidden="true">
      <i className="xh-t xh-up" />
      <i className="xh-t xh-down" />
      <i className="xh-t xh-left" />
      <i className="xh-t xh-right" />
      <i className="xh-dot" />
      <svg className="xh-ring" viewBox="0 0 44 44">
        <circle id="xhRing" cx="22" cy="22" r="18" fill="none" strokeWidth="3" strokeDasharray="113.1" strokeDashoffset="113.1" transform="rotate(-90 22 22)" />
      </svg>
    </div>
  );
});
