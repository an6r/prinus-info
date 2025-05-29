import 'server-only';

import { CompanyItemProps, LocaleType } from '@/app/types';

const workExperienceData = {
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

export async function getWorkExperience(locale: LocaleType) {
    return (
        workExperienceData as Record<
            LocaleType,
            () => Promise<CompanyItemProps[]>
        >
    )[locale]();
}

const educationData = {
    en: () =>
        import('../locales/en/education.json').then((module) => module.default),
    by: () =>
        import('../locales/by/education.json').then((module) => module.default),
    ru: () =>
        import('../locales/ru/education.json').then((module) => module.default),
};

export const getEducation = async (locale: LocaleType) =>
    (educationData as Record<LocaleType, () => Promise<CompanyItemProps>>)[
        locale
    ]();
