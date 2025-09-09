'use client';

import { useTranslation } from 'react-i18next';

import Link from 'next/link';

function Menu() {
    const { t } = useTranslation();

    return (
        <nav className="nav" role="navigation" aria-label="Main">
            <ul>
                <li>
                    <Link href="/" className="home">
                        {t('home')}
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="story">
                        {t('about-me')}
                    </Link>
                </li>
                <li>
                    <Link href="/" className="genealogy">
                        Genealogy
                    </Link>
                </li>
                <li>
                    <Link href="/resume" className="resume">
                        {t('resume')}
                    </Link>
                </li>
                <li>
                    <Link href="/contacts" className="contacts">
                        {t('contacts')}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
