/** @format */

import { browser } from '$app/env';
import { writable } from 'svelte/store';

// create the custom store that will contain the

type ThemeName = 'dark' | 'light';
export type ThemeDisplay = 'dark' | 'light' | 'fancy' | 'system';

interface Theme {
    theme: ThemeName;
    status: ThemeDisplay;
    fancy: boolean;
}

interface Action {
    type: string;
    payload?: any;
}

interface ThemeReducer {
    (state: Theme, action: Action): Theme;
}

const query = browser && window.matchMedia('(prefers-color-scheme: dark)');
const getSystemTheme = () => (query.matches ? 'dark' : 'light');
const setDocumentState = (state) =>
    browser && document.documentElement.classList.toggle('dark', state === 'dark');

const themeStore = (initalTheme: Theme) => {
    const storageIdentifier = 'pangolicons-theme';
    const storedTheme = browser && JSON.parse(window.localStorage.getItem(storageIdentifier));
    const { set, subscribe, update } = writable(storedTheme || initalTheme);

    const themeReducer: ThemeReducer = (state: Theme, { type, payload }: Action) => {
        switch (type) {
            case 'light':
                return { ...state, theme: 'light', status: 'light' };
            case 'dark':
                return { ...state, theme: 'dark', status: 'dark' };
            case 'system':
                return { ...state, theme: getSystemTheme(), status: 'system' };
            case 'fancy':
                return { ...state, fancy: !state.fancy };
        }
    };

    const dispatch = ({ type, payload }: Action) =>
        update((state) => themeReducer(state, { type, payload }));

    subscribe((state) => {
        setDocumentState(state.theme);
        browser && window.localStorage.setItem(storageIdentifier, JSON.stringify(state));
    });

    return { set, subscribe, update, dispatch };
};

export const theme = themeStore({ theme: getSystemTheme(), status: 'system', fancy: false });
query && query.addEventListener('change', () => theme.dispatch({ type: 'system' }));
