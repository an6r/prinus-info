'use client';

import { MouseEvent } from 'react';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';
import Image from 'next/image';

import i18nConfig from '@/i18nConfig';

type LocaleConfig = {
    cookieName: string;
    cookieExpireDays: number;
};

const localeConfig: LocaleConfig = {
    cookieName: 'NEXT_LOCALE',
    cookieExpireDays: 30,
};

interface FlagProps {
    locale: string;
    onClick: (e: MouseEvent) => void;
    currentLocale?: string;
}

const LanguageFlag = ({ locale, onClick, currentLocale }: FlagProps) => {
    const src = `/langs/${locale}.png`;
    const alt = locale.toUpperCase();

    return (
        <Link href={`/${locale}`} onClick={onClick}>
            <Image
                className={locale === currentLocale ? 'active' : ''}
                src={src}
                alt={alt}
                width={24}
                height={24}
            />
        </Link>
    );
};

const setLocaleCookie = (locale: string) => {
    const date = new Date();
    date.setTime(
        date.getTime() + localeConfig.cookieExpireDays * 24 * 60 * 60 * 1000
    );
    document.cookie = `${localeConfig.cookieName}=${locale};expires=${date.toUTCString()};path=/`;
};

const getLocalizedPath = (
    currentPathname: string,
    currentLocale: string,
    newLocale: string
): string => {
    if (
        currentLocale === i18nConfig.defaultLocale &&
        !i18nConfig.prefixDefault
    ) {
        return `/${newLocale}${currentPathname}`;
    }
    return currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);
};

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.resolvedLanguage || i18nConfig.defaultLocale;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleLanguageChange = (e: MouseEvent, locale: string) => {
        e.stopPropagation();
        setLocaleCookie(locale);

        const newPath = getLocalizedPath(
            currentPathname,
            currentLocale,
            locale
        );
        router.push(newPath);
        router.refresh();
    };

    return (
        <div className="lang-switcher">
            <ul>
                {i18nConfig.locales.map((locale, index) => (
                    <li key={index}>
                        <LanguageFlag
                            locale={locale}
                            currentLocale={currentLocale}
                            onClick={(e) => handleLanguageChange(e, locale)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
