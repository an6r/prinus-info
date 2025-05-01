import 'server-only';

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

export const getWorkExperience = async (locale: 'en' | 'by' | 'ru') =>
    workExperienceData[locale]();

const educationData = {
    en: () =>
        import('../locales/en/education.json').then((module) => module.default),
    by: () =>
        import('../locales/by/education.json').then((module) => module.default),
    ru: () =>
        import('../locales/ru/education.json').then((module) => module.default),
};

export const getEducation = async (locale: 'en' | 'by' | 'ru') =>
    educationData[locale]();
