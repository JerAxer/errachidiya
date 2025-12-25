import { Activity, Monitor, Stethoscope, Droplets, Shield, Tv, Wifi, Armchair } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t, isRTL } = useLanguage();

  const mainServices = [
    {
      icon: Activity,
      title: t('services.hemodialysis.title'),
      description: t('services.hemodialysis.description'),
      features: t('services.hemodialysis.features'),
    },
    {
      icon: Monitor,
      title: t('services.equipment.title'),
      description: t('services.equipment.description'),
      features: t('services.equipment.features'),
    },
    {
      icon: Stethoscope,
      title: t('services.supervision.title'),
      description: t('services.supervision.description'),
      features: t('services.supervision.features'),
    },
    {
      icon: Droplets,
      title: t('services.waterSystem.title'),
      description: t('services.waterSystem.description'),
      features: t('services.waterSystem.features'),
    },
  ];

  const comfortServices = [
    { icon: Tv, title: t('services.entertainment'), description: t('services.entertainmentDesc') },
    { icon: Wifi, title: t('services.wifi'), description: t('services.wifiDesc') },
    { icon: Armchair, title: t('services.comfort'), description: t('services.comfortDesc') },
    { icon: Shield, title: t('services.emergency'), description: t('services.emergencyDesc') },
  ];

  return (
    <section id="services" className={`py-20 bg-gradient-to-br from-gray-50 to-blue-50 ${isRTL ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            {t('services.title')}
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            {t('services.heading')}
          </h2>
          <p className={`mt-6 text-xl text-gray-600 max-w-3xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group ${isRTL ? 'text-right' : ''}`}
              >
                <div className={`flex items-start space-x-4 rtl:space-x-reverse`}>
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white" size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className={`text-gray-600 mb-4 leading-relaxed ${isRTL ? 'text-right' : ''}`}>{service.description}</p>
                    <ul className="space-y-2">
                      {Array.isArray(service.features) && service.features.map((feature: string, idx: number) => (
                        <li key={idx} className={`flex items-center text-sm text-gray-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <div className={`w-1.5 h-1.5 bg-teal-500 rounded-full ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className={`text-2xl font-bold text-gray-900 mb-6 text-center ${isRTL ? 'text-right' : ''}`}>
            {t('services.comfortServices')}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {comfortServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`text-center space-y-3 p-4 rounded-xl hover:bg-teal-50 transition-colors duration-200 ${isRTL ? 'text-right' : ''}`}>
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="text-teal-600" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}