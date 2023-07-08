const CONFIG = {
  name: 'Galois Foundation',

  origin: 'http://127.0.0.1',
  basePathname: '/',
  trailingSlash: false,

  title: 'Galois Foundation',
  description: 'Galois Foundation Homepage',

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
};

export const SITE = { ...CONFIG, blog: undefined };
export const DATE_FORMATTER = CONFIG.dateFormatter;
