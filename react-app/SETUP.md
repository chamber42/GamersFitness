# Loadout React App - Setup & Start Guide

## Prerequisites

You need **Node.js 18+** installed. Download from [nodejs.org](https://nodejs.org)

## Quick Start (30 seconds)

```bash
cd react-app
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## What's Built

✅ **Complete React + TypeScript scaffold** with:
- Vite for fast dev server
- Full TypeScript support
- 5 game themes (Cyberpunk, Fantasy, FPS, Survival, Farm)
- Theme system with CSS variables
- Character creation flow
- HUD with macro tracking
- Local storage persistence
- All data extracted from original HTML

## Project Structure

```
react-app/
├── src/
│   ├── components/        ← React components
│   ├── data/             ← Themes & foods database
│   ├── hooks/            ← Custom React hooks
│   ├── utils/            ← Calculations & helpers
│   ├── styles/           ← Global CSS
│   ├── types.ts          ← TypeScript types
│   ├── App.tsx           ← Main app
│   └── main.tsx          ← Entry point
├── package.json
├── vite.config.ts
├── tsconfig.json
└── index.html

```

## Next Steps After Running

1. **Character Creation**: The app starts with character creation screen
   - Select gender → weight → goal → activity level
   - This calculates personalized calorie targets

2. **Main Screen**: Shows macro progress bars
   - Add food → View stats → Settings buttons

3. **Customize**: 
   - Theme switching in settings (5 themes available)
   - Add more foods to the database in `src/data/foods.ts`
   - Extend components as needed

## Building for Production

```bash
npm run build
```

Output goes to `dist/` — ready to deploy.

## Testing Checklist

- [ ] Character creation works
- [ ] Macro targets calculated correctly
- [ ] HUD displays with proper styling
- [ ] Theme colors apply to root element
- [ ] Local storage saves progress
- [ ] Responsive on mobile

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Lightning-fast dev server
- **CSS Variables** - Dynamic theming

## Key Differences from Original

| Original | React Version |
|----------|---------------|
| 1.2 MB single HTML file | Modular components |
| Embedded CSS & inline JS | Separated concerns |
| Global variables | React state + hooks |
| Hardcoded themes | Extractable theme data |
| No build step | Vite build pipeline |

All functionality is **decoupled and testable**.

---

**Status**: Foundation complete. Core features ready to expand.
Need to add: Food search modal, journal entries, detailed stats view.
