import { Jura } from 'next/font/google'
import Link from "next/link";

const jura = Jura({
    subsets: ['latin'],
})

function Header() {
    return (
        <header>
            <div className={jura.className + " logo"}>
                <Link href="/" className="logo-text">Prinus</Link>
            </div>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Me</Link></li>
                    <li><Link href="/resume">Resume</Link></li>
                    {/*<li><Link href="/blog">Blog</NavLink></li>
                    <li><Link href="/hobbies">Hobbies</NavLink></li>*/}
                    <li><Link href="/contacts">Contacts</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
