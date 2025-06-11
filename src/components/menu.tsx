'use client';

import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';

import Link from 'next/link';

import { isActiveMenuItem } from '@/utils/localization';

function Menu() {
    const { t, i18n } = useTranslation();
    const pathname = usePathname();
    const linksList = [
        {
            href: '/',
            textId: 'home',
        },
        {
            href: '/about',
            textId: 'about-me',
        },
        {
            href: '/resume',
            textId: 'resume',
        },
        {
            href: '/contacts',
            textId: 'contacts',
        },
    ];

    return (
        <nav className="nav" role="navigation" aria-label="Main">
            <ul>
                {linksList.map((link: Record<string, string>, key: number) => (
                    <li key={key}>
                        <Link
                            className={
                                isActiveMenuItem(
                                    link.href,
                                    pathname,
                                    i18n.resolvedLanguage
                                )
                                    ? 'active'
                                    : ''
                            }
                            href={link.href}
                        >
                            {t(link.textId)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;
