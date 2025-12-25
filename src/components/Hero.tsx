import { ArrowRight, Heart, Shield, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Heart,
      title: t('hero.patientCentered'),
      description: t('hero.compassionateCare'),
    },
    {
      icon: Shield,
      title: t('hero.safeSterile'),
      description: t('hero.highestStandards'),
    },
    {
      icon: Users,
      title: t('hero.expertTeam'),
      description: t('hero.experiencedStaff'),
    },
  ];

  return (
    <section id="home" className={`relative pt-20 min-h-screen flex items-center bg-gradient-to-br from-teal-50 via-blue-50 to-green-50 ${isRTL ? 'font-arabic' : ''}`}>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isRTL ? 'text-right' : ''}`}>
            <div className="inline-block">
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
                {t('hero.advancedCare')}
              </span>
            </div>

            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight ${isRTL ? 'text-right' : ''}`}>
              {t('hero.qualityCare')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-green-600">
                {" "}{t('hero.hemodialysis')}
              </span>
            </h1>

            <p className={`text-xl text-gray-600 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              {t('hero.experience')}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <button
                onClick={() => scrollToSection('services')}
                className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <span>{t('hero.ourServices')}</span>
                <ArrowRight className={`group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} size={20} />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold border-2 border-teal-600 hover:bg-teal-50 transition-all duration-200"
              >
                {t('hero.contactUs')}
              </button>
            </div>

            <div className={`grid grid-cols-3 gap-6 pt-8 ${isRTL ? 'text-right' : ''}`}>
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-teal-600" size={24} />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">{feature.title}</p>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt={t('hero.hemodialysis')}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-teal-400 to-green-400 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-gradient-to-br from-blue-400 to-teal-400 rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}