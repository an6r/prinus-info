import initTranslations from '@/app/i18n';

import Hero from '@/components/hero';
import TranslationsProvider from '@/components/translations-provider';

const i18nNamespaces = ['home'];

export default async function Home({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
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
