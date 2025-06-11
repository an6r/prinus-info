'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Jura } from 'next/font/google';

import Link from 'next/link';
import Image from 'next/image';

import LanguageChanger from '@/components/language-switcher';
import Menu from '@/components/menu';

const jura = Jura({
    preload: true,
    style: 'normal',
    subsets: ['latin'],
    weight: '600',
});

function Header() {
    const pathname = usePathname();
    const [isToggled, setIsToggled] = useState(false);

    const menuToggle = () => {
        setIsToggled(!isToggled);
    };

    useEffect(() => {
        setIsToggled(false);
    }, [pathname]);

    return (
        <header>
            <div className={jura.className + ' logo'}>
                <Link href="/" className="logo-text">
                    Prinus
                </Link>
            </div>
            <section
                className={
                    'navigation-section ' +
                    (isToggled ? 'section-is-opened' : 'section-is-closed')
                }
            >
                <div className="opener" onClick={menuToggle}>
                    <Image
                        className="menu-icon"
                        src="/icons8-menu.png"
                        width={42}
                        height={42}
                        alt="menu"
                    />
                    <Image
                        className="close-icon"
                        src="/icons8-close.png"
                        width={42}
                        height={42}
                        alt="menu"
                    />
                </div>
                <div className="navigation">
                    <Menu />
                    <LanguageChanger />
                </div>
            </section>
        </header>
    );
}

export default Header;
