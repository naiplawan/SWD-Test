import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import i18n from '@/app/i18n';

const LanguageSelector = () => {
  const { t } = useTranslation();

  const handleLanguageChange = async (value: string) => {
    try {
      await i18n.changeLanguage(value);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  return (
    <Select
      defaultValue={i18n.language || 'en'}
      onChange={handleLanguageChange}
      style={{ width: 120 }}
      options={[
        { value: 'en', label: 'English' },
        { value: 'th', label: 'ไทย' },
      ]}
    />
  );
};

export default LanguageSelector;
