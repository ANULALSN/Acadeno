import { create } from 'zustand';

export type IntroPhase = 'init' | 'forming' | 'formed' | 'dispersing' | 'idle';

interface IntroState {
    phase: IntroPhase;
    setPhase: (phase: IntroPhase) => void;
}

export const useIntroStore = create<IntroState>((set) => ({
    phase: 'init',
    setPhase: (phase) => set({ phase }),
}));
