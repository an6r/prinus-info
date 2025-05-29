import 'server-only';

import { LocaleType } from '@/app/types';

const workExperienceData: Record<
    LocaleType,
    () => Promise<Record<string, unknown>[]>
> = {
    en: () =>
        import('../locales/en/work-experience.json').then(
            (module) => module.default
        ),
    by: () =>
        import('../locales/by/work-experience.json').then(
            (module) => module.default
        ),
    ru: () =>
        import('../locales/ru/work-experience.json').then(
            (module) => module.default
        ),
};

export const getWorkExperience = async (locale: LocaleType) =>
    workExperienceData[locale]();

const educationData: Record<
    LocaleType,
    () => Promise<Record<string, unknown>>
> = {
    en: () =>
        import('../locales/en/education.json').then((module) => module.default),
    by: () =>
        import('../locales/by/education.json').then((module) => module.default),
    ru: () =>
        import('../locales/ru/education.json').then((module) => module.default),
};

export const getEducation = async (locale: LocaleType) =>
    educationData[locale]();
