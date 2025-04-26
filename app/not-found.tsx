import Link from 'next/link';
import Image from 'next/image';

import '@/styles/not-found.scss';

export default async function NotFound() {
    return (
        <section className="not-found-container">
            <section className="content">
                <div className="text-block">
                    <h1>Oops! Lost in Space?</h1>
                    <p>
                        Looks like this page doesn&apos;t exist. Let&apos;s go
                        home!
                    </p>
                </div>
                <div className="robot-block">
                    <Image
                        src="/robot-404.png"
                        alt="Sad Robot holding 404 sign"
                        width={300}
                        height={300}
                    />
                </div>
            </section>
            <div className="home-button">
                <Link className="home-link" href="/">
                    Take Me Home
                </Link>
            </div>
        </section>
    );
}
