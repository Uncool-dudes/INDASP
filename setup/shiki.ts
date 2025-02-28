/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types';

export default defineShikiSetup( () => {
    return {
        themes: {
            dark: 'houston',
            light: 'min-light',
        },
        transformers: [
            // ...
        ],
    };
} );
