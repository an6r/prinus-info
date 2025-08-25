import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import { CompanyItemProps, PageProps } from '@/app/types';
import initTranslations from '@/app/i18n';
import { getEducation, getWorkExperience } from '@/app/experience';

import { createMetadata } from '@/utils/metadata';

import CompanyItem from '@/components/company-item';
import TranslationsProvider from '@/components/translations-provider';

import '@/styles/resume.scss';

const i18nNamespaces = ['timeline'];

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
                            href="/documents/Maria_Prinus_Release_Manager.pdf"
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
                {resumeData.map((entry: CompanyItemProps, key: number) => (
                    <CompanyItem {...entry} key={key} />
                ))}

                <h2>{t('header-education')}</h2>
                <CompanyItem {...educationData} />
            </section>
        </TranslationsProvider>
    );
}
