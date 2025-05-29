'use client';

import i18nConfig from '@/i18nConfig';

import LanguageFlag from '@/components/language-flag';

export default function LanguageChanger() {
    return (
        <ul className="lang-switcher">
            {i18nConfig.locales.map((locale, index) => (
                <li key={index}>
                    <LanguageFlag locale={locale} />
                </li>
            ))}
        </ul>
    );
}
