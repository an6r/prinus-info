'use client';

import i18nConfig from '@/i18nConfig';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';

import Link from 'next/link';

function Menu() {
    const { t, i18n } = useTranslation();
    const currentPathname = usePathname();
    const currentLocale = i18n.resolvedLanguage || i18nConfig.defaultLocale;

    const isActive = (pathname: string) => {
        return `/${currentLocale}${pathname}` === currentPathname;
    };

    const menuItems = [
        {
            href: '/',
            text: t('home'),
            className: 'home',
        },
        {
            href: '/about',
            text: t('about-me'),
            className: 'story',
        },
        {
            href: '/genealogy',
            text: 'genealogy',
            className: 'genealogy',
        },
        {
            href: '/resume',
            text: t('resume'),
            className: 'resume',
        },
        {
            href: '/contacts',
            text: t('contacts'),
            className: 'contacts',
        },
    ];

    return (
        <nav className="nav" role="navigation" aria-label="Main">
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.href}
                            className={
                                item.className +
                                (isActive(item.href) ? ' active' : '')
                            }
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;
