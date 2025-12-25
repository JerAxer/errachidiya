import { CheckCircle2, Droplet, Sparkles, Wind, Thermometer, Activity } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Facilities() {
  const { t, isRTL } = useLanguage();

  const facilities = [
    {
      icon: Activity,
      title: t('facilities.machines.title'),
      description: t('facilities.machines.description'),
      features: t('facilities.machines.features'),
    },
    {
      icon: Sparkles,
      title: t('facilities.sterile.title'),
      description: t('facilities.sterile.description'),
      features: t('facilities.sterile.features'),
    },
    {
      icon: Droplet,
      title: t('facilities.water.title'),
      description: t('facilities.water.description'),
      features: t('facilities.water.features'),
    },
    {
      icon: Wind,
      title: t('facilities.climate.title'),
      description: t('facilities.climate.description'),
      features: t('facilities.climate.features'),
    },
    {
      icon: Thermometer,
      title: t('facilities.rooms.title'),
      description: t('facilities.rooms.description'),
      features: t('facilities.rooms.features'),
    },
  ];

  // Get highlights and safety checks with proper typing
  const highlights = t('facilities.highlightsList');
  const safetyChecks = t('facilities.safety.checks');

  return (
    <section id="facilities" className={`py-20 bg-gradient-to-br from-blue-50 to-teal-50 ${isRTL ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            {t('facilities.title')}
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            {t('facilities.heading')}
          </h2>
          <p className={`mt-6 text-xl text-gray-600 max-w-3xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            {t('facilities.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${isRTL ? 'text-right' : ''}`}
              >
                <div className={`flex items-start space-x-4 rtl:space-x-reverse`}>
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <IconComponent className="text-white" size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                    <p className={`text-gray-600 mb-4 text-sm leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                      {facility.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {Array.isArray(facility.features) && 
                        facility.features.map((feature: string, idx: number) => (
                          <div key={idx} className={`flex items-start text-xs text-gray-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <CheckCircle2 className={`text-teal-500 flex-shrink-0 mt-0.5 ${isRTL ? 'ml-1' : 'mr-1'}`} size={14} />
                            <span>{feature}</span>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`bg-white rounded-2xl p-8 shadow-lg ${isRTL ? 'text-right' : ''}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('facilities.highlights')}</h3>
            <div className="grid grid-cols-1 gap-3">
              {Array.isArray(highlights) && 
                highlights.map((highlight: string, index: number) => (
                  <div key={index} className={`flex items-center space-x-3 p-3 bg-teal-50 rounded-lg ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <CheckCircle2 className="text-teal-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))
              }
            </div>
          </div>

          <div className={`bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl p-8 text-white flex flex-col justify-center ${isRTL ? 'text-right' : ''}`}>
            <h3 className="text-2xl font-bold mb-4">{t('facilities.safety.title')}</h3>
            <p className="text-teal-50 leading-relaxed mb-6">
              {t('facilities.safety.description')}
            </p>
            <div className="space-y-3">
              {Array.isArray(safetyChecks) && 
                safetyChecks.map((check: string, index: number) => (
                  <div key={index} className={`flex items-center space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-medium">{check}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}