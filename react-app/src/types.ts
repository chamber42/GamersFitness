// Core data types
export interface Food {
    key: string;
    name: string;
    kcal: number;
    protein: number;
    carbs: number;
    fat: number;
    tags?: string[];
    crave?: string[];
    unit?: { whole?: boolean; g: number; one: string; many: string };
    powder?: boolean;
    topping?: boolean;
    macroFriendly?: boolean;
}

export interface Tier {
    id: number;
    name: string;
    min: number;
    max: number;
}

export interface CharacterStats {
    tier: string;
    weight: number;
    goal: 'extreme_loss' | 'loss' | 'maintain' | 'gain';
    activity: 1.25 | 1.4 | 1.6 | 1.8;
    tdee: number;
    targetKcal: number;
    targetProtein: number;
    targetCarbs: number;
    targetFat: number;
}

export interface MacroEntry {
    foodKey: string;
    amount: number;
    kcal: number;
    protein: number;
    carbs: number;
    fat: number;
    date: string;
}

export interface JournalDay {
    date: string;
    entries: MacroEntry[];
}

// Theme types
export interface ThemeColors {
    'bg-0': string;
    'bg-1': string;
    'panel': string;
    'panel-2': string;
    'line': string;
    'cyan': string;
    'green': string;
    'amber': string;
    'red': string;
    'magenta': string;
    'text': string;
    'muted': string;
}

export interface ThemeFonts {
    display: string;
    body: string;
    scale: number;
    spacing: string;
}

export interface ThemeSizes {
    [key: string]: string;
}

export interface ThemeWords {
    tier: string;
    loadout: string;
    quest: string;
    stat: string;
    inventory: string;
    build: string;
    charCreate: string;
    hp: string;
    playstyle: string;
    meals: string;
    tierPick: string;
}

export interface Theme {
    name: string;
    icon: string;
    blurb: string;
    tiers: string[];
    colors: ThemeColors;
    fonts: ThemeFonts;
    sizes: ThemeSizes;
    glow?: string;
    accentSoft: string;
    accentLine: string;
    wash: string;
    sheet: string;
    sheetTitle: string;
    words: ThemeWords;
}

export interface AppState {
    theme: string;
    character: CharacterStats | null;
    journal: JournalDay[];
    savedDate: string;
}
