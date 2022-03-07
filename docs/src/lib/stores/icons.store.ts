/** @format */

import { writable } from 'svelte/store';
import { Pangolicons } from 'pangolicons';

interface Icons {
    search: string;
    readonly count: number;
}

interface IconReducer {
    (state: Icons, action: Action): Icons;
}

const iconStore = (inital: Icons) => {
    const { set, update, subscribe } = writable(inital);

    const iconReducer: IconReducer = (state: Icons, { type, payload }: Action) => {
        switch (type) {
            case 'reset':
                return { ...state, search: '' };
        }
    };

    const dispatch = ({ type, payload }: Action) =>
        update((state) => iconReducer(state, { type, payload }));
    return { set, update, subscribe, dispatch };
};

export const icons = iconStore({ search: '', count: Object.keys(Pangolicons.icons).length });