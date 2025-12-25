import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, isRTL, language } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'team', label: t('nav.team') },
  ];

  const moreLinks = [
    { id: 'facilities', label: t('nav.facilities') },
    { id: 'patient-info', label: t('nav.patientInfo') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <footer className={`bg-gradient-to-br from-gray-900 to-gray-800 text-white ${isRTL ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className={`space-y-4 ${isRTL ? 'text-right' : ''}`}>
            <div className={`flex items-center space-x-2 rtl:space-x-reverse`}>
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">CHE</span>
              </div>
              <div className={isRTL ? 'text-right' : ''}>
                <div className="flex flex-col">
                  <span className={`text-lg font-bold ${isRTL ? 'text-right' : ''}`}>
                    {language === 'ar' ? t('clinicName') : "Centre d'Hémodialyse Errachidia"}
                  </span>
                  {language !== 'ar' && (
                    <span className="text-lg font-bold text-right" dir="rtl">
                      {t('clinicName')}
                    </span>
                  )}
                </div>
                <p className="text-xs text-teal-400">{t('tagline')}</p>
              </div>
            </div>
            <p className={`text-gray-400 text-sm leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {t('footer.description')}
            </p>
          </div>

          <div className={isRTL ? 'text-right' : ''}>
            <h4 className="font-bold text-lg mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`text-gray-400 hover:text-teal-400 transition-colors text-sm ${isRTL ? 'text-right' : ''}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={isRTL ? 'text-right' : ''}>
            <h4 className="font-bold text-lg mb-4">{t('footer.more')}</h4>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`text-gray-400 hover:text-teal-400 transition-colors text-sm ${isRTL ? 'text-right' : ''}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={isRTL ? 'text-right' : ''}>
            <h4 className="font-bold text-lg mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-3">
              <li className={`flex items-start space-x-2 text-sm ${isRTL ? 'flex-row-reverse space-x-reverse text-right' : ''}`}>
                <MapPin className="text-teal-400 flex-shrink-0 mt-1" size={16} />
                <span className="text-gray-400">123 Medical Center Drive, Suite 200, Healthcare City, HC 12345</span>
              </li>
              <li className={`flex items-center space-x-2 text-sm ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <Phone className="text-teal-400 flex-shrink-0" size={16} />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-teal-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className={`flex items-center space-x-2 text-sm ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <Mail className="text-teal-400 flex-shrink-0" size={16} />
                <a href="mailto:info@healthcaredialysis.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                  info@healthcaredialysis.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className={`text-gray-400 text-sm ${isRTL ? 'text-right' : ''}`}>
              {t('footer.rights')}
            </p>
            <div className={`flex items-center space-x-1 text-sm text-gray-400 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <span>{t('footer.madeWith')}</span>
              <Heart className="text-red-500" size={16} fill="currentColor" />
              <span>{t('footer.forPatients')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}