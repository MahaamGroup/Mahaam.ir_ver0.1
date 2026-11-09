import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  Compass,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Filter,
  Layers,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';

interface DiscoveryJourneyPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const DiscoveryJourneyPage: React.FC<DiscoveryJourneyPageProps> = ({ onRouteChange }) => {
  const [selectedObjective, setSelectedObjective] = useState<string>('career');

  const objectiveDetails: Record<string, { title: string; challenge: string; solution: string }> = {
    career: {
      title: 'ارتقای حرفه‌ای و معادل‌سازی جایگاه',
      challenge: 'بسیاری از متخصصان به دلیل ناآگاهی از نظام‌های ارزشیابی، ویزاهای عمومی را انتخاب می‌کنند که منجر به افول شغلی می‌شود.',
      solution: 'بررسی مستقیم نظام‌های ارزشیابی مقصد، تطبیق لاگ‌بوک و ساعات کاری و انتخاب ویزای نخبگی یا فوق‌تخصصی.',
    },
    capital: {
      title: 'حفظ و صیانت از سرمایه خانوادگی',
      challenge: 'خروج شتاب‌زده سرمایه بدون در نظر گرفتن مالیات بر عایدی سرمایه (CGT) و مالیات بر ارث در کشورهای غربی.',
      solution: 'طراحی ساختار تراست، تأسیس دفاتر مدیریت دارایی (Family Office) و حساب‌های ارزی صلب در حوزه‌های امن قضایی.',
    },
    expansion: {
      title: 'جهانی‌سازی کسب‌وکار و تأسیس شعبه',
      challenge: 'هزینه‌های گزاف ثبت شرکت صوری در کشورهای خارجی بدون داشتن بازار واقعی و جریان درآمدی ارزی.',
      solution: 'تست بازار پیش از ثبت، اتصال به زنجیره تأمین، اعتبارسنجی خریداران B2B و اخذ ویزای کارآفرینی حقیقی.',
    },
    family: {
      title: 'آینده فرزندان و آرامش پایدار خانواده',
      challenge: 'تغییر ناگهانی محیط فرهنگی و آموزشی بدون آمادگی زبانی و اجتماعی که به بحران‌های هویتی فرزندان می‌انجامد.',
      solution: 'بررسی میدانی نظام‌های آموزشی، انتخاب شهرهای دارای بافت حمایتی و برنامه‌ریزی گام‌به‌گام جابجایی.',
    },
  };

  const activeDetail = objectiveDetails[selectedObjective];

  return (
    <div className="w-full flex flex-col">
      {/* Hero Banner */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-[#faf9f6] via-[#f4f3f1] to-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#004778] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
            <span>مسیر استراتژیک اول مهام: غربالگری عقلانی</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            قبل از انتخاب مسیر،
            <br />
            <span className="text-[#004778]">باید فرصت‌های مناسب خود را بشناسید.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            کشف فرصت در مهام، یک رویکرد تحلیلی برای عبور از هیجانات زودگذر، وعده‌های تبلیغاتی و مقایسه چندجانبه گزینه‌هاست تا هر ریال و روز سرمایه‌گذاری شما با بالاترین بهره‌وری صرف شود.
          </p>
        </div>
      </section>

      {/* Why Opportunity Discovery Matters */}
      <section className="py-20 bg-white border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-[#004778] uppercase tracking-wider block mb-2">
              اصول تصمیم‌گیری عقلانی
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              چرا شناخت فرصت‌ها پیش از اقدام مهم است؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#004778] flex items-center justify-center mb-4">
                <Filter size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">همه فرصت‌ها برای همه افراد نیستند</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                مسیری که برای یک برنامه‌نویس جوان فوق‌العاده است، ممکن است برای یک جراح با ۲۰ سال سابقه یا یک کارخانه‌دار صنعتی یک خطای جبران‌ناپذیر باشد.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <AlertTriangle size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">اطلاعات زیاد به تصمیم بهتر ختم نمی‌شود</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                در عصر شبکه‌های اجتماعی، بمباران محتوای مهاجرتی سطحی باعث فلج تصمیم‌گیری (Analysis Paralysis) و سردرگمی میان ده‌ها کشور می‌شود.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#3f6a00] flex items-center justify-center mb-4">
                <Layers size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">مقایسه همزمان چندجانبه</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                تصمیم درست زمانی شکل می‌گیرد که مؤلفه‌های مالی، حقوقی، اقامتی و اجتماعی همزمان در کنار یکدیگر در قالب سناریو سنجیده شوند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Objective Explorer */}
      <section className="py-20 bg-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-[#65a30d] uppercase tracking-wider block mb-2">
              کاوشگر تعاملی اهداف
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              اولویت اصلی شما در کاوش فرصت‌های بین‌المللی چیست؟
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { id: 'career', label: 'توسعه حرفه‌ای و بالینی' },
              { id: 'capital', label: 'صیانت و رشد سرمایه' },
              { id: 'expansion', label: 'توسعه بازار شرکتی' },
              { id: 'family', label: 'آینده خانواده و فرزندان' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedObjective(tab.id)}
                className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                  selectedObjective === tab.id
                    ? 'bg-[#004778] text-white border-[#004778] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-black/[0.07] p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-3">{activeDetail.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-4 rounded-xl bg-red-50/60 border border-red-100">
                <span className="text-xs font-bold text-red-800 block mb-1">
                  دام و چالش رایج در این حوزه:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">{activeDetail.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                <span className="text-xs font-bold text-emerald-800 block mb-1">
                  پاسخ و متدولوژی اختصاصی مهام:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">{activeDetail.solution}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
              <span className="text-xs text-slate-500">
                می‌خواهید فرصت‌های خاص متناسب با رزومه شما تحلیل شود؟
              </span>
              <button
                onClick={() => onRouteChange('assessment')}
                className="py-2.5 px-5 bg-[#004778] hover:bg-[#003860] text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-2"
              >
                <span>شروع غربالگری و کشف فرصت</span>
                <ArrowLeft size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
