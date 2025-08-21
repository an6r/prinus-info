import i18nConfig from '@/i18nConfig';
import { LocaleType } from '@/app/types';

type LocaleConfig = {
    cookieName: string;
    cookieExpireDays: number;
};

const localeConfig: LocaleConfig = {
    cookieName: 'NEXT_LOCALE',
    cookieExpireDays: 30,
};

const setLocaleCookie = (locale: LocaleType) => {
    const date = new Date();
    date.setTime(
        date.getTime() + localeConfig.cookieExpireDays * 24 * 60 * 60 * 1000
    );
    document.cookie = `${localeConfig.cookieName}=${locale};expires=${date.toUTCString()};path=/`;
};

const getLocalizedPath = (
    currentPathname: string,
    currentLocale: LocaleType,
    newLocale: LocaleType
): string => {
    if (currentLocale === i18nConfig.defaultLocale) {
        return `/${newLocale}${currentPathname}`;
    }
    return currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);
};

const isActiveMenuItem = (
    linkHref: string,
    currentPathname: string,
    currentLocale?: LocaleType
): boolean => {
    if (currentLocale === i18nConfig.defaultLocale) {
        return linkHref === currentPathname;
    } else if (currentLocale !== i18nConfig.defaultLocale) {
        if (linkHref === '/' && currentPathname === `/${currentLocale}`) {
            return true;
        }

        return `/${currentLocale}${linkHref}` === currentPathname;
    }

    return false;
};

export { setLocaleCookie, getLocalizedPath, isActiveMenuItem };
