import { Target, Eye, Award, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t, isRTL } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t('about.values.patientSafety'),
      description: t('about.values.patientSafetyDesc'),
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      icon: Award,
      title: t('about.values.medicalExcellence'),
      description: t('about.values.medicalExcellenceDesc'),
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Target,
      title: t('about.values.patientComfort'),
      description: t('about.values.patientComfortDesc'),
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Eye,
      title: t('about.values.transparency'),
      description: t('about.values.transparencyDesc'),
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
    },
  ];

  return (
    <section id="about" className={`py-20 bg-white ${isRTL ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            {t('about.title')}
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            {t('about.heading')}
          </h2>
          <p className={`mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-right' : ''}`}>
            {t('about.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className={`bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 space-y-4 ${isRTL ? 'text-right' : ''}`}>
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Target className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{t('about.mission.title')}</h3>
            <p className="text-gray-700 leading-relaxed">
              {t('about.mission.description')}
            </p>
          </div>

          <div className={`bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 space-y-4 ${isRTL ? 'text-right' : ''}`}>
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Eye className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{t('about.vision.title')}</h3>
            <p className="text-gray-700 leading-relaxed">
              {t('about.vision.description')}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 ${isRTL ? 'text-right' : ''}`}
              >
                <div className={`w-12 h-12 ${value.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${isRTL ? 'ml-auto' : ''}`}>
                  <IconComponent className="text-teal-600" size={24} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}