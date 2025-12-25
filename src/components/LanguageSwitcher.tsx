import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; name: string }[] = [
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'ar', label: 'عربي', name: 'العربية' },
    { code: 'en', label: 'EN', name: 'English' },
  ];

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <Globe size={18} className="text-gray-500" />
      <div className="flex bg-gray-100 rounded-lg p-1 space-x-1 rtl:space-x-reverse">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              language === lang.code
                ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-sm'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
            title={lang.name}
            aria-label={`Switch to ${lang.name}`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;