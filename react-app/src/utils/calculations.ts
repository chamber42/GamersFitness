import { CharacterStats, AppState } from '../types';
import { GOAL_ADJUST, KCAL_FLOOR, PROTEIN_PER_LB } from './themes';

const TDEE_MULTIPLIER = 1.2; // Harris-Benedict baseline

export function calculateTDEE(weight: number, gender: 'male' | 'female', activity: number): number {
  const base = gender === 'male' ? 1.0 : 0.9;
  return Math.round(weight * 11 * base * activity);
}

export function computeTargets(tdee: number, goal: string, weight: number): {
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
} {
  const adjustment = GOAL_ADJUST[goal as keyof typeof GOAL_ADJUST] || 0;
  const kcal = Math.max(tdee + adjustment, KCAL_FLOOR.male);
  
  const proteinG = weight * 0.45 * (PROTEIN_PER_LB[goal] || 0.9); // lbs to kg, then per-lb calculation
  const fatG = (kcal * 0.25) / 9; // 25% of kcals from fat
  const carbG = (kcal - proteinG * 4 - fatG * 9) / 4;

  return {
    kcal,
    protein: Math.round(proteinG),
    carbs: Math.round(carbG),
    fat: Math.round(fatG),
  };
}

export function createInitialState(theme: string = 'cyberpunk'): AppState {
  return {
    theme,
    character: null,
    journal: [],
    savedDate: new Date().toISOString(),
  };
}

export function saveState(state: AppState): void {
  localStorage.setItem('loadout_state', JSON.stringify(state));
}

export function loadState(): AppState {
  const stored = localStorage.getItem('loadout_state');
  if (!stored) return createInitialState();
  try {
    return JSON.parse(stored);
  } catch {
    return createInitialState();
  }
}
