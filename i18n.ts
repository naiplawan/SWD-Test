import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      [TranslationKeys.MoveShape]: 'Move Shape',
      [TranslationKeys.MovePosition]: 'Move Position',
      [TranslationKeys.ChangeLanguage]: 'Change Language',
    },
  },
  th: {
    translation: {
      [TranslationKeys.MoveShape]: 'เลื่อนรูปร่าง',
      [TranslationKeys.MovePosition]: 'เปลี่ยนตำแหน่ง',
      [TranslationKeys.ChangeLanguage]: 'เปลี่ยนภาษา',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
