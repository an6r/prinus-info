import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import initTranslations from '@/app/i18n';
import { fetchLocaleJsonFromS3 } from '@/utils/s3Data';

import AboutContent from '@/components/about-content';
import TranslationsProvider from '@/components/translations-provider';

import { AboutContentData, PageProps } from '@/app/types';

import '@/styles/about.scss';
import { createMetadata } from '@/utils/metadata';

const i18nNamespaces = ['about'];

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

export default async function Page({ params }: PageProps) {
    const { locale } = await params;
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    try {
        const { data } = await fetchLocaleJsonFromS3<AboutContentData>(
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
    } catch (e) {
        console.error(e);
        return notFound();
    }
}
