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
            <Menu />
        </section>
    );
}

export default MobileNavigation;
