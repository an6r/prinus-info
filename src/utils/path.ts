import i18nConfig from '@/i18nConfig';

const isHomePage = (currentPathname: string) => {
    return (
        currentPathname === '/' ||
        i18nConfig.locales.some((locale) => currentPathname === `/${locale}`)
    );
};

export { isHomePage };
