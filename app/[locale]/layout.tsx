// @ts-check

import type { Metadata } from 'next';

import { Amplify } from 'aws-amplify';

import '@/styles/main.scss';

import TranslationsProvider from '@/components/translations-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';

import i18nConfig from '@/i18nConfig';

import outputs from '@/amplify_outputs.json';

import initTranslations from '../i18n';

export const metadata: Metadata = {
    title: 'Personal Site of Maria Prinus',
    description: 'Personal Site of Maria Prinus',
};

Amplify.configure(outputs);

export function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ['layout'];

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    const { resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <html lang={locale}>
            <body>
                <div className="wrapper">
                    <TranslationsProvider
                        namespaces={i18nNamespaces}
                        locale={locale}
                        resources={resources}
                    >
                        <Header />
                        <main className="main-section">{children}</main>
                        <Footer />
                    </TranslationsProvider>
                </div>
            </body>
        </html>
    );
}
