import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  CheckCircle2,
  ArrowLeft,
  FileText,
  Search,
  Compass,
  Briefcase,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';

interface HowItWorksPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onRouteChange }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      badge: 'گام نخست',
      title: 'شناخت اولیه و غربالگری چندبعدی',
      subtitle: 'Initial Discovery & Background Audit',
      description:
        'نقطه شروع هر همکاری، شناخت دقیق نقطه عزیمت است. ما بدون پیش‌داوری، دارایی‌های مادی و معنوی، اهداف فردی و خانوادگی و محدودیت‌های زمانی شما را ممیزی می‌کنیم.',
      deliverables: [
        'تکمیل پرسشنامه جامع اولیه صلاحیت‌سنجی',
        'ممیزی مدارک علمی، پروانه‌ها و سوابق بیمه/مدیریتی',
        'تعیین نقاط قوت و گره‌های احتمالی پرونده در نظام‌های بین‌المللی',
        'جلسه نخست مشاوره‌ای جهت تبیین افق و خطوط قرمز',
      ],
      duration: '۳ تا ۷ روز کاری',
      icon: Search,
    },
    {
      num: 2,
      badge: 'گام دوم',
      title: 'ارزیابی شرایط و تحلیل ماتریس ۴ لایه',
      subtitle: '4-Layer Multidimensional Assessment',
      description:
        'شرایط شما روی ماتریس اختصاصی مهام قرار می‌گیرد. تطبیق همزمان قوانین اقامت، رژیم‌های مالیاتی مبدأ و مقصد، پایداری سرمایه و شانس پذیرش نهادهای رسمی انجام می‌شود.',
      deliverables: [
        'تحلیل ریسک حقوقی و تطبیق با مقررات جاری کشور مقصد',
        'مدل‌سازی مالیاتی انتقال سرمایه و پیشگیری از جرایم مالیاتی',
        'تدوین گزارش سناریوهای سه‌گانه (سناریوی بهینه، آلترناتیو و احتیاطی)',
        'تعیین بودجه واقعی مورد نیاز بدون هزینه‌های پنهان',
      ],
      duration: '۱۰ تا ۱۴ روز کاری',
      icon: FileText,
    },
    {
      num: 3,
      badge: 'گام سوم',
      title: 'تجربه میدانی و اعزام در هیأت‌های تخصصی',
      subtitle: 'Strategic Immersion & On-site Reality Check',
      description:
        'پیش از تعهد مالی سنگین یا امضای قراردادهای نهایی، با اعزام در قالب هیأت‌های تخصصی یا تجاری مهام، محیط واقعی، بیمارستان‌ها، پارک‌های فناوری و همتایان بین‌المللی را از نزدیک لمس می‌کنید.',
      deliverables: [
        'هماهنگی دیدارهای دوجانبه (B2B) با مدیران و کانون‌های رسمی مقصد',
        'بازدیدهای تخصصی از مراکز درمانی، شرکت‌ها و پارک‌های دانشگاهی',
        'گفتگوی مستقیم با وکلای محلی و متخصصان مقیم',
        'تأیید نهایی یا اصلاح مسیر بر اساس شواهد عینی',
      ],
      duration: 'مطابق تقویم هیأت‌ها (۴ تا ۷ روز سفر کاری)',
      icon: Compass,
    },
    {
      num: 4,
      badge: 'گام چهارم',
      title: 'طراحی گام بعدی، اجرای صلب و استقرار',
      subtitle: 'Execution Architecture & Soft Landing',
      description:
        'پس از تثبیت مسیر، پروتکل‌های حقوقی تدوین شده و مستندات پرونده با نظارت وکلای دارای پروانه مقصد نهایی ثبت می‌شود. ما تا استقرار کامل و عبور از چالش‌های اولیه در کنار شما هستیم.',
      deliverables: [
        'تنظیم دادخواست‌های حقوقی و بسته‌های رسمی اداره مهاجرت/ثبت شرکت',
        'افتتاح حساب‌های بانکی معتبر و اخذ شناسه‌های مالیاتی',
        'تسهیل الحاق به جامعه همتایان و نظام‌های تخصصی میزبان',
        'پایش پرونده و پشتیبانی مداوم در صورت بروز استعلامات اداری',
      ],
      duration: 'بسته به نوع ویزا یا ثبت شرکتی (۳ تا ۱۲ ماه)',
      icon: Briefcase,
    },
  ];

  const current = steps.find((s) => s.num === activeStep) || steps[0];

  return (
    <div className="w-full flex flex-col">
      {/* Hero Banner */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-[#faf9f6] via-[#f4f3f1] to-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#004778] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
            <span>متدولوژی سیستماتیک هدایت تصمیم مهام</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            هر مسیر، با شناخت درست شروع می‌شود.
            <br />
            <span className="text-[#004778]">۴ مرحله از نخستین تحلیل تا استقرار پایدار</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            ما باور داریم که فرآیندهای بین‌المللی نیازمند دیسیپلین، انضباط کاری و شفافیت حداکثری هستند. چارچوب ۴ مرحله‌ای مهام، خطای انسانی و اتلاف سرمایه را به حداقل می‌رساند.
          </p>
        </div>
      </section>

      {/* Interactive 4-Step Navigator */}
      <section className="py-20 bg-white border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {steps.map((s) => {
              const Icon = s.icon;
              const isActive = s.num === activeStep;
              return (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(s.num)}
                  className={`p-5 rounded-2xl text-right transition-all border flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#004778] text-white border-[#004778] shadow-md'
                      : 'bg-[#faf9f6] text-slate-700 border-black/[0.06] hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-lime-300' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {s.badge}
                    </span>
                    <Icon size={18} className={isActive ? 'text-lime-400' : 'text-slate-400'} />
                  </div>
                  <div>
                    <span className="text-xs font-mono opacity-80 block mb-0.5">۰{s.num}</span>
                    <h3 className="text-sm font-bold leading-snug">{s.title}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed View */}
          <div className="bg-[#faf9f6] rounded-2xl border border-black/[0.07] p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 text-right">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-bold font-mono text-[#004778]">۰{current.num}</span>
                  <div>
                    <span className="text-xs font-bold text-[#65a30d] uppercase tracking-wider block">
                      {current.badge}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{current.title}</h2>
                  </div>
                </div>

                <p className="text-sm text-slate-500 font-mono mb-4">{current.subtitle}</p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  {current.description}
                </p>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 font-semibold mb-6">
                  <span>بازه زمانی پیش‌بینی‌شده این مرحله:</span>
                  <span className="text-[#004778] font-bold">{current.duration}</span>
                </div>
              </div>

              {/* Deliverables Checklist Column */}
              <div className="lg:col-span-5 bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 pb-3 mb-4 border-b border-slate-100 flex items-center justify-between">
                  <span>خروجی‌ها و اقدامات این مرحله</span>
                  <ShieldCheck size={16} className="text-[#65a30d]" />
                </h4>

                <ul className="space-y-3.5">
                  {current.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2 size={16} className="text-[#65a30d] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onRouteChange('assessment')}
                    className="w-full py-2.5 px-4 bg-[#004778] hover:bg-[#003860] text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <span>آغاز مرحله اول با تکمیل پرسشنامه</span>
                    <ArrowLeft size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sequential Process Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-[#004778] uppercase tracking-wider block mb-2">
              مدیریت ریسک هوشمند
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              چرا این فرآیند مرحله‌ای و غیرقابل تعجیل است؟
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              جهش از روی هر کدام از این مراحل، ریسک پرونده را به صورت تصاعدی بالا می‌برد. تفکیک مراحل، حق انصراف یا تغییر مسیر را برای متقاضی در هر گام محفوظ می‌دارد.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
              <h3 className="text-base font-bold text-slate-900 mb-2">جلوگیری از زیان‌های غیرقابل بازگشت</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                بسیاری از افراد با ثبت شرکت در کشور اشتباه، مشمول پرداخت مالیات‌های کلان سالانه حتی در صورت عدم فعالیت می‌شوند. شناخت اولیه از این فاجعه جلوگیری می‌کند.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
              <h3 className="text-base font-bold text-slate-900 mb-2">آرامش روانی خانواده</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                دیدار میدانی و هیأت‌های تجاری، تصویر شفاف و بدون روتوشی از نظام آموزشی، بهداشت، مسکن و فرهنگ جامعه هدف برای همسر و فرزندان ترسیم می‌کند.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
              <h3 className="text-base font-bold text-slate-900 mb-2">تسلط حقوقی در مواجهه با قوانین</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                وقتی پرونده مستند، منطبق با استانداردهای رگولاتور مقصد و بدون اطلاعات نادرست تدوین شود، احتمال رد (Refusal) به زیر ۲ درصد تقلیل می‌یابد.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
