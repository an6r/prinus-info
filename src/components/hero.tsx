'use client';

import { useTranslation } from 'react-i18next';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <Image
                src="/photos/maria-prinus-hero.jpg"
                width={200}
                height={200}
                alt={t('photo')}
                className="hero-photo"
            />
            <div className="intro">
                <h1>{t('greeting')}</h1>
                <p>{t('greeting-text')}</p>
                <div className="buttons">
                    <Link href="/resume" className="btn">
                        {t('resume-button')}
                    </Link>
                    <Link href="/contacts" className="btn secondary">
                        {t('contacts-button')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
