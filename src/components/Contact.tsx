import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t, isRTL } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address.title'),
      details: t('contact.address.details'),
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      icon: Phone,
      title: t('contact.phone.title'),
      details: t('contact.phone.details'),
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Mail,
      title: t('contact.email.title'),
      details: t('contact.email.details'),
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Clock,
      title: t('contact.hours.title'),
      details: t('contact.hours.details'),
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
    },
  ];

  return (
    <section id="contact" className={`py-20 bg-gradient-to-br from-gray-50 to-teal-50 ${isRTL ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            {t('contact.title')}
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            {t('contact.heading')}
          </h2>
          <p className={`mt-6 text-xl text-gray-600 max-w-3xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            {t('contact.description')}
          </p>
        </div>

        {/* Contact Cards - Full width grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group ${isRTL ? 'text-right' : ''}`}
              >
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className={`w-14 h-14 ${info.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>

                  {/* Details */}
                  <div className="space-y-2 flex-1">
                    {Array.isArray(info.details) && info.details.map((detail: string, idx: number) => (
                      <p key={idx} className={`text-gray-600 text-sm ${isRTL ? 'text-right' : ''}`}>
                        {detail}
                      </p>
                    ))}
                  </div>

                  {/* Action Indicator */}
                  <div className={`mt-4 pt-4 border-t border-gray-100 ${isRTL ? 'text-right' : ''}`}>
                    <span className="text-xs text-teal-600 font-medium">
                      {info.icon === Phone && t('buttons.callNow')}
                      {info.icon === Mail && t('buttons.sendEmail')}
                      {info.icon === MapPin && t('buttons.getDirections')}
                      {info.icon === Clock && t('buttons.viewHours')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8">
            <h3 className={`text-2xl font-bold text-gray-900 mb-6 ${isRTL ? 'text-right' : ''}`}>
              {t('contact.map.title')}
            </h3>
            <p className={`text-gray-600 mb-8 ${isRTL ? 'text-right' : ''}`}>
              {t('contact.map.description')}
            </p>
          </div>
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.6501976393625!2d-4.427721924408435!3d31.931567674355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdbb144d4e7d4c7b%3A0x49c9a0b5e5eea7f3!2sErrachidia%2C%20Morocco!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('contact.title')}
            />
          </div>
          <div className="p-6 bg-gray-50">
            <div className={`flex flex-col sm:flex-row justify-between items-center gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <h4 className="font-semibold text-gray-900">{t('contact.address.title')}</h4>
                <p className="text-sm text-gray-600">
                  {Array.isArray(t('contact.address.details')) && t('contact.address.details').join(', ')}
                </p>
              </div>
              <a
                href="https://goo.gl/maps/example"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2 rtl:space-x-reverse"
              >
                <span>{t('buttons.getDirections')}</span>
                <MapPin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className={`bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 ${isRTL ? 'text-right' : ''}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('contact.emergency.title')}
            </h3>
            <p className="text-gray-700 mb-6">
              {t('contact.emergency.description')}
            </p>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Phone className="text-red-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-600">{t('contact.emergency.label')}</p>
                <a href="tel:+1234567899" className="text-lg font-bold text-red-600 hover:text-red-700">
                  (123) 456-7899
                </a>
              </div>
            </div>
          </div>

          <div className={`bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 ${isRTL ? 'text-right' : ''}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('contact.appointment.title')}
            </h3>
            <p className="text-gray-700 mb-6">
              {t('contact.appointment.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+1234567890"
                className="px-6 py-3 bg-white text-teal-600 rounded-lg font-semibold border-2 border-teal-600 hover:bg-teal-50 transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <Phone size={18} />
                <span>{t('buttons.callNow')}</span>
              </a>
              <a
                href="mailto:appointments@healthcaredialysis.com"
                className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <Mail size={18} />
                <span>{t('buttons.emailUs')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}