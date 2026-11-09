import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  Compass,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  BarChart3,
  FileText,
  RotateCcw,
  Plane,
} from 'lucide-react';

interface DecisionEnginePageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const DecisionEnginePage: React.FC<DecisionEnginePageProps> = ({ onRouteChange }) => {
  const [step, setStep] = useState<number>(1);
  const [cohort, setCohort] = useState<string>('executives');
  const [goal, setGoal] = useState<string>('career');
  const [stage, setStage] = useState<string>('comparison');
  const [selectedCriteria, setSelectedCriteria] = useState<string[]>([
    'capital_safety',
    'iran_travel',
  ]);
  const [timeline, setTimeline] = useState<string>('medium');

  const toggleCriterion = (id: string) => {
    if (selectedCriteria.includes(id)) {
      setSelectedCriteria(selectedCriteria.filter((c) => c !== id));
    } else {
      setSelectedCriteria([...selectedCriteria, id]);
    }
  };

  const getReportData = () => {
    switch (cohort) {
      case 'physicians':
        return {
          title: 'پرونده پزشکی و توسعه بالینی فرامرزی',
          suitability: 94,
          primaryRoute: 'معادل‌سازی مستقیم در کانتون‌های سوئیس / بورد تخصصی GMC انگلستان',
          secondaryRoute: 'فلوشیپ‌های تحقیقاتی بیمارستانی آلمان با پشتیبانی هیأت سلامت مهام',
          travelFeasibility: 'بسیار بالا با حفظ حضور متناوب در ایران',
          estimatedTimeline: '۴ الی ۸ ماه تا تثبیت اولیه',
          recommendedDelegation: 'هیأت فوق‌تخصصی جراحی و سلامت (زوریخ و مونیخ)',
          criticalAdvice:
            'اکیداً از ثبت‌نام در دوره‌های کارآموزی بدون مجوز خودداری فرمایید؛ تمرکز پرونده شما باید بر اعتبارسنجی لاگ‌بوک جراحی و مقالات بین‌المللی باشد.',
        };
      case 'attorneys':
        return {
          title: 'پرونده حقوقی و داوری بین‌المللی',
          suitability: 96,
          primaryRoute: 'تفاهم‌نامه‌های همکاری متقابل Best-Friends با موسسات حقوقی لندن و ژنو',
          secondaryRoute: 'ثبت تراست‌های ارزی و خدمات داوری دعاوی تجاری در مرکز DIAC / ICC',
          travelFeasibility: '۱۰۰٪ حفظ پروانه و استقلال کاری در ایران',
          estimatedTimeline: '۳ الی ۶ ماه تا اولین ارجاع پرونده',
          recommendedDelegation: 'هیأت داوری تجاری و ساختار تراست (لندن و پاریس)',
          criticalAdvice:
            'ایجاد ساختار پرداخت ارزی مستقیم حق‌الوکاله‌ها طبق الزامات FATCA/AML اولین گام صلب در مصونیت فعالیت شماست.',
        };
      case 'executives':
        return {
          title: 'پرونده رهبری سازمان و هلدینگ‌سازی منطقه‌ای',
          suitability: 92,
          primaryRoute: 'تأسیس دفتر مدیریت دارایی در مرکز مالی DIFC دبی و ویزای انتقال درون‌شرکتی',
          secondaryRoute: 'تأسیس هلدینگ در هلند/سنگاپور جهت تسهیل ورود کالا و زنجیره تأمین',
          travelFeasibility: 'آزادی کامل تردد بدون شرط اقامت اجباری پیوسته',
          estimatedTimeline: '۲ الی ۵ ماه تا راه‌اندازی دفتر عملیاتی',
          recommendedDelegation: 'هیأت هلدینگ‌سازی و بانکداری شرکتی (دبی و ابوظبی)',
          criticalAdvice:
            'انتقال سرمایه باید از طریق کانال‌های شرکتی ثبت‌شده با گواهی ممیزی رسمی انجام شود تا از مسدودی حساب‌های بانکی پیشگیری گردد.',
        };
      case 'founders':
        return {
          title: 'پرونده کارآفرینی و مقیاس‌پذیری فناوری',
          suitability: 91,
          primaryRoute: 'ویزای استارتاپ و نوآوری آلمان / انگلستان (Innovator Founder Visa)',
          secondaryRoute: 'ثبت شرکت تابعه در هلند و الحاق به شتاب‌دهنده‌های High Tech Campus',
          travelFeasibility: 'امکان مدیریت مشترک با تیم فنی در ایران',
          estimatedTimeline: '۵ الی ۹ ماه تا استقرار',
          recommendedDelegation: 'هیأت کارآفرینان و توسعه فناوری (آمستردام و برلین)',
          criticalAdvice:
            'حفظ مالکیت فکری (IP) پیش از هرگونه مذاکره با سرمایه‌گذاران خارجی باید در اداره بین‌المللی WIPO به ثبت برسد.',
        };
      case 'specialists':
      default:
        return {
          title: 'پرونده نخبگی علمی و پژوهش‌های راهبردی',
          suitability: 97,
          primaryRoute: 'ویزای استعداد درخشان بریتانیا (Global Talent) تحت آکادمی سلطنتی (Royal Society)',
          secondaryRoute: 'ویزای نخبگی EB-1A / NIW ایالات متحده بدون نیاز به پیشنهاد کارفرما',
          travelFeasibility: 'اقامت دائم با حق کامل کار و تحصیل خانواده',
          estimatedTimeline: '۳ الی ۶ ماه تا صدور ویزا',
          recommendedDelegation: 'هیأت دانشگاهی و کلاسترهای پژوهشی (کمبریج و آکسفورد)',
          criticalAdvice:
            'گردآوری توصیه‌نامه‌های مستقل بین‌المللی از دانشمندان تراز اول، برگ برنده اصلی پرونده نخبگی شما خواهد بود.',
        };
    }
  };

