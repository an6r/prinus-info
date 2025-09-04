'use client';

import { MouseEvent, useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import ScrollToTop from 'react-scroll-up';

import { useTranslation } from 'react-i18next';

import i18nConfig from '@/i18nConfig';
import { useRouter } from 'next/navigation';

function AdditionalNavigation() {
    const [backButtonPath, setBackButtonPath] = useState<string>(
        `/back-icons/back-${i18nConfig.defaultLocale}.svg`
    );
    const [upButtonPath, setUpButtonPath] = useState<string>(
        `/up-icons/up-${i18nConfig.defaultLocale}.svg`
    );
    const { t, i18n } = useTranslation();
    const router = useRouter();

    const onClickBack = (e: MouseEvent) => {
        // Prevent the default behavior of the link + stop propagation
        e.preventDefault();
        e.stopPropagation();
        router.back();
    };

    useEffect(() => {
        setBackButtonPath(`/back-icons/back-${i18n.resolvedLanguage}.svg`);
        setUpButtonPath(`/up-icons/up-${i18n.resolvedLanguage}.svg`);
    }, [i18n.resolvedLanguage]);

    return (
        <nav className="additional-navigation">
            <Link className="back" href="#" onClick={onClickBack}>
                <Image
                    src={backButtonPath}
                    alt={t('back-button')}
                    width={43}
                    height={50}
                />
            </Link>
            <ScrollToTop showUnder={160} style={{ position: 'absolute' }}>
                <Image
                    className="up"
                    src={upButtonPath}
                    alt={t('up-button')}
                    width={50}
                    height={50}
                />
            </ScrollToTop>
        </nav>
    );
}

export default AdditionalNavigation;
