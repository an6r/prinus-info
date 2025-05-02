import { MouseEvent } from 'react';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';
import Image from 'next/image';

import i18nConfig from '@/i18nConfig';
import { setLocaleCookie, getLocalizedPath } from '@/utils/localization';

const LanguageFlag = ({ locale }: { locale: string }) => {
    const { i18n } = useTranslation();
    const currentLocale = i18n.resolvedLanguage || i18nConfig.defaultLocale;
    const router = useRouter();
    const currentPathname = usePathname();

    const src = `/langs/${locale}.png`;
    const alt = locale.toUpperCase();

    const handleLanguageChange = (e: MouseEvent, newLocale: string) => {
        // Prevent the default behavior of the link + stop propagation
        e.preventDefault();
        e.stopPropagation();

        setLocaleCookie(newLocale);

        const newPath = getLocalizedPath(
            currentPathname,
            currentLocale,
            newLocale
        );

        router.push(newPath);
        router.refresh();
    };

    return (
        <Link
            href={`/${locale}`}
            onClick={(e) => handleLanguageChange(e, locale)}
        >
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

export default LanguageFlag;
