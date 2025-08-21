import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import initTranslations from '@/app/i18n';
import { PageProps } from '@/app/types';

import { createMetadata } from '@/utils/metadata';

import TranslationsProvider from '@/components/translations-provider';

import '@/styles/contacts.scss';

const i18nNamespaces = ['contacts'];

/*const FormHandler = () => {
    return (
        <form action="/contacts" method="post">
        <div className="input-item">
            <label htmlFor="name">Your Name</label>
            <input id="name" name="name" type="text" />
        </div>
        <div className="input-item">
            <label htmlFor="email">Your Email*</label>
            <input required id="email" name="email" type="email" />
        </div>
        <div className="input-item">
            <label htmlFor="message">Message*</label>
            <textarea required id="message" name="message" rows={5} />
        </div>

        <div className="buttons">
            <button type="submit" className="submit">
                Send Message
            </button>
        </div>
    </form>
    );
};*/

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

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <section className="contacts-container">
                <h1>{t('contacts-title')}</h1>
                <p className="introduction">{t('contacts-intro')}</p>
                <ul className="list-of-contacts">
                    <li className="email">
                        <Image
                            src="/icons8-email.png"
                            alt={t('contacts-icons-email')}
                            width={40}
                            height={40}
                        />
                        <span>{t('contacts-text-email')}:</span>
                    </li>
                    <li>
                        <Link href="mailto:maria@prinus.info">
                            maria@prinus.info
                        </Link>
                    </li>
                    <li className="linkedin">
                        <Image
                            src="/icons8-linkedin.png"
                            alt={t('contacts-icons-linkedin')}
                            width={40}
                            height={40}
                        />
                        <span>LinkedIn:</span>
                    </li>
                    <li>
                        <Link
                            href="https://www.linkedin.com/in/mariaprinus/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            linkedin.com/in/mariaprinus
                        </Link>
                    </li>
                    <li className="instagram">
                        <Image
                            src="/icons8-instagram.png"
                            alt={t('contacts-icons-instagram')}
                            width={40}
                            height={40}
                        />
                        <span>Instagram ({t('contacts-text-personal')}):</span>
                    </li>
                    <li>
                        <Link
                            href="https://www.instagram.com/an6r"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @an6r
                        </Link>
                    </li>
                    <li className="instagram cat">
                        <Image
                            src="/icons8-instagram.png"
                            alt={t('contacts-icons-instagram')}
                            width={40}
                            height={40}
                        />
                        <span>Instagram ({t('contacts-text-cats')}):</span>
                    </li>
                    <li>
                        <Link
                            href="https://www.instagram.com/linusandsophieandtoby/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @linusandsophieandtoby
                        </Link>
                    </li>
                </ul>

                {/*}
                <h3>Or send me a message right here</h3>

                <FormHandler />*/}
            </section>
        </TranslationsProvider>
    );
}
