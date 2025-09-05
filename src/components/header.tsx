'use client';

import Link from 'next/link';
import Image from 'next/image';

import { geom } from '@/fonts';

function Header() {
    return (
        <header>
            <div className={geom.className + ' logo'}>
                <Link href="/" className="logo-text">
                    <span>Prinus</span>
                    <Image
                        src="/logo.png"
                        alt="Logo Tree"
                        width={80}
                        height={60}
                    />
                </Link>
            </div>
        </header>
    );
}

export default Header;
