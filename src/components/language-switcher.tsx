'use client';

import { MouseEvent } from 'react';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';
import Image from 'next/image';

import i18nConfig from '@/i18nConfig';

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleClick = (e: MouseEvent, locale: string) => {
        // Prevent click
        e.stopPropagation();

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`;

        // redirect to the new locale path
        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + locale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${locale}`)
            );
        }

        router.refresh();
    };

    return (
        <div className="lang-switcher">
            <ul>
                {i18nConfig.locales.map((locale, key) => {
                    const src = '/langs/' + locale + '.png';
                    const alt = locale.toUpperCase();

                    return (
                        <li key={key}>
                            <Link
                                href={'/' + locale}
                                onClick={(e: MouseEvent) =>
                                    handleClick(e, locale)
                                }
                            >
                                <Image
                                    src={src}
                                    alt={alt}
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
