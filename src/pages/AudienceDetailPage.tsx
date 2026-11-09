import React from 'react';
import { PageRoute } from '../types';
import { AUDIENCE_PROFILES } from '../data/audiencesData';
import {
  CheckCircle2,
  ArrowLeft,
  ChevronLeft,
  ShieldCheck,
  Plane,
  Calendar,
  Compass,
  AlertCircle,
  FileCheck,
} from 'lucide-react';

interface AudienceDetailPageProps {
  audienceKey: string;
  onRouteChange: (route: PageRoute) => void;
}

export const AudienceDetailPage: React.FC<AudienceDetailPageProps> = ({
  audienceKey,
  onRouteChange,
}) => {
  const profile = AUDIENCE_PROFILES[audienceKey] || AUDIENCE_PROFILES.physicians;

  return (
    <div className="w-full flex flex-col">
      {/* Breadcrumb & Subnav */}
      <div className="bg-[#faf9f6] border-b border-black/[0.05] py-3.5">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onRouteChange('home')}
              className="hover:text-slate-900 transition-colors"
            >
              صفحه اصلی
            </button>
            <span>/</span>
            <button
              onClick={() => onRouteChange('audiences')}
              className="hover:text-slate-900 transition-colors"
            >
              مخاطبان تخصصی
            </button>
            <span>/</span>
            <span className="font-semibold text-[#004778]">{profile.title}</span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            {Object.values(AUDIENCE_PROFILES).map((p) => (
              <button
                key={p.id}
                onClick={() => onRouteChange(p.route)}
                className={`px-2.5 py-1 rounded-md text-[11px] transition-all ${
                  p.id === profile.id
                    ? 'bg-[#004778] text-white font-bold'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/60'
                }`}
              >
                {p.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-14 pb-20 bg-gradient-to-b from-[#faf9f6] via-[#f4f3f1] to-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100/70 text-[#004778] rounded-full text-xs font-semibold mb-4">
              <span>پرونده تخصصی</span>
              <span>·</span>
              <span className="font-mono">{profile.subtitle}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-5">
              {profile.title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#004778] leading-relaxed mb-6">
              «{profile.heroQuote}»
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              {profile.tagline}. مهام با درک عمیق از الزامات رگولاتوری، نظام‌های ارزشیابی و ظرافت‌های اخلاق حرفه‌ای، مسیرهای بین‌المللی این گروه را ساختاربندی می‌کند.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onRouteChange('assessment')}
                className="px-6 py-3 bg-[#004778] hover:bg-[#003860] text-white text-xs font-bold rounded-xl shadow-sm transition-all inline-flex items-center justify-center gap-2"
              >
                <ShieldCheck size={16} className="text-lime-400" />
                <span>شروع ارزیابی مدارک و شرایط این گروه</span>
              </button>
              <button
                onClick={() => onRouteChange('contact')}
                className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition-all text-center"
              >
                درخواست گفتگوی محرمانه تخصصی
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Pain Points */}
      <section className="py-20 bg-white border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-[#004778] uppercase tracking-wider block mb-2">
              تحلیل میدانی مسائل واقعی
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              دغدغه‌های اصلی {profile.title} چیست؟
            </h2>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              مشاوره‌های عمومی و سطحی معمولاً متوجه این چالش‌های عمیق ساختاری نمی‌شوند:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.challenges.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06] hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <AlertCircle size={18} className="text-amber-700 shrink-0" />
                    <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                {item.metricLabel && (
                  <div className="pt-3 border-t border-black/[0.05] text-[11px] font-mono font-bold text-[#004778]">
                    {item.metricLabel}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Strategic Approach for this Cohort */}
      <section className="py-20 bg-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold text-[#65a30d] uppercase tracking-wider block mb-2">
              متدولوژی اختصاصی مهام
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              فرآیند سیستماتیک شناخت و توسعه برای {profile.title}
            </h2>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              پاسخ مهام بر اساس ۴ گام شفاف و تضمین‌شده حقوقی طراحی شده است:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profile.approaches.map((app, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-black/[0.07] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-mono font-bold text-[#004778] block mb-3">
                    {app.stepNumber}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{app.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{app.description}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#65a30d] font-semibold">
                  <CheckCircle2 size={14} />
                  <span>استاندارد تأییدشده مهام</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Delegation Highlight for this Profile */}
      <section className="py-20 bg-white border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="bg-gradient-to-br from-[#0a1128] to-[#002f52] rounded-3xl p-8 sm:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-lime-400 font-semibold mb-4">
                  <Plane size={14} />
                  <span>اعزام هیأت تخصصی مهام</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug">
                  {profile.sampleDelegation.focus}
                </h3>

                <div className="flex items-center gap-4 text-xs text-slate-300 font-medium mb-6">
                  <span className="flex items-center gap-1.5">
                    <Compass size={14} className="text-lime-400" />
                    <span>مقصد: {profile.sampleDelegation.destination}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-lime-400" />
                    <span>مدت: {profile.sampleDelegation.duration}</span>
                  </span>
                </div>

                <div className="space-y-2.5">
                  <span className="text-xs font-bold text-slate-200 block mb-1">
                    دستاوردهای کلیدی این برنامه میدانی:
                  </span>
                  {profile.sampleDelegation.outcomes.map((out, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 leading-relaxed">
                      <CheckCircle2 size={16} className="text-lime-400 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-300 block mb-2">
                    ارزیابی انطباق ویژه این گروه
                  </span>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-mono font-bold text-lime-400">
                      {profile.readinessIndex.score}٪
                    </span>
                    <span className="text-xs text-slate-300">امتیاز پایدارپذیری</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {profile.readinessIndex.description}
                  </p>
                </div>

                <button
                  onClick={() => onRouteChange('assessment')}
                  className="w-full py-3 px-4 bg-[#65a30d] hover:bg-[#52840a] text-white text-xs font-bold rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-2"
                >
                  <span>ثبت درخواست ارزیابی اولیه برای این مسیر</span>
                  <ArrowLeft size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
