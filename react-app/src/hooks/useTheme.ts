import { useMemo } from 'react';
import { Theme } from '../types';
import { THEMES, THEME_MATERIAL } from '../data/themes';

export function useTheme(themeKey: string): { theme: Theme; material: string } {
  return useMemo(() => ({
    theme: THEMES[themeKey] || THEMES.cyberpunk,
    material: THEME_MATERIAL[themeKey] || 'digital',
  }), [themeKey]);
}

export function useThemeStyles(theme: Theme) {
  return useMemo(() => {
    const root = document.documentElement.style;
    return {
      apply: () => {
        Object.entries(theme.colors).forEach(([k, v]) => {
          root.setProperty('--' + k, v);
        });
        root.setProperty('--font-display', theme.fonts.display);
        root.setProperty('--font-body', theme.fonts.body);
        root.setProperty('--display-spacing', theme.fonts.spacing);
        root.setProperty('--title-glow', theme.glow || 'none');
        root.setProperty('--accent-soft', theme.accentSoft);
        root.setProperty('--accent-line', theme.accentLine);
        root.setProperty('--bg-wash', theme.wash);
        Object.entries(theme.sizes || {}).forEach(([k, v]) => {
          root.setProperty('--' + k, v);
        });
        document.body.style.backgroundColor = theme.colors['bg-0'];
        document.body.setAttribute('data-theme', themeKey);
        document.body.setAttribute('data-material', THEME_MATERIAL[themeKey] || 'digital');
      },
    };
  }, [theme]);
}
