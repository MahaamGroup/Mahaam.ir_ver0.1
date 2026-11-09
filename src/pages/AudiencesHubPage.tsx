import React from 'react';
import { PageRoute } from '../types';
import { AUDIENCE_PROFILES } from '../data/audiencesData';
import {
  Stethoscope,
  Gavel,
  Briefcase,
  TrendingUp,
  Award,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';

interface AudiencesHubPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AudiencesHubPage: React.FC<AudiencesHubPageProps> = ({ onRouteChange }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'stethoscope':
        return <Stethoscope size={24} className="text-[#004778]" />;
      case 'gavel':
        return <Gavel size={24} className="text-amber-800" />;
      case 'briefcase':
        return <Briefcase size={24} className="text-[#3f6a00]" />;
      case 'trending-up':
        return <TrendingUp size={24} className="text-violet-800" />;
      case 'award':
        return <Award size={24} className="text-rose-800" />;
      default:
        return <Briefcase size={24} />;
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* Hero Banner */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-[#faf9f6] via-[#f4f3f1] to-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#004778] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
            <span>معماری اختصاصی گروه‌های مخاطب مهام</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            مخاطب مهام کیست؟
            <br />
            <span className="text-[#004778]">نقطه آغاز هر مسیر، هویت و جایگاه حرفه‌ای شماست.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            نمی‌توان با یک نسخه مشترک، آینده یک پزشک فوق‌تخصص، یک وکیل دعاوی بین‌المللی یا یک کارآفرین صنعتی را طراحی کرد. مهام با تفکیک عمیق ۵ حوزه تخصصی، مسیرهای متناسب با جایگاه و دارایی هر گروه را بازتعریف می‌کند.
          </p>
        </div>
      </section>

      {/* 5 Distinct Audience Cards */}
      <section className="py-20 bg-white border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {Object.values(AUDIENCE_PROFILES).map((profile) => (
              <div
                key={profile.id}
                className="bg-[#faf9f6] rounded-2xl border border-black/[0.07] p-7 sm:p-10 hover:border-[#004778]/40 transition-all text-right"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Info & Challenges */}
                  <div className="lg:col-span-8 flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-black/[0.05]">
                        {getIcon(profile.iconName)}
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                          {profile.title}
                        </h2>
                        <span className="text-xs font-mono text-slate-400">{profile.subtitle}</span>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-[#004778] mb-4 leading-relaxed">
                      {profile.heroQuote}
                    </p>

                    <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                      {profile.tagline}
                    </p>

                    {/* Challenges mini-list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-black/[0.06]">
                      {profile.challenges.slice(0, 2).map((ch, idx) => (
                        <div key={idx} className="bg-white p-3.5 rounded-xl border border-black/[0.04]">
                          <span className="text-xs font-bold text-slate-800 block mb-1">
                            {ch.title}
                          </span>
                          <span className="text-[11px] text-slate-500 leading-relaxed block">
                            {ch.description.slice(0, 95)}...
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Readiness Index & Jump CTA */}
                  <div className="lg:col-span-4 bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                        <span className="text-xs font-semibold text-slate-500">شاخص انطباق مهام</span>
                        <span className="text-lg font-bold font-mono text-[#65a30d]">
                          {profile.readinessIndex.score}٪
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {profile.readinessIndex.description}
                      </p>

                      <div className="p-3 bg-slate-50 rounded-lg text-[11px] text-slate-500 mb-6">
                        <span className="font-bold text-slate-700 block mb-0.5">هیأت تخصصی نمونه:</span>
                        <span>{profile.sampleDelegation.focus}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRouteChange(profile.route)}
                      className="w-full py-3 px-4 bg-[#004778] hover:bg-[#003860] text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center justify-between shadow-sm"
                    >
                      <span>ورود به پرونده اختصاصی {profile.title.split(' ')[0]}</span>
                      <ArrowLeft size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Audience Advisory Callout */}
      <section className="py-16 bg-[#faf9f6]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              موقعیت شما در هیچ‌کدام از این ۵ گروه به طور کامل جای نمی‌گیرد؟
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              بسیاری از مراجعان ما پرونده‌های ترکیبی دارند (مانند پزشکی که همزمان کارآفرین حوزه سلامت است). موتور تصمیم‌سازی مهام سنجه‌های چندگانه شما را ترکیب و تحلیل می‌کند.
            </p>
            <button
              onClick={() => onRouteChange('decision-engine')}
              className="px-6 py-3 bg-[#004778] hover:bg-[#003860] text-white text-xs font-bold rounded-xl shadow-sm transition-colors inline-flex items-center gap-2"
            >
              <span>ورود به موتور ارزیابی ترکیبی</span>
              <ArrowLeft size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
