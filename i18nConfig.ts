import { Config } from 'next-i18n-router/dist/types';

interface I18nConfig extends Config {
    metadataAlternateLanguages: Record<string, string>;
    ogAlternateLocales: string[];
    defaultLocales: Record<string, string>;
}

const i18nConfig: I18nConfig = {
    defaultLocale: 'en',
    locales: ['en', 'by', 'ru'] as const,
    defaultLocales: {
        by: 'be_BY',
        en: 'en_US',
        ru: 'ru_RU',
    },
    metadataAlternateLanguages: {
        'en-US': '/',
        'ru-RU': '/ru',
        'be-BY': '/by',
    },
    ogAlternateLocales: ['be_BY', 'en_US', 'ru_RU'],
};

export default i18nConfig;
