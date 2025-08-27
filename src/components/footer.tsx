'use client';

import { useTranslation } from 'react-i18next';
//import { usePathname, useRouter } from 'next/navigation';

//import i18nConfig from '@/i18nConfig';

import Image from 'next/image';
import Link from 'next/link';

function Footer() {
    const { t } = useTranslation();
    //const currentLocale = i18n.resolvedLanguage || i18nConfig.defaultLocale;
    //const router = useRouter();
    //const currentPathname = usePathname();

    return (
        <footer>
            <nav className="additional-navigation">
                <Link className="back" href="#">
                    <Image src="/back.svg" alt="Back" width={40} height={47} />
                    <span>back</span>
                </Link>
                <Image
                    className="up"
                    src="/up.svg"
                    alt="Scroll Up"
                    width={48}
                    height={48}
                />
            </nav>
            <div className="social">
                <Link
                    href="https://www.linkedin.com/in/mariaprinus/"
                    target="_blank"
                >
                    <Image
                        src="/linkedin.svg"
                        alt={t('linkedin-logo')}
                        width={64}
                        height={64}
                    />
                </Link>
                <Link href="https://www.instagram.com/an6r/" target="_blank">
                    <Image
                        src="/insta.svg"
                        alt={t('instagram-logo')}
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
                        alt={t('instagram-logo-with-cat')}
                        width={64}
                        height={64}
                    />
                </Link>
            </div>
            <p>&copy; 2025 {t('copy')}</p>
            <p>
                {t('icons-by')}&nbsp;
                <Link href="https://icons8.com/" target="_blank">
                    Icon8
                </Link>
                .
            </p>
        </footer>
    );
}

export default Footer;
