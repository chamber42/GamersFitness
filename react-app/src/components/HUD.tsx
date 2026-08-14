import React, { FC } from 'react';
import { Theme } from '../types';

interface HUDProps {
  theme: Theme;
  kcal: { current: number; target: number };
  protein: { current: number; target: number };
  carbs: { current: number; target: number };
  fat: { current: number; target: number };
  fiber: { current: number; target: number };
  sodium: number;
}

export const HUD: FC<HUDProps> = ({ theme, kcal, protein, carbs, fat, fiber, sodium }) => {
  const kcalPct = Math.min((kcal.current / kcal.target) * 100, 100);
  const proteinPct = Math.min((protein.current / protein.target) * 100, 100);
  const carbsPct = Math.min((carbs.current / carbs.target) * 100, 100);
  const fatPct = Math.min((fat.current / fat.target) * 100, 100);

  return (
    <div className="hud" aria-live="polite">
      <div className="hud-top">
        <span className="lvbadge">LV.1</span>
        <span>{theme.sheetTitle}</span>
        <span className="kcal-readout">
          {kcal.current} / {kcal.target} kcal
        </span>
      </div>
      <div className="bar-row">
        <span className="bar-label">KCAL</span>
        <div className="bar-track">
          <div className="bar-fill kcal" style={{ width: `${kcalPct}%` }}></div>
          <span className="bar-num">
            {kcal.current} / {kcal.target}
          </span>
        </div>
        <span className="bar-val">{Math.max(0, kcal.target - kcal.current)} left</span>
      </div>
      <div className="bar-row">
        <span className="bar-label">PROT</span>
        <div className="bar-track">
          <div className="bar-fill protein" style={{ width: `${proteinPct}%` }}></div>
          <span className="bar-num">
            {protein.current}g / {protein.target}g
          </span>
        </div>
        <span className="bar-val">{Math.max(0, protein.target - protein.current)}g left</span>
      </div>
      <div className="bar-row">
        <span className="bar-label">CARB</span>
        <div className="bar-track">
          <div className="bar-fill carbs" style={{ width: `${carbsPct}%` }}></div>
          <span className="bar-num">
            {carbs.current}g / {carbs.target}g
          </span>
        </div>
        <span className="bar-val">{Math.max(0, carbs.target - carbs.current)}g left</span>
      </div>
      <div className="bar-row">
        <span className="bar-label">FAT</span>
        <div className="bar-track">
          <div className="bar-fill fat" style={{ width: `${fatPct}%` }}></div>
          <span className="bar-num">
            {fat.current}g / {fat.target}g
          </span>
        </div>
        <span className="bar-val">{Math.max(0, fat.target - fat.current)}g left</span>
      </div>
      <div className="micro-row">
        <span>FIBER {fiber.current}g / {fiber.target}g</span>
        <span>SODIUM {sodium}mg</span>
      </div>
    </div>
  );
};
