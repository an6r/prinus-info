'use client';

import { useTranslation } from 'react-i18next';

import Link from 'next/link';

function Navigation() {
    const { t } = useTranslation();

    return (
        <nav className="nav" role="navigation" aria-label="Main">
            <ul>
                <li>
                    <Link href="/">{t('home')}</Link>
                </li>
                <li>
                    <Link href="/about">{t('about-me')}</Link>
                </li>
                <li>
                    <Link href="/resume">{t('resume')}</Link>
                </li>
                <li>
                    <Link href="/contacts">{t('contacts')}</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
