# Loadout - React Refactor

A complete React + TypeScript refactor of the Loadout fitness tracking app.

## Project Structure

```
src/
├── components/        # React components
│   ├── App.tsx       # Main app component
│   ├── HUD.tsx       # Status bar showing macros
│   ├── CharacterCreation.tsx
│   ├── MainScreen.tsx
│   └── ...
├── data/             # Static data
│   ├── themes.ts     # All theme definitions
│   └── foods.ts      # Food database
├── hooks/            # Custom React hooks
│   ├── useAppState.ts
│   └── useTheme.ts
├── utils/            # Utility functions
│   └── calculations.ts
├── styles/
│   └── global.css
├── types.ts          # TypeScript type definitions
└── main.tsx         # Entry point
```

## Setup

```bash
cd react-app
npm install
npm run dev
```

## Key Features

- **Theme System**: 5+ game themes with distinct visual identities
- **Macro Tracking**: Real-time kcal, protein, carbs, fat tracking
- **Character Creation**: Personalized calorie & macro targets
- **Local Storage**: Auto-save all progress
- **Responsive**: Mobile-first design

## Building

```bash
npm run build
```

Output will be in `dist/`.
