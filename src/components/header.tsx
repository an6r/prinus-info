'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { usePathname } from 'next/navigation';

import { geom } from '@/fonts';
import LanguageChanger from '@/components/language-switcher';
import Menu from '@/components/menu';

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
            <div className={geom.className + ' logo'}>
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
