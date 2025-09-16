'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Menu from '@/components/menu';

function MobileNavigation() {
    const pathname = usePathname();
    const [isToggled, setIsToggled] = useState(false);

    const menuToggle = () => {
        setIsToggled(!isToggled);
    };

    useEffect(() => {
        setIsToggled(false);
    }, [pathname]);

    return (
        <section
            className={
                'navigation-section ' +
                (isToggled ? 'section-is-opened' : 'section-is-closed')
            }
        >
            <div className="opener" onClick={menuToggle}>
                <Image
                    className="menu-icon"
                    src="/menu-open.svg"
                    width={50}
                    height={50}
                    alt="menu"
                />
                <Image
                    className="close-icon"
                    src="/menu-close.svg"
                    width={50}
                    height={50}
                    alt="menu"
                />
            </div>
            <Menu />
        </section>
    );
}

export default MobileNavigation;
