import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TranslationKeys } from '@/enum/translation';

const resources = {
  en: {
    translation: {
      [TranslationKeys.MoveShape]: 'Move Shape',
      [TranslationKeys.MovePosition]: 'Move Position',
      [TranslationKeys.ChangeLanguage]: 'Change Language',
      [TranslationKeys.LayoutPage]: 'LayoutPage',
      [TranslationKeys.FormPage]: 'FormPage',
      [TranslationKeys.Title]: 'Title',
      [TranslationKeys.FirstName]: 'First Name',
      [TranslationKeys.LastName]: 'Last Name',
      [TranslationKeys.Birthday]: 'Birthday',
      [TranslationKeys.Nationality]: 'Nationality',
      [TranslationKeys.CitizenID]: 'Citizen ID',
      [TranslationKeys.Gender]: 'Gender',
      [TranslationKeys.MobilePhone]: 'Mobile Phone',
      [TranslationKeys.PassportNo]: 'Passport No',
      [TranslationKeys.ExpectedSalary]: 'Expected Salary',
      [TranslationKeys.Submit]: 'Submit',
      [TranslationKeys.Reset]: 'Reset',
      [TranslationKeys.Male]: 'Male',
      [TranslationKeys.Female]: 'Female',
      [TranslationKeys.Other]: 'Other',
      [TranslationKeys.Optional]: 'Optional',
      [TranslationKeys.ValidationRequired]: 'Please input this field!',
      [TranslationKeys.ValidationNumeric]: 'Must be numeric!',
      [TranslationKeys.ValidationAlphanumeric]: 'Must be alphanumeric!',
    },
  },
  th: {
    translation: {
      [TranslationKeys.MoveShape]: 'เลื่อนรูปร่าง',
      [TranslationKeys.MovePosition]: 'เปลี่ยนตำแหน่ง',
      [TranslationKeys.ChangeLanguage]: 'เปลี่ยนภาษา',
      [TranslationKeys.LayoutPage]: 'หน้าการจัดรูปแบบ',
      [TranslationKeys.FormPage]: 'หน้าแบบฟอร์ม',
      [TranslationKeys.Title]: 'คำนำหน้า',
      [TranslationKeys.FirstName]: 'ชื่อ',
      [TranslationKeys.LastName]: 'นามสกุล',
      [TranslationKeys.Birthday]: 'วันเกิด',
      [TranslationKeys.Nationality]: 'สัญชาติ',
      [TranslationKeys.CitizenID]: 'เลขบัตรประชาชน',
      [TranslationKeys.Gender]: 'เพศ',
      [TranslationKeys.MobilePhone]: 'เบอร์โทรศัพท์',
      [TranslationKeys.PassportNo]: 'หมายเลขพาสปอร์ต',
      [TranslationKeys.ExpectedSalary]: 'เงินเดือนที่คาดหวัง',
      [TranslationKeys.Submit]: 'ส่งข้อมูล',
      [TranslationKeys.Reset]: 'รีเซ็ต',
      [TranslationKeys.Male]: 'ชาย',
      [TranslationKeys.Female]: 'หญิง',
      [TranslationKeys.Other]: 'อื่นๆ',
      [TranslationKeys.Optional]: 'ไม่จำเป็น',
      [TranslationKeys.ValidationRequired]: 'กรุณากรอกข้อมูล',
      [TranslationKeys.ValidationNumeric]: 'ต้องเป็นตัวเลขเท่านั้น',
      [TranslationKeys.ValidationAlphanumeric]: 'ต้องเป็นตัวอักษรหรือตัวเลขเท่านั้น',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
