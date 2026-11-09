import { memo } from 'react';

export const UpgradePicker = memo(function UpgradePicker() {
  return (
    <div id="picker" className="hidden">
      <div id="pickerTitle" />
      <div id="pickerSub" />
      <div id="cards" />
    </div>
  );
});
