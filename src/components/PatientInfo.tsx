import { Calendar, Clock, FileText, Shield, AlertCircle, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PatientInfo() {
  const { t, isRTL } = useLanguage();

  const scheduleInfo = [
    { day: 'Monday, Wednesday, Friday', time: '6:00 AM - 2:00 PM', slots: 'Morning Shift' },
    { day: 'Monday, Wednesday, Friday', time: '2:00 PM - 10:00 PM', slots: 'Evening Shift' },
    { day: 'Tuesday, Thursday, Saturday', time: '6:00 AM - 2:00 PM', slots: 'Morning Shift' },
    { day: 'Tuesday, Thursday, Saturday', time: '2:00 PM - 10:00 PM', slots: 'Evening Shift' },
  ];

  const treatmentSteps = [
    {
      step: '1',
      title: 'Pre-Treatment Assessment',
      description: 'Vital signs check, weight measurement, and brief consultation with our nursing team.',
    },
    {
      step: '2',
      title: 'Treatment Setup',
      description: 'Access point preparation, machine setup with sterile equipment, and connection.',
    },
    {
      step: '3',
      title: 'Dialysis Session',
      description: 'Continuous monitoring throughout the 3-4 hour session with regular vital checks.',
    },
    {
      step: '4',
      title: 'Post-Treatment',
      description: 'Disconnection, final vital signs check, and scheduling your next appointment.',
    },
  ];

  return (
    <section id="patient-info" className={`py-20 bg-white ${isRTL ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            {t('patientInfo.title')}
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            {t('patientInfo.heading')}
          </h2>
          <p className={`mt-6 text-xl text-gray-600 max-w-3xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            {t('patientInfo.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className={`bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 ${isRTL ? 'text-right' : ''}`}>
            <div className={`flex items-center space-x-3 mb-6 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('patientInfo.schedule.title')}</h3>
            </div>
            <p className={`text-gray-700 mb-6 ${isRTL ? 'text-right' : ''}`}>
              {t('patientInfo.schedule.description')}
            </p>
            <div className="space-y-3">
              {scheduleInfo.map((schedule, index) => (
                <div key={index} className={`bg-white rounded-lg p-4 ${isRTL ? 'text-right' : ''}`}>
                  <div className={`flex items-center justify-between mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="font-semibold text-gray-900">{schedule.slots}</span>
                    <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                      {schedule.day.split(',')[0]}
                    </span>
                  </div>
                  <div className={`flex items-center text-sm text-gray-600 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Clock size={14} className={isRTL ? 'ml-2' : 'mr-2'} />
                    {schedule.time}
                  </div>
                  <p className={`text-xs text-gray-500 mt-1 ${isRTL ? 'text-right' : ''}`}>{schedule.day}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 ${isRTL ? 'text-right' : ''}`}>
            <div className={`flex items-center space-x-3 mb-6 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <FileText className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('patientInfo.treatment.title')}</h3>
            </div>
            <div className="space-y-4">
              {treatmentSteps.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <div className={`flex items-start space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-gray-900 mb-1 ${isRTL ? 'text-right' : ''}`}>{item.title}</h4>
                      <p className={`text-sm text-gray-600 ${isRTL ? 'text-right' : ''}`}>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`bg-white border-2 border-teal-100 rounded-2xl p-8 ${isRTL ? 'text-right' : ''}`}>
            <div className={`flex items-center space-x-3 mb-6 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <Shield className="text-teal-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('patientInfo.safety.title')}</h3>
            </div>
            <p className={`text-gray-600 mb-6 ${isRTL ? 'text-right' : ''}`}>
              {t('patientInfo.safety.description')}
            </p>
            <div className="space-y-2">
              {[
                t('patientInfo.importantInfo.before.title'),
                t('patientInfo.importantInfo.bring.title'),
                t('patientInfo.importantInfo.after.title'),
              ].map((measure, index) => (
                <div key={index} className={`flex items-start space-x-3 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <AlertCircle className="text-teal-500 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700">{measure}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl p-8 text-white ${isRTL ? 'text-right' : ''}`}>
            <div className={`flex items-center space-x-3 mb-6 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Info className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold">{t('patientInfo.importantInfo.title')}</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">{t('patientInfo.importantInfo.before.title')}</h4>
                <p className={`text-sm text-teal-50 ${isRTL ? 'text-right' : ''}`}>
                  {t('patientInfo.importantInfo.before.description')}
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">{t('patientInfo.importantInfo.bring.title')}</h4>
                <p className={`text-sm text-teal-50 ${isRTL ? 'text-right' : ''}`}>
                  {t('patientInfo.importantInfo.bring.description')}
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">{t('patientInfo.importantInfo.after.title')}</h4>
                <p className={`text-sm text-teal-50 ${isRTL ? 'text-right' : ''}`}>
                  {t('patientInfo.importantInfo.after.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}