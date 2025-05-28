import type { Metadata } from 'next';

import initTranslations from '@/app/i18n';
import { fetchLocaleJsonFromS3 } from '@/utils/s3';

import AboutContent from '@/components/about-content';
import TranslationsProvider from '@/components/translations-provider';

import { AboutContentData } from '@/app/types';

import '@/styles/about.scss';

const i18nNamespaces = ['about'];

export const metadata: Metadata = {
    title: 'About Maria Prinus',
    description: 'Learn more about Maria Prinus, her cats, and this site',
};

export default async function Page({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    const data: AboutContentData = await fetchLocaleJsonFromS3(
        locale,
        'about-me'
    );

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <section className="about-page">
                <h1>{t('about-title')}</h1>

                {data && (
                    <AboutContent
                        data={data}
                        imageAlts={{
                            maria: t('photo-alt-maria'),
                            cats: t('photo-alt-cats'),
                        }}
                    />
                )}
            </section>
        </TranslationsProvider>
    );
}
