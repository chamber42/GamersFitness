import { FC } from 'react';
import { Theme } from '../types';

interface MainScreenProps {
    theme: Theme;
    stats: {
        kcal: { current: number; target: number };
        protein: { current: number; target: number };
        carbs: { current: number; target: number };
        fat: { current: number; target: number };
    };
    onAddFood: () => void;
    onViewStats: () => void;
    onSettings: () => void;
}

export const MainScreen: FC<MainScreenProps> = ({ theme, stats, onAddFood, onViewStats, onSettings }) => {
    return (
        <div className="screen active" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-13)', marginBottom: '16px' }}>
                    {theme.sheet}
                </h2>
                <div
                    style={{
                        background: 'var(--panel)',
                        border: '1px solid var(--line)',
                        borderRadius: '8px',
                        padding: '16px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '16px',
                    }}
                >
                    <div>
                        <div style={{ color: 'var(--muted)', fontSize: 'var(--fs-body)', marginBottom: '4px' }}>KCAL</div>
                        <div style={{ fontSize: '24px', color: 'var(--cyan)', fontWeight: 'bold' }}>
                            {stats.kcal.current} / {stats.kcal.target}
                        </div>
                    </div>
                    <div>
                        <div style={{ color: 'var(--muted)', fontSize: 'var(--fs-body)', marginBottom: '4px' }}>PROTEIN</div>
                        <div style={{ fontSize: '24px', color: 'var(--green)', fontWeight: 'bold' }}>
                            {stats.protein.current}g
                        </div>
                    </div>
                    <div>
                        <div style={{ color: 'var(--muted)', fontSize: 'var(--fs-body)', marginBottom: '4px' }}>CARBS</div>
                        <div style={{ fontSize: '24px', color: 'var(--amber)', fontWeight: 'bold' }}>
                            {stats.carbs.current}g
                        </div>
                    </div>
                    <div>
                        <div style={{ color: 'var(--muted)', fontSize: 'var(--fs-body)', marginBottom: '4px' }}>FAT</div>
                        <div style={{ fontSize: '24px', color: 'var(--magenta)', fontWeight: 'bold' }}>
                            {stats.fat.current}g
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button className="btn-primary" onClick={onAddFood}>
                    + Add Food
                </button>
                <button className="btn-ghost" onClick={onViewStats}>
                    View Full Stats
                </button>
                <button className="btn-ghost" onClick={onSettings}>
                    Settings
                </button>
            </div>
        </div>
    );
};
