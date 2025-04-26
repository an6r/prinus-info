import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="hero">
            <Image
                src="/photos/maria-prinus-hero.jpg"
                width={200}
                height={200}
                alt="Maria Prinus"
                className="hero-photo"
            />
            <div className="intro">
                <h1>Hi, I’m Maria Prinus</h1>
                <p>
                    Software engineer turned release manager, lover of cats,
                    history, and beautiful code.
                </p>
                <div className="buttons">
                    <Link href="/resume" className="btn">
                        View My Resume
                    </Link>
                    <Link href="/contacts" className="btn secondary">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
