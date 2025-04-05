import 'server-only';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  vi: () => import('./vi.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  // Check if the locale exists in our dictionaries
  if (!Object.keys(dictionaries).includes(locale)) {
    console.warn(
      `Dictionary for locale "${locale}" not found, falling back to "en"`
    );
    return dictionaries.en();
  }

  return dictionaries[locale as keyof typeof dictionaries]();
};
