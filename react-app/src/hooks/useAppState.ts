import { useCallback, useState } from 'react';
import { AppState } from '../types';
import { createInitialState, loadState, saveState } from '../utils/calculations';

export function useAppState() {
    const [state, setState] = useState<AppState>(() => loadState());

    const updateState = useCallback((newState: AppState) => {
        setState(newState);
        saveState(newState);
    }, []);

    const setTheme = useCallback((theme: string) => {
        updateState({ ...state, theme });
    }, [state, updateState]);

    const reset = useCallback(() => {
        const initial = createInitialState(state.theme);
        updateState(initial);
    }, [state.theme, updateState]);

    return {
        state,
        updateState,
        setTheme,
        reset,
    };
}
