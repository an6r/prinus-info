'use client';

import { useTranslation } from 'react-i18next';

import { Jura } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import LanguageChanger from './language-switcher';

const jura = Jura({
    style: 'normal',
    subsets: ['latin'],
    weight: '600',
});

function Header() {
    const { t } = useTranslation();

    return (
        <header>
            <div className={jura.className + ' logo'}>
                <Link href="/" className="logo-text">
                    <Image
                        src="/robot.png"
                        alt={t('logo-alt')}
                        width={120}
                        height={120}
                    />
                    <span>Prinus</span>
                </Link>
            </div>
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
                    {/*<li><Link href="/blog">{t('blog')}</Link></li>
                    <li><Link href="/hobbies">{t('hobbies')}</Link></li>*/}
                    <li>
                        <Link href="/contacts">{t('contacts')}</Link>
                    </li>
                </ul>
            </nav>
            <LanguageChanger />
        </header>
    );
}

export default Header;
