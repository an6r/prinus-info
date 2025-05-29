import { Metadata } from 'next';

import initTranslations from '@/app/i18n';
import { PageProps } from '@/app/types';

import { createMetadata } from '@/utils/metadata';

import Hero from '@/components/hero';
import TranslationsProvider from '@/components/translations-provider';

const i18nNamespaces = ['home'];

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const { t } = await initTranslations(locale, i18nNamespaces);

    return createMetadata({
        title: t('meta-title'),
        description: t('meta-description'),
        keywords: t('meta-keywords'),
        locale,
    });
}

export default async function Home({ params }: PageProps) {
    const { locale } = await params;
    const { resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <Hero />
            {/*<BlogItems/>*/}
        </TranslationsProvider>
    );
}
