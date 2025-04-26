import { Jura } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

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
                    <Image
                        src="/robot.png"
                        alt="Prinus Logo"
                        width={120}
                        height={120}
                    />
                    <span>Prinus</span>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About Me</Link>
                    </li>
                    <li>
                        <Link href="/resume">Resume</Link>
                    </li>
                    {/*<li><Link href="/blog">Blog</NavLink></li>
                    <li><Link href="/hobbies">Hobbies</NavLink></li>*/}
                    <li>
                        <Link href="/contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
