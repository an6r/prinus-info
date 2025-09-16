'use client';

import Link from 'next/link';
import Image from 'next/image';

import prinus_logo from '@/public/prinus-logo.png';

function Header() {
    return (
        <header>
            <Link href="/" className="logo">
                <Image src={prinus_logo} alt="Prinus Logo" width={300} />
            </Link>
        </header>
    );
}

export default Header;
