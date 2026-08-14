import { Food } from '../types';

// Food database - protein sources
export const PROTEIN_FOODS: Food[] = [
  { key: 'chicken', name: 'Chicken Breast (raw)', kcal: 120, protein: 22.5, carbs: 0, fat: 2.6, tags: ['meat', 'poultry'], crave: ['savory', 'spicy', 'grilled'] },
  { key: 'chickthigh', name: 'Chicken Thigh, b/s (raw)', kcal: 119, protein: 19.7, carbs: 0, fat: 4.1, tags: ['meat', 'poultry'], crave: ['savory', 'comfort', 'grilled'] },
  { key: 'turkey', name: 'Turkey Breast (raw)', kcal: 111, protein: 24.1, carbs: 0, fat: 0.7, tags: ['meat', 'poultry'], crave: ['savory', 'grilled', 'light'] },
  { key: 'beef93', name: 'Ground Beef 93/7 (raw)', kcal: 152, protein: 21.2, carbs: 0, fat: 7, tags: ['meat', 'redmeat'], crave: ['savory', 'comfort', 'grilled'] },
  { key: 'salmon', name: 'Salmon, Atlantic (raw)', kcal: 208, protein: 20.4, carbs: 0, fat: 13.4, tags: ['fish'], crave: ['savory', 'grilled'] },
  { key: 'tilapia', name: 'Tilapia (raw)', kcal: 96, protein: 20.1, carbs: 0, fat: 1.7, tags: ['fish'], crave: ['fresh', 'light'] },
  { key: 'wholeegg', name: 'Whole Eggs (raw)', kcal: 143, protein: 12.6, carbs: 0.7, fat: 9.5, tags: ['egg'], crave: ['savory', 'comfort'], unit: { whole: true, g: 50, one: 'egg', many: 'eggs' } },
  { key: 'eggwhites', name: 'Egg Whites (raw)', kcal: 52, protein: 10.9, carbs: 0.7, fat: 0.2, tags: ['egg'], crave: ['light', 'nocook'] },
  { key: 'yogurt0', name: 'Greek Yogurt, 0%', kcal: 59, protein: 10.2, carbs: 3.6, fat: 0.4, tags: ['dairy'], crave: ['sweet', 'creamy', 'nocook'] },
  { key: 'cottage1', name: 'Cottage Cheese, 1%', kcal: 72, protein: 12.4, carbs: 2.7, fat: 1, tags: ['dairy'], crave: ['creamy', 'nocook'] },
  { key: 'mozzarella', name: 'Mozzarella, part-skim', kcal: 254, protein: 24.3, carbs: 2.8, fat: 15.9, tags: ['dairy'], crave: ['savory', 'comfort', 'creamy'] },
];

// Carb sources
export const CARB_FOODS: Food[] = [
  { key: 'rice', name: 'Jasmine Rice (dry)', kcal: 365, protein: 7.1, carbs: 80, fat: 0.7, tags: [], crave: ['comfort', 'warmbowl', 'carbheavy'] },
  { key: 'potato', name: 'White Potato (raw)', kcal: 77, protein: 2, carbs: 17.5, fat: 0.1, tags: ['nightshade'], crave: ['comfort', 'carbheavy'] },
  { key: 'bread', name: 'Whole Wheat Bread', kcal: 247, protein: 13, carbs: 41, fat: 3.4, tags: ['gluten'], crave: ['comfort', 'carbheavy'], unit: { g: 28, one: 'slice', many: 'slices' } },
  { key: 'oats', name: 'Rolled Oats (dry)', kcal: 389, protein: 16.9, carbs: 66.3, fat: 6.9, tags: [], crave: ['sweet', 'creamy', 'comfort', 'warmbowl'] },
  { key: 'banana', name: 'Banana (raw)', kcal: 89, protein: 1.1, carbs: 22.8, fat: 0.3, tags: [], crave: ['sweet', 'nocook'], unit: { soft: true, g: 118, one: 'banana', many: 'bananas' } },
  { key: 'pasta', name: 'Pasta (dry)', kcal: 371, protein: 13, carbs: 74.7, fat: 1.5, tags: ['gluten'], crave: ['comfort', 'carbheavy'] },
  { key: 'sweetpot', name: 'Sweet Potato (raw)', kcal: 86, protein: 1.6, carbs: 20.1, fat: 0.1, tags: [], crave: ['comfort', 'carbheavy'] },
];

// Fat/oil sources
export const FAT_FOODS: Food[] = [
  { key: 'avocado', name: 'Avocado (raw)', kcal: 160, protein: 2, carbs: 9, fat: 15, tags: [], crave: ['creamy', 'fresh'] },
  { key: 'olive_oil', name: 'Olive Oil', kcal: 884, protein: 0, carbs: 0, fat: 100, tags: [], crave: ['savory'] },
  { key: 'almonds', name: 'Almonds (raw)', kcal: 579, protein: 21, carbs: 22, fat: 50, tags: ['nuts'], crave: ['crunchy', 'sweet'] },
];

export const ALL_FOODS = [...PROTEIN_FOODS, ...CARB_FOODS, ...FAT_FOODS];

export function getFoodByKey(key: string): Food | undefined {
  return ALL_FOODS.find(f => f.key === key);
}

export function searchFoods(list: Food[], query: string): Food[] {
  if (!query.trim()) return list;
  const q = query.toLowerCase();
  return list.filter(f => f.name.toLowerCase().includes(q));
}
