import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
import defaultTheme from '@/themes/default';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    imports: {
        dirs: ['./stores', './types'],
        presets: [
            {
                from: 'dayjs',
                imports: [
                    {
                        name: 'default',
                        as: 'dayjs',
                    },
                ],
            },
            {
                from: 'lodash',
                imports: [
                    {
                        name: 'default',
                        as: 'lodash',
                    },
                ],
            },
        ],
    },
    css: ['assets/styles/main.scss'],
    modules: ['@nuxt/fonts', '@pinia/nuxt', '@primevue/nuxt-module'],
    primevue: {
        options: {
            theme: {
                preset: definePreset(Aura, defaultTheme),
                options: {
                    prefix: 'p',
                    darkModeSelector: 'system',
                    cssLayer: { name: 'primevue' },
                },
            },
        },
    },
});
