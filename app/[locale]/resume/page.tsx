import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import '@/styles/resume.scss';

import initTranslations from '@/app/i18n';
import { getEducation, getWorkExperience } from '@/app/experience';

import CompanyItem from '@/components/company-item';
import TranslationsProvider from '@/components/translations-provider';

export const metadata: Metadata = {
    title: 'Resume of Maria Prinus',
    description:
        'This page contains details about Maria Prinus employment and education',
};

const i18nNamespaces = ['timeline'];

export default async function Page({
    params,
}: {
    params: Promise<{ locale: 'en' | 'by' | 'ru' }>;
}) {
    const { locale } = await params;
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    const resumeData = await getWorkExperience(locale);
    const educationData = await getEducation(locale);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <section className="resume-container">
                <h1>{t('resume-title')}</h1>
                <section className="resume-intro">
                    <div className="introduction">
                        {Array.from(Array(4), (el, i) => {
                            return <p key={i}>{t('introduction.p' + i)}</p>;
                        })}
                    </div>
                    <div className="pdf-download">
                        <Link
                            href="/documents/Maria+Prinus+Release+Manager.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/icons8-pdf.png"
                                alt={t('image-download-resume')}
                                width={90}
                                height={90}
                            />
                            <span>{t('text-download-resume')}</span>
                        </Link>
                    </div>
                </section>

                <h2>{t('header-work-experience')}</h2>
                {resumeData.map((entry, key) => (
                    <CompanyItem {...entry} key={key} />
                ))}

                <h2>{t('header-education')}</h2>
                <CompanyItem {...educationData} />
            </section>
        </TranslationsProvider>
    );
}
