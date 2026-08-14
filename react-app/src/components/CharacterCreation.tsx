import { FC, useState } from 'react';
import { Theme } from '../types';

interface CharacterCreationProps {
    theme: Theme;
    onComplete: (stats: any) => void;
}

export const CharacterCreation: FC<CharacterCreationProps> = ({ theme, onComplete }) => {
    const [step, setStep] = useState(1);
    const [weight, setWeight] = useState('180');
    const [goal, setGoal] = useState('maintain');
    const [activity, setActivity] = useState(1.6);
    const [gender, setGender] = useState('male');

    const handleComplete = () => {
        onComplete({
            weight: parseFloat(weight),
            goal,
            activity,
            gender,
        });
    };

    return (
        <div className="screen active">
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-18)', marginBottom: '24px' }}>
                    {theme.words.charCreate}
                </h1>

                {step === 1 && (
                    <div>
                        <p>Gender</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                            <button
                                onClick={() => setGender('male')}
                                style={{
                                    background: gender === 'male' ? 'var(--cyan)' : 'var(--panel)',
                                    color: gender === 'male' ? 'var(--bg-0)' : 'var(--text)',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: `1px solid var(--line)`,
                                }}
                            >
                                Male
                            </button>
                            <button
                                onClick={() => setGender('female')}
                                style={{
                                    background: gender === 'female' ? 'var(--cyan)' : 'var(--panel)',
                                    color: gender === 'female' ? 'var(--bg-0)' : 'var(--text)',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: `1px solid var(--line)`,
                                }}
                            >
                                Female
                            </button>
                        </div>
                        <input
                            type="number"
                            placeholder="Weight (lbs)"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px',
                                marginBottom: '12px',
                                background: 'var(--panel-2)',
                                color: 'var(--text)',
                                border: '1px solid var(--line)',
                                borderRadius: '8px',
                                fontSize: 'var(--fs-body)',
                            }}
                        />
                        <button className="btn-primary" onClick={() => setStep(2)}>
                            Next
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <p>Goal</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                            {[
                                { value: 'extreme_loss', label: 'Extreme Fat Loss (−1000/day)' },
                                { value: 'loss', label: 'Fat Loss (−500/day)' },
                                { value: 'maintain', label: 'Maintenance' },
                                { value: 'gain', label: 'Muscle Gain (+300/day)' },
                            ].map((opt) => (
                                <button
                                    key={opt.value}
                                    onClick={() => setGoal(opt.value)}
                                    style={{
                                        background: goal === opt.value ? 'var(--cyan)' : 'var(--panel)',
                                        color: goal === opt.value ? 'var(--bg-0)' : 'var(--text)',
                                        padding: '12px',
                                        borderRadius: '8px',
                                        border: `1px solid var(--line)`,
                                    }}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                        <button className="btn-primary" onClick={() => setStep(3)}>
                            Next
                        </button>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <p>Activity Level</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                            {[
                                { value: 1.25, label: 'Desk job' },
                                { value: 1.4, label: 'Lightly active' },
                                { value: 1.6, label: 'Active' },
                                { value: 1.8, label: 'Very active' },
                            ].map((opt) => (
                                <button
                                    key={opt.value}
                                    onClick={() => setActivity(opt.value)}
                                    style={{
                                        background: activity === opt.value ? 'var(--green)' : 'var(--panel)',
                                        color: activity === opt.value ? 'var(--bg-0)' : 'var(--text)',
                                        padding: '12px',
                                        borderRadius: '8px',
                                        border: `1px solid var(--line)`,
                                    }}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                        <button className="btn-primary" onClick={handleComplete}>
                            Create Character
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
