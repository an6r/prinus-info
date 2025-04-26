import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    return (
        <footer>
            <div className="social">
                <Link
                    href="https://www.linkedin.com/in/mariaprinus/"
                    target="_blank"
                >
                    <Image
                        src="/linkedin.svg"
                        alt="LinkedIn Logo"
                        width={64}
                        height={64}
                    />
                </Link>
                <Link href="https://www.instagram.com/an6r/" target="_blank">
                    <Image
                        src="/insta.svg"
                        alt="Instagram Logo"
                        width={64}
                        height={64}
                    />
                </Link>
                <Link
                    className="cat-insta"
                    href="https://www.instagram.com/linusandsophieandtoby/"
                    target="_blank"
                >
                    <Image
                        src="/insta.svg"
                        alt="Instagram Logo with Cat"
                        width={64}
                        height={64}
                    />
                </Link>
            </div>
            <p>&copy; 2025 Site created by Maria Prinus.</p>
            <p>
                Icons provided by{' '}
                <Link href="https://icons8.com/" target="_blank">
                    Icon8
                </Link>
                .
            </p>
        </footer>
    );
}

export default Footer;
