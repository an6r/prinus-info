import { Metadata } from 'next';
import { LocaleType } from '@/app/types';
import i18nConfig from '@/i18nConfig';

const defaultMetadata: Metadata = {
    metadataBase: new URL('https://prinus.info'),
    authors: [{ name: 'Maria Prinus', url: 'https://prinus.info' }],
    alternates: {
        canonical: '/',
        languages: i18nConfig.metadataAlternateLanguages,
    },
    openGraph: {
        type: 'website',
        siteName: 'Prinus.info',
        emails: 'maria@prinus.info',
        alternateLocale: i18nConfig.ogAlternateLocales,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export function createMetadata({
    title,
    description,
    keywords,
    locale,
}: {
    title: string;
    description: string;
    keywords: string;
    locale: LocaleType;
}): Metadata {
    return {
        ...defaultMetadata,
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            locale: i18nConfig.defaultLocales[locale],
        },
    };
}
