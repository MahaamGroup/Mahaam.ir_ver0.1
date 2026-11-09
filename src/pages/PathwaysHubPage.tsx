import React from 'react';
import { PageRoute } from '../types';
import { Compass, Plane, Grid3X3, Cpu, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface PathwaysHubPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const PathwaysHubPage: React.FC<PathwaysHubPageProps> = ({ onRouteChange }) => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Banner */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-[#faf9f6] via-[#f4f3f1] to-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#004778] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
            <span>معماری مسیرهای راهبردی بین‌المللی مهام</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            برای تصمیم‌های مهم،
            <br />
            <span className="text-[#004778]">ابتدا مسیر مناسب خود را بشناسید.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            هیچ مقصدی به خودی خود خوب یا بد نیست؛ سازگاری مقصد با شرایط، اهداف و دارایی‌های شماست که موفقیت را تعیین می‌کند. مهام سه بستر عملیاتی برای سنجش و ورود به مسیرهای بین‌المللی فراهم کرده است.
          </p>
        </div>
      </section>

      {/* Pathways Core Modules */}
      <section className="py-20 bg-white border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pathway 1: Discovery */}
            <div className="bg-[#faf9f6] rounded-2xl border border-black/[0.07] p-8 sm:p-10 text-right flex flex-col justify-between hover:border-[#004778]/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#004778] flex items-center justify-center mb-6">
                  <Compass size={24} />
                </div>
                <div className="text-xs font-bold text-[#65a30d] uppercase tracking-wider mb-2">
                  مسیر اول: غربالگری عقلانی
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">کشف فرصت‌های راهبردی</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  قبل از هر اقدام پرهزینه، فرصت‌های متناسب با خود را بشناسید. تفکیک فرصت‌های واقعی از سراب‌های تبلیغاتی مهاجرتی و تحلیل سناریوهای چندجانبه سرمایه، کار و خانواده.
                </p>

                <ul className="space-y-2.5 mb-8 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#65a30d]" />
                    <span>رفع سردرگمی میان ده‌ها گزینه اقامتی و شرکتی</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#65a30d]" />
                    <span>ارزیابی تطبیقی قوانین مالیاتی و رژیم‌های بانکی</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#65a30d]" />
                    <span>برنامه‌ریزی استراتژیک بر اساس توان مالی و سوابق واقعی</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onRouteChange('pathways/discovery')}
                className="w-full py-3 px-4 bg-[#004778] hover:bg-[#003860] text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center justify-between"
              >
                <span>ورود به فرآیند کشف فرصت‌ها</span>
                <ArrowLeft size={14} />
              </button>
            </div>

            {/* Pathway 2: Living Experiences & Delegations */}
            <div className="bg-[#faf9f6] rounded-2xl border border-black/[0.07] p-8 sm:p-10 text-right flex flex-col justify-between hover:border-[#004778]/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-lime-100 text-[#3f6a00] flex items-center justify-center mb-6">
                  <Plane size={24} />
                </div>
                <div className="text-xs font-bold text-[#65a30d] uppercase tracking-wider mb-2">
                  مسیر دوم: آزمون مستقیم میدانی
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  تجارب زیسته و هیأت‌های تجاری
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  بعضی تصمیم‌ها با شنیدن و خواندن گرفته نمی‌شوند؛ با تجربه بهتر گرفته می‌شوند. اعزام در قالب هیأت‌های تخصصی، تجاری و توریستی به مقاصد سوئیس، آلمان، انگلستان، فرانسه و امارات.
                </p>

                <ul className="space-y-2.5 mb-8 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#65a30d]" />
                    <span>دیدار رو در رو با کارفرمایان، همتایان بالینی و اتاق‌های بازرگانی</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#65a30d]" />
                    <span>بررسی میدانی مسکن، مدارس، بیمارستان‌ها و بافت اجتماعی</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#65a30d]" />
                    <span>تصمیم‌گیری نهایی با اطمینان ۱۰۰٪ قلبی و استراتژیک</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onRouteChange('pathways/experiences')}
                className="w-full py-3 px-4 bg-[#004778] hover:bg-[#003860] text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center justify-between"
              >
                <span>مشاهده تقویم و برنامه‌های هیأت‌های تجاری</span>
                <ArrowLeft size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Engine Link Strip */}
      <section className="py-16 bg-[#faf9f6]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#004778] to-[#002f52] rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-right max-w-xl">
              <span className="text-xs font-mono text-lime-300 block mb-1">DECISION TOOLS</span>
              <h3 className="text-xl font-bold mb-2">ماتریس تصمیم‌گیری و ارزیابی شرایط</h3>
              <p className="text-xs text-slate-200 leading-relaxed">
                چهار مؤلفه «هدف اصلی»، «وضعیت فعلی»، «ظرفیت‌ها و دارایی‌ها» و «معیارهای ریسک» خود را در موتور هوشمند مهام بسنجید.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => onRouteChange('decision-matrix')}
                className="flex-1 md:flex-none px-5 py-2.5 bg-white text-[#004778] hover:bg-slate-100 text-xs font-bold rounded-xl transition-colors"
              >
                ماتریس ۴ بعد
              </button>
              <button
                onClick={() => onRouteChange('decision-engine')}
                className="flex-1 md:flex-none px-5 py-2.5 bg-[#65a30d] hover:bg-[#52840a] text-white text-xs font-bold rounded-xl transition-colors"
              >
                موتور شبیه‌سازی مسیر
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
