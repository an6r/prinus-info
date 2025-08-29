'use client';

import { useTranslation } from 'react-i18next';

import Image from 'next/image';
import Link from 'next/link';

import AdditionalNavigation from '@/components/additional-navigation';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer>
            <AdditionalNavigation />
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
