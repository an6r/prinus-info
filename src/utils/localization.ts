import i18nConfig from '@/i18nConfig';

type LocaleConfig = {
    cookieName: string;
    cookieExpireDays: number;
};

const localeConfig: LocaleConfig = {
    cookieName: 'NEXT_LOCALE',
    cookieExpireDays: 30,
};

const setLocaleCookie = (locale: string) => {
    const date = new Date();
    date.setTime(
        date.getTime() + localeConfig.cookieExpireDays * 24 * 60 * 60 * 1000
    );
    document.cookie = `${localeConfig.cookieName}=${locale};expires=${date.toUTCString()};path=/`;
};

const getLocalizedPath = (
    currentPathname: string,
    currentLocale: string,
    newLocale: string
): string => {
    if (currentLocale === i18nConfig.defaultLocale) {
        return `/${newLocale}${currentPathname}`;
    }
    return currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);
};

export { setLocaleCookie, getLocalizedPath };
