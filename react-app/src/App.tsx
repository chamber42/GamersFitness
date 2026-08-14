import React, { FC, useState, useEffect } from 'react';
import './../../styles/global.css';
import { useAppState } from '../hooks/useAppState';
import { useTheme, useThemeStyles } from '../hooks/useTheme';
import { HUD } from './HUD';
import { CharacterCreation } from './CharacterCreation';
import { MainScreen } from './MainScreen';
import { calculateTDEE, computeTargets } from '../utils/calculations';

export const App: FC = () => {
  const { state, updateState, setTheme } = useAppState();
  const { theme } = useTheme(state.theme);
  const themeStyles = useThemeStyles(theme);

  useEffect(() => {
    themeStyles.apply();
  }, [theme, themeStyles]);

  const [stats, setStats] = useState({ kcal: { current: 0, target: 2250 }, protein: { current: 0, target: 150 }, carbs: { current: 0, target: 280 }, fat: { current: 0, target: 60 } });
  const [showCharacterCreation, setShowCharacterCreation] = useState(!state.character);

  const handleCharacterCreated = (charStats: any) => {
    const tdee = calculateTDEE(charStats.weight, charStats.gender, charStats.activity);
    const targets = computeTargets(tdee, charStats.goal, charStats.weight);

    const character = {
      ...charStats,
      tdee,
      targetKcal: targets.kcal,
      targetProtein: targets.protein,
      targetCarbs: targets.carbs,
      targetFat: targets.fat,
    };

    updateState({ ...state, character });
    setShowCharacterCreation(false);
    setStats({
      kcal: { current: 0, target: targets.kcal },
      protein: { current: 0, target: targets.protein },
      carbs: { current: 0, target: targets.carbs },
      fat: { current: 0, target: targets.fat },
    });
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {state.character && <HUD theme={theme} kcal={stats.kcal} protein={stats.protein} carbs={stats.carbs} fat={stats.fat} fiber={{ current: 0, target: 25 }} sodium={2300} />}

      {showCharacterCreation ? (
        <CharacterCreation theme={theme} onComplete={handleCharacterCreated} />
      ) : (
        <MainScreen
          theme={theme}
          stats={stats}
          onAddFood={() => console.log('Add food')}
          onViewStats={() => console.log('View stats')}
          onSettings={() => console.log('Settings')}
        />
      )}
    </div>
  );
};
