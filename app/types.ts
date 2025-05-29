import i18nConfig from '@/i18nConfig';

export type LocaleType = (typeof i18nConfig.locales)[number];

export interface PageProps {
    params: Promise<{ locale: LocaleType }>;
}

export interface AboutContentData {
    introduction: {
        header: string;
        text: Array<string>;
    };
    experience: {
        header: string;
        text: Array<string>;
    };
    personal: {
        header: string;
        text: Array<string>;
    };
    site: {
        header: string;
        text: Array<string>;
        special: {
            p0: string;
            p1: string;
            p2: string;
        };
    };
}
