import { User, Award, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Team() {
  const { t, isRTL } = useLanguage();

  const doctors = [
    {
      name: 'Dr. MAMMAR KOUADRI Youcef',
      role: t('team.nephrologists'),
      specialty: 'Nephrology & Internal Medicine',
      experience: '15+ years experience',
      credentials: 'MD, FACP, Board Certified',
    },
    {
      name: 'Dr. SERHAN Aymene',
      role: t('team.nephrologists'),
      specialty: 'Nephrology & Hypertension',
      experience: '12+ years experience',
      credentials: 'MD, FASN, Board Certified',
    },
    {
      name: 'Dr. Marwan',
      role: t('team.nephrologists'),
      specialty: 'Kidney Disease & Dialysis',
      experience: '10+ years experience',
      credentials: 'MD, Board Certified',
    },
  ];

  const staff = [
    {
      name: 'Nursing team1',
      role: t('team.nursingTeam'),
      specialty: 'Critical Care Nursing',
      icon: Heart,
    },
    {
      name: 'Nursing team2',
      role: t('team.nursingTeam'),
      specialty: 'Dialysis Technology',
      icon: Award,
    },
    {
      name: 'Nursing team3',
      role: t('team.nursingTeam'),
      specialty: 'Patient Care Management',
      icon: User,
    },
  ];

  return (
    <section id="team" className={`py-20 bg-white ${isRTL ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            {t('team.title')}
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            {t('team.heading')}
          </h2>
          <p className={`mt-6 text-xl text-gray-600 max-w-3xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            {t('team.description')}
          </p>
        </div>

        <div className="mb-16">
          <h3 className={`text-2xl font-bold text-gray-900 mb-8 text-center ${isRTL ? 'text-right' : ''}`}>
            {t('team.nephrologists')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group ${isRTL ? 'text-right' : ''}`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <User className="text-white" size={40} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{doctor.name}</h4>
                    <p className="text-teal-600 font-semibold mt-1">{doctor.role}</p>
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="bg-white/60 rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-900">{doctor.specialty}</p>
                    </div>
                    <div className="bg-white/60 rounded-lg p-3">
                      <p className="text-sm text-gray-700">{doctor.experience}</p>
                    </div>
                    <div className="bg-white/60 rounded-lg p-3">
                      <p className="text-xs text-gray-600">{doctor.credentials}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-2xl font-bold text-gray-900 mb-8 text-center ${isRTL ? 'text-right' : ''}`}>
            {t('team.nursingTeam')}
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {staff.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <div
                  key={index}
                  className={`bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group ${isRTL ? 'text-right' : ''}`}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-teal-600" size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{member.name}</h4>
                      <p className="text-sm text-teal-600 font-medium mt-1">{member.role}</p>
                      <p className="text-xs text-gray-600 mt-2">{member.specialty}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`mt-12 bg-gradient-to-br from-teal-600 to-blue-600 rounded-2xl p-8 text-center text-white ${isRTL ? 'text-right' : ''}`}>
          <h3 className="text-2xl font-bold mb-3">{t('team.excellence')}</h3>
          <p className="text-teal-50 max-w-2xl mx-auto">
            {t('team.excellenceDesc')}
          </p>
        </div>
      </div>
    </section>
  );
}