  const report = getReportData();

  return (
    <div className="w-full flex flex-col">
      {/* Hero Banner */}
      <section className="pt-16 pb-16 bg-gradient-to-b from-[#faf9f6] via-[#f4f3f1] to-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#004778] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
            <span>ابزار تعاملی اختصاصی مهام: موتور ارزیابی و شبیه‌سازی مسیر</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-5">
            تصمیم‌های مهم،
            <br />
            <span className="text-[#004778]">با شناخت بهتر شروع می‌شوند.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            با تکمیل سنجه‌های ۵ مرحله‌ای زیر، موقعیت و اولویت‌های خود را مشخص فرمایید تا موتور تصمیم‌سازی مهام، شاخص انطباق، مسیر پیشنهادی و الزامات محرمانه پرونده شما را شبیه‌سازی کند.
          </p>
        </div>
      </section>

      {/* Main Interactive Flow */}
      <section className="py-16 bg-white border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form Steps Column */}
            <div className="lg:col-span-7 bg-[#faf9f6] rounded-2xl border border-black/[0.07] p-7 sm:p-10 text-right">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-black/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#004778] text-white text-xs font-bold font-mono flex items-center justify-center">
                    {step}
                  </span>
                  <span className="text-xs font-bold text-slate-800">
                    {step === 1 && 'انتخاب جایگاه حرفه‌ای'}
                    {step === 2 && 'مهم‌ترین هدف استراتژیک'}
                    {step === 3 && 'مرحله تصمیم‌گیری و زمان‌بندی'}
                    {step === 4 && 'معیارهای حیاتی و خطوط قرمز'}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">گام {step} از ۴</span>
              </div>

              {/* Step 1: Cohort Selection */}
              {step === 1 && (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    شما در کدام گروه حرفه‌ای قرار می‌گیرید؟
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    این انتخاب، الگوریتم ارزیابی را به قوانین مربوط به صنف شما تنظیم می‌کند.
                  </p>

                  <div className="space-y-3">
                    {[
                      { id: 'physicians', title: 'پزشکان و متخصصان سلامت', desc: 'جراحان، دندانپزشکان، پزشکان عمومی و داروسازان' },
                      { id: 'attorneys', title: 'وکلا و متخصصان حقوقی', desc: 'وکلای پایه یک، مشاوران حقوقی و داوران دعاوی' },
                      { id: 'executives', title: 'مدیران ارشد و رهبران سازمان‌ها', desc: 'مدیران عامل، اعضای هیئت‌مدیره و رهبران صنایع' },
                      { id: 'founders', title: 'صاحبان کسب‌وکار و کارآفرینان', desc: 'موسسان استارتاپ‌ها، تجار و تولیدکنندگان' },
                      { id: 'specialists', title: 'متخصصان و پژوهشگران نخبگی', desc: 'دانشمندان، نخبگان فناوری و اساتید دانشگاهی' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setCohort(item.id)}
                        className={`w-full p-4 rounded-xl text-right transition-all border flex items-center justify-between ${
                          cohort === item.id
                            ? 'bg-white border-[#004778] ring-2 ring-[#004778]/10 shadow-sm'
                            : 'bg-white/60 border-black/[0.05] hover:bg-white'
                        }`}
                      >
                        <div>
                          <span className="text-sm font-bold text-slate-900 block">{item.title}</span>
                          <span className="text-xs text-slate-500 block mt-0.5">{item.desc}</span>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            cohort === item.id ? 'border-[#004778] bg-[#004778]' : 'border-slate-300'
                          }`}
                        >
                          {cohort === item.id && <span className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Goal Selection */}
              {step === 2 && (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    مهم‌ترین هدف شما برای بررسی مسیر چیست؟
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    هدف غایی، وزن‌دهی میان مقاصد جغرافیایی و نوع ویزا را تعیین می‌کند.
                  </p>

                  <div className="space-y-3">
                    {[
                      { id: 'career', title: 'توسعه حرفه‌ای و معادل‌سازی جایگاه شغلی', desc: 'ادامه طبابت، وکالت یا کار در سازمان‌های تراز اول جهانی' },
                      { id: 'capital', title: 'حفظ دارایی، مصونیت ارزی و تراست مالی', desc: 'جلوگیری از افت ارزش دارایی‌ها و افتتاح حساب‌های صلب' },
                      { id: 'expansion', title: 'گسترش بازار بین‌المللی و جذب سرمایه', desc: 'تأسیس شعبه و صادرات خدمات به اروپا و منطقه' },
                      { id: 'family', title: 'آرامش خانوادگی و تحصیل فرزندان', desc: 'استقرار پایدار در محیط‌های آموزشی و اجتماعی پیشرو' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setGoal(item.id)}
                        className={`w-full p-4 rounded-xl text-right transition-all border flex items-center justify-between ${
                          goal === item.id
                            ? 'bg-white border-[#004778] ring-2 ring-[#004778]/10 shadow-sm'
                            : 'bg-white/60 border-black/[0.05] hover:bg-white'
                        }`}
                      >
                        <div>
                          <span className="text-sm font-bold text-slate-900 block">{item.title}</span>
                          <span className="text-xs text-slate-500 block mt-0.5">{item.desc}</span>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            goal === item.id ? 'border-[#004778] bg-[#004778]' : 'border-slate-300'
                          }`}
                        >
                          {goal === item.id && <span className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Decision Stage & Timeline */}
              {step === 3 && (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    اکنون در کدام مرحله از تصمیم‌گیری قرار دارید؟
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    این امر به ما نشان می‌دهد چقدر اطلاعات اولیه نیاز دارید یا آماده اجرای فوری هستید.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      { id: 'exploration', title: 'در حال جمع‌آوری اطلاعات اولیه و ارزیابی شانس‌ها', desc: 'هنوز کشور خاصی انتخاب نشده و به دنبال شناخت افق‌ها هستم.' },
                      { id: 'comparison', title: 'در حال مقایسه چند کشور و مسیر مشخص', desc: 'بین ۲ تا ۳ گزینه مردد هستم و نیازمند تحلیل مقایسه‌ای هستم.' },
                      { id: 'execution', title: 'آماده اقدام قطعی و انتخاب نهاد معتمد اجرایی', desc: 'تصمیم نهایی گرفته شده و به دنبال ساختارسازی صلب هستم.' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setStage(item.id)}
                        className={`w-full p-4 rounded-xl text-right transition-all border flex items-center justify-between ${
                          stage === item.id
                            ? 'bg-white border-[#004778] ring-2 ring-[#004778]/10 shadow-sm'
                            : 'bg-white/60 border-black/[0.05] hover:bg-white'
                        }`}
                      >
                        <div>
                          <span className="text-sm font-bold text-slate-900 block">{item.title}</span>
                          <span className="text-xs text-slate-500 block mt-0.5">{item.desc}</span>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            stage === item.id ? 'border-[#004778] bg-[#004778]' : 'border-slate-300'
                          }`}
                        >
                          {stage === item.id && <span className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                      </button>
                    ))}
                  </div>

                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    افق زمانی مدنظر برای دستیابی به اولین خروجی ملموس:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'urgent', label: 'کمتر از ۶ ماه' },
                      { id: 'medium', label: '۶ الی ۱۲ ماه' },
                      { id: 'long', label: 'بیش از ۱ سال' },
                    ].map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setTimeline(t.id)}
                        className={`py-2 px-3 text-xs font-bold rounded-xl border text-center transition-all ${
                          timeline === t.id
                            ? 'bg-[#004778] text-white border-[#004778]'
                            : 'bg-white text-slate-700 border-slate-200'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Key Criteria & Constraints */}
              {step === 4 && (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    معیارهای کلیدی و خطوط قرمز شما کدامند؟
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    موارد حائز اهمیت را تیک بزنید (امکان انتخاب همزمان چند گزینه):
                  </p>

                  <div className="space-y-3">
                    {[
                      { id: 'capital_safety', title: 'امنیت ۱۰۰٪ سرمایه و پیشگیری از بلوکه شدن ارزی' },
                      { id: 'iran_travel', title: 'حفظ امکان تردد پیوسته و عدم الزام به اقامت ۶ ماهه ممتد' },
                      { id: 'no_exam', title: 'عدم نیاز به شرکت در آزمون‌های زبانی یا علمی دشوار' },
                      { id: 'passport', title: 'امکان اخذ پاسپورت دوم یا اقامت دائم قطعی در بازه مشخص' },
                      { id: 'family_inclusion', title: 'پوشش همزمان همسر و فرزندان در همان گام نخست' },
                    ].map((crit) => {
                      const isSelected = selectedCriteria.includes(crit.id);
                      return (
                        <button
                          key={crit.id}
                          onClick={() => toggleCriterion(crit.id)}
                          className={`w-full p-3.5 rounded-xl text-right transition-all border flex items-center justify-between ${
                            isSelected
                              ? 'bg-white border-[#65a30d] ring-1 ring-[#65a30d]'
                              : 'bg-white/60 border-black/[0.05] hover:bg-white'
                          }`}
                        >
                          <span className="text-xs sm:text-sm font-semibold text-slate-800">
                            {crit.title}
                          </span>
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                              isSelected ? 'bg-[#65a30d] border-[#65a30d] text-white' : 'border-slate-300'
                            }`}
                          >
                            {isSelected && <CheckCircle2 size={14} />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Navigation Controls between Steps */}
              <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center justify-between">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1.5"
                  >
                    <ArrowRight size={14} />
                    <span>مرحله قبلی</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    className="px-6 py-2.5 bg-[#004778] hover:bg-[#003860] text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>گام بعدی</span>
                    <ArrowLeft size={14} />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="px-6 py-2.5 bg-[#65a30d] hover:bg-[#52840a] text-white text-xs font-bold rounded-xl transition-all inline-flex items-center gap-1.5 shadow-md"
                  >
                    <Sparkles size={14} />
                    <span>به‌روزرسانی شبیه‌ساز گزارش</span>
                  </button>
                )}
              </div>
            </div>

            {/* Simulated Live Strategic Report Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="bg-white rounded-2xl border border-black/[0.08] p-7 shadow-sm text-right flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">EXECUTIVE REPORT PREVIEW</span>
                      <h4 className="text-sm font-bold text-slate-900">
                        خروجی شبیه‌سازی موتور تصمیم مهام
                      </h4>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-lime-500 animate-pulse" />
                  </div>

                  {/* Suitability Gauge */}
                  <div className="p-4 rounded-xl bg-[#faf9f6] border border-black/[0.05] mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-700">شاخص انطباق ساختار:</span>
                      <span className="text-xl font-mono font-bold text-[#004778]">
                        {report.suitability}٪
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#004778] to-[#65a30d] h-full transition-all duration-500"
                        style={{ width: `${report.suitability}%` }}
                      />
                    </div>
                    <span className="text-[11px] text-slate-500 block mt-1.5">
                      ارزیابی بر مبنای {selectedCriteria.length} معیار کلیدی و صنف انتخابی
                    </span>
                  </div>

                  {/* Primary Pathway */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-xs font-bold text-[#004778] block mb-1">
                        مسیر راهبردی بهینه:
                      </span>
                      <p className="text-xs font-semibold text-slate-800 leading-relaxed bg-sky-50/70 p-3 rounded-lg border border-sky-100">
                        {report.primaryRoute}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-slate-500 block mb-1">
                        مسیر آلترناتیو (پشتیبان):
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {report.secondaryRoute}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                      <div>
                        <span className="text-slate-400 block">افق زمانی برآوردی:</span>
                        <span className="font-bold text-slate-800">{report.estimatedTimeline}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">تردد به ایران:</span>
                        <span className="font-bold text-[#65a30d]">{report.travelFeasibility}</span>
                      </div>
                    </div>
                  </div>

                  {/* Delegation Match */}
                  <div className="p-3.5 bg-lime-50/70 rounded-xl border border-lime-100 mb-6 flex items-start gap-2.5">
                    <Plane size={16} className="text-[#3f6a00] shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <span className="font-bold text-slate-900 block mb-0.5">هیأت میدانی منطبق:</span>
                      <span className="text-slate-700">{report.recommendedDelegation}</span>
                    </div>
                  </div>

                  {/* Advisory Alert */}
                  <div className="p-3.5 bg-slate-50 rounded-xl text-xs text-slate-600 leading-relaxed mb-6">
                    <span className="font-bold text-slate-800 block mb-1">توصیه محرمانه مهام:</span>
                    {report.criticalAdvice}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <button
                    onClick={() => onRouteChange('assessment')}
                    className="w-full py-3 px-4 bg-[#004778] hover:bg-[#003860] text-white text-xs font-bold rounded-xl transition-colors shadow-sm inline-flex items-center justify-center gap-2"
                  >
                    <span>ثبت این پرونده در سیستم ارزیابی رسمی مهام</span>
                    <ArrowLeft size={14} />
                  </button>
                  <button
                    onClick={() => {
                      setStep(1);
                      setSelectedCriteria(['capital_safety', 'iran_travel']);
                    }}
                    className="py-2 text-[11px] font-medium text-slate-400 hover:text-slate-700 transition-colors inline-flex items-center justify-center gap-1"
                  >
                    <RotateCcw size={12} />
                    <span>شروع مجدد شبیه‌سازی</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
