'use client';

import { Jura } from 'next/font/google';
import Link from 'next/link';

import LanguageChanger from './language-switcher';
import Navigation from './navigation';

const jura = Jura({
    preload: true,
    style: 'normal',
    subsets: ['latin'],
    weight: '600',
});

function Header() {
    return (
        <header>
            <div className={jura.className + ' logo'}>
                <Link href="/" className="logo-text">
                    Prinus
                </Link>
            </div>
            <Navigation />
            <LanguageChanger />
        </header>
    );
}

export default Header;
