module.exports = {
  locales: ['vi', 'en'],
  defaultLocale: 'vi',
  pages: {
    '*': ['common'],
  },
  localeDetection: false,
  loadLocaleFrom: (lang, ns) => {
    return import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default);
  },
};
