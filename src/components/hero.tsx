'use client';

import { useTranslation } from 'react-i18next';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <h1>{t('greeting')}</h1>
            <Image
                src="/photos/maria-prinus-hero.jpg"
                width={200}
                height={200}
                alt={t('photo')}
                className="photo"
            />
            <p className="text">{t('greeting-text')}</p>
            <div className="buttons">
                <Link href="/resume" className="btn">
                    {t('resume-button')}
                </Link>
                <Link href="/contacts" className="btn-solid">
                    {t('contacts-button')}
                </Link>
            </div>
        </section>
    );
};

export default Hero;
