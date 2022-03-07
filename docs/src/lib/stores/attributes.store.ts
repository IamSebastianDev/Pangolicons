/** @format */

import { writable, get, derived } from 'svelte/store';
import { theme } from './theme.store';

export const size = writable(24);
export const strokeWidth = writable(1.5);
export const color = writable(get(theme).theme === 'light' ? '#3f3f46' : '#f4f4f5');
export const stroke = derived([theme, color], ([{ theme }, color]) => {
    if (color && color !== (theme === 'dark' ? '#3f3f46' : '#f4f4f5')) {
        return color;
    }
    return theme === 'light' ? '#3f3f46' : '#f4f4f5';
});
