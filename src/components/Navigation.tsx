import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, isRTL, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'team', label: t('nav.team') },
    { id: 'facilities', label: t('nav.facilities') },
    { id: 'patient-info', label: t('nav.patientInfo') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        } ${isRTL ? 'font-arabic' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Clinic Name & Logo - Left side */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">CHE</span>
              </div>
              <div className={`flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
                {/* Clinic Name - Single line with both languages */}
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  
                  {language == 'ar' && (
                    <span className="text-lg font-bold text-gray-900 leading-tight">
                      {t('clinicName')}
                    </span>
                  )}
                   {language !== 'ar' && (
                    <span className="text-sm text-gray-900 font-semibold border-r-2 border-teal-200 pr-2 rtl:border-l-2 rtl:border-r-0 rtl:pl-2 rtl:pr-0">
                      {t('clinicName')}
                    </span>
                  )}
                </div>
                <p className="text-xs text-teal-600 mt-0.5">{t('tagline')}</p>
              </div>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8">
              <div className="flex items-center space-x-6 rtl:space-x-reverse">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 text-sm whitespace-nowrap px-1 py-1 relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side Items - Desktop */}
            <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
              <LanguageSwitcher />
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 rtl:space-x-reverse group"
                >
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                    <Phone size={16} />
                  </div>
                  <div className={`flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
                    <span className="text-xs text-gray-500">{t('contact.phone.title')}</span>
                    <span className="text-sm font-medium">(123) 456-7890</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={() => setIsMobileMenuOpen(false)} 
          />
          <div className={`fixed top-20 ${isRTL ? 'left-0' : 'right-0'} bottom-0 w-80 bg-white shadow-2xl overflow-y-auto`}>
            <div className="p-6 space-y-1">
              {/* Mobile Clinic Info */}
              <div className={`mb-6 pb-6 border-b border-gray-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">CHE</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {language === 'ar' ? t('clinicName') : "Centre d'Hémodialyse Errachidia"}
                    </h3>
                    {language !== 'ar' && (
                      <p className="text-sm text-teal-700 mt-1">{t('clinicName')}</p>
                    )}
                    <p className="text-xs text-teal-600 mt-1">{t('tagline')}</p>
                  </div>
                </div>
                <div className="px-4">
                  <LanguageSwitcher />
                </div>
              </div>

              {/* Mobile Navigation Links */}
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-600 font-medium transition-all duration-200 flex items-center justify-between ${
                    isRTL ? 'text-right flex-row-reverse' : 'text-left'
                  }`}
                >
                  <span>{link.label}</span>
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                  </div>
                </button>
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-6 mt-6 border-t border-gray-200 space-y-4">
                <a 
                  href="tel:+1234567890" 
                  className={`flex items-center space-x-3 text-teal-600 px-4 py-3 rounded-lg hover:bg-teal-50 transition-colors ${
                    isRTL ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <span className="text-xs text-gray-500 block">{t('contact.phone.title')}</span>
                    <span className="text-sm font-medium">(123) 456-7890</span>
                  </div>
                </a>
                
                <a 
                  href="mailto:info@healthcaredialysis.com" 
                  className={`flex items-center space-x-3 text-teal-600 px-4 py-3 rounded-lg hover:bg-teal-50 transition-colors ${
                    isRTL ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <span className="text-xs text-gray-500 block">{t('contact.email.title')}</span>
                    <span className="text-sm font-medium">info@healthcaredialysis.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}