import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  Compass,
  ShieldCheck,
  ArrowLeft,
  ChevronRight,
  TrendingUp,
  Stethoscope,
  Gavel,
  Briefcase,
  Award,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Globe2,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onRouteChange }) => {
  const [selectedPreviewRole, setSelectedPreviewRole] = useState<'physician' | 'attorney' | 'executive' | 'founder' | 'specialist'>('executive');

  const previewData = {
    physician: {
      title: 'جامعه پزشکی و درمان',
      bestRoute: 'اعزام هیأت ارزیابی بالینی + معادل‌سازی اختصاصی (سوئیس / انگلستان)',
      readiness: '۹۴٪ شاخص آمادگی',
      leadTime: '۴ الی ۸ ماه تا تثبیت ساختار',
      targetPage: 'audiences/physicians' as PageRoute,
    },
    attorney: {
      title: 'وکلا و حقوق‌دانان بین‌المللی',
      bestRoute: 'تفاهم‌نامه Best-Friends با دفاتر داوری لندن و پاریس + ثبت تراست ارزی',
      readiness: '۹۶٪ شاخص آمادگی',
      leadTime: '۳ الی ۶ ماه تا اولین پرونده مشترک',
      targetPage: 'audiences/attorneys' as PageRoute,
    },
    executive: {
      title: 'مدیران ارشد و رهبران صنعتی',
      bestRoute: 'هلدینگ‌سازی منطقه‌ای در DIFC دبی + ویزای انتقال درون‌شرکتی (L-1 / ICT)',
      readiness: '۹۲٪ شاخص آمادگی',
      leadTime: '۲ الی ۵ ماه تا عملیاتی شدن دفتر',
      targetPage: 'audiences/executives' as PageRoute,
    },
    founder: {
      title: 'صاحبان کسب‌وکار و استارتاپ‌ها',
      bestRoute: 'ثبت شعبه در هلند / آلمان + استارت‌آپ ویزا و گشایش درگاه‌های ارزی',
      readiness: '۹۱٪ شاخص آمادگی',
      leadTime: '۴ الی ۹ ماه تا استقرار کامل',
      targetPage: 'audiences/founders' as PageRoute,
    },
    specialist: {
      title: 'پژوهشگران و نخبگان علمی',
      bestRoute: 'ویزای نخبگی Global Talent (UK) / EB-1A بدون نیاز به کارفرما',
      readiness: '۹۷٪ شاخص آمادگی',
      leadTime: '۳ الی ۶ ماه تا اخذ اقامت دائم',
      targetPage: 'audiences/specialists' as PageRoute,
    },
  };

  const currentPreview = previewData[selectedPreviewRole];

  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section: Executive Atlas Atmosphere */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-[#faf9f6] via-[#f4f3f1] to-[#faf9f6] border-b border-black/[0.05]">
        {/* Ambient Subtle Radial Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-sky-200/25 to-lime-200/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Right Column: Hero Proposition */}
            <div className="lg:col-span-7 flex flex-col text-right">
              {/* Quiet Editorial Tag */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#004778] mb-5 tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
                <span>اعزام هیأت‌های تجاری، تخصصی و توریستی | مشاوره راهبردی مهام</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-slate-900 tracking-tight leading-[1.25] mb-6">
                فرصت‌های بزرگ،
                <br />
                <span className="text-[#004778]">از شناخت درست</span> آغاز می‌شوند.
              </h1>

              {/* Lead Paragraph */}
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                گروه بین‌المللی مهام؛ نهاد تخصصی رایزنی، ساختارسازی حقوقی و هدایت راهبردی متناسب با شرایط واقعی افراد، مدیران ارشد و سرمایه‌گذاران. ما تصمیم‌گیری را از حیطه تبلیغات غیرواقعی خارج کرده و بر پایه ارزیابی چندبعدی و واقعیت‌های میدانی بنا می‌کنیم.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onRouteChange('decision-engine')}
                  className="px-6 py-3.5 bg-[#004778] hover:bg-[#003860] text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-150 inline-flex items-center justify-center gap-3 text-base group"
                >
                  <Compass size={18} className="text-lime-400 group-hover:rotate-45 transition-transform" />
                  <span>ورود به موتور ارزیابی و تصمیم‌سازی</span>
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onRouteChange('how-it-works')}
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl border border-slate-200 transition-all duration-150 inline-flex items-center justify-center gap-2 text-base"
                >
                  <span>متدولوژی ۴ مرحله‌ای مهام</span>
                </button>
              </div>

              {/* Trust Metric Strip */}
              <div className="mt-12 pt-8 border-t border-black/[0.07] grid grid-cols-2 sm:grid-cols-4 gap-6 text-right">
                <div>
                  <div className="text-2xl font-bold font-mono text-[#004778]">۴ لایه</div>
                  <div className="text-xs text-slate-500 mt-1">تحلیل حقوقی، مالی و تطبیقی</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-[#004778]">۸+ حوزه</div>
                  <div className="text-xs text-slate-500 mt-1">هیأت‌های تخصصی فعال</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-[#65a30d]">۹۸٪</div>
                  <div className="text-xs text-slate-500 mt-1">انطباق پرونده‌های راهبردی</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-[#004778]">۱۰۰٪</div>
                  <div className="text-xs text-slate-500 mt-1">محرمانگی تحت پیمان رسمی</div>
                </div>
              </div>
            </div>

            {/* Left Column: Interactive Strategic Engine Teaser Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/[0.04] border border-slate-200/80 p-6 sm:p-7 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-lime-500" />
                    <span className="text-xs font-bold text-slate-700 tracking-wider">
                      شبیه‌ساز آنی مسیر راهبردی
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Decision Sandbox</span>
                </div>

                <div className="mt-5">
                  <label className="block text-xs font-semibold text-slate-500 mb-2.5">
                    گروه حرفه‌ای خود را انتخاب کنید:
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 p-1 bg-slate-100/80 rounded-xl">
                    {(
                      [
                        { id: 'executive', label: 'مدیران' },
                        { id: 'physician', label: 'پزشکان' },
                        { id: 'attorney', label: 'وکلا' },
                        { id: 'founder', label: 'کارآفرینان' },
                        { id: 'specialist', label: 'نخبگان' },
                      ] as const
                    ).map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedPreviewRole(item.id)}
                        className={`py-2 px-1 text-xs font-medium rounded-lg transition-all ${
                          selectedPreviewRole === item.id
                            ? 'bg-white text-[#004778] font-bold shadow-sm'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Outcome Display */}
                <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">جایگاه:</span>
                    <span className="text-xs font-bold text-slate-800">{currentPreview.title}</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-slate-500">مسیر پیشنهادی اولیه:</span>
                    <span className="text-sm font-semibold text-[#004778] leading-relaxed">
                      {currentPreview.bestRoute}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">{currentPreview.leadTime}</span>
                    <span className="font-bold text-[#65a30d] bg-lime-100/60 px-2.5 py-0.5 rounded-full">
                      {currentPreview.readiness}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <button
                    onClick={() => onRouteChange(currentPreview.targetPage)}
                    className="flex-1 py-2.5 px-4 bg-[#004778] hover:bg-[#003860] text-white text-xs font-bold rounded-xl transition-colors text-center inline-flex items-center justify-center gap-1.5"
                  >
                    <span>بررسی پرونده تخصصی این گروه</span>
                    <ArrowLeft size={14} />
                  </button>
                  <button
                    onClick={() => onRouteChange('decision-engine')}
                    className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
                  >
                    سنجش شخصی‌سازی شده
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Core Problem We Solve (مسئله‌ای که مهام حل می‌کند) */}
      <section className="py-20 bg-white border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 text-right">
            <span className="text-xs font-bold text-[#004778] uppercase tracking-wider block mb-2">
              شفافیت استراتژیک در برابر ابهام بازار
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
              مسئله‌ای که مهام حل می‌کند:
              <br />
              چرا تصمیم‌های بین‌المللی بدون ساختار به شکست می‌انجامند؟
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed">
              بیشتر ناکامی‌ها و اتلاف سرمایه در مهاجرت و جابجایی بین‌المللی، ناشی از کمبود توانایی افراد نیست؛ بلکه ناشی از تصمیم‌گیری بر پایه توصیه‌های تک‌بعدی، تبلیغات مهاجرتی غیرتخصصی و غفلت از تطابق ساختار حقوقی و مالی است.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06] hover:border-[#004778]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-100/70 text-red-700 flex items-center justify-center mb-4">
                  <AlertTriangle size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">تصمیم‌گیری در خلأ اطلاعاتی</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  اتکا به شنیده‌ها، تجارب پراکنده دوستان یا وعده‌های دلالان ویزا که به انتخاب مسیرهای اشتباه و پرهزینه منتهی می‌شود.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-black/[0.05] text-[11px] font-semibold text-[#004778]">
                پاسخ مهام: غربالگری چندبعدی مستند
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06] hover:border-[#004778]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-800 flex items-center justify-center mb-4">
                  <Building2 size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">تخریب ساختار دارایی‌ها</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  فروش شتاب‌زده املاک یا خروج غیرحرفه‌ای سرمایه بدون در نظر گرفتن قوانین مالیاتی مقاصد (CRS / Double Taxation).
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-black/[0.05] text-[11px] font-semibold text-[#004778]">
                پاسخ مهام: تراست‌سازی و مدلینگ مالی
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06] hover:border-[#004778]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-[#004778] flex items-center justify-center mb-4">
                  <Globe2 size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">فقدان تجربه میدانی واقعی</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  مهاجرت قطعی یا تأسیس شرکت پیش از لمس مستقیم اکوسیستم و گفتگو با مشتریان و کارفرمایان واقعی بازار هدف.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-black/[0.05] text-[11px] font-semibold text-[#65a30d]">
                پاسخ مهام: اعزام هیأت‌های تجاری و پژوهشی
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06] hover:border-[#004778]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">انزوای تخصصی و تنزل جایگاه</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  نادیده انگاشتن جایگاه علمی و حرفه‌ای فرد در کشور مبدأ و پذیرش مشاغل دون شأن به دلیل ناآگاهی از ویزاهای نخبگی.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-black/[0.05] text-[11px] font-semibold text-[#004778]">
                پاسخ مهام: توسعه اعتبار فرامرزی و تلنت
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Five Distinct Audiences Bento Grid */}
      <section className="py-20 bg-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl text-right">
              <span className="text-xs font-bold text-[#004778] uppercase tracking-wider block mb-2">
                دسته‌بندی اختصاصی مخاطبان
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                مهام برای چه کسانی طراحی شده است؟
              </h2>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                هر گروه حرفه‌ای با متغیرها، الزامات قانونی و فرصت‌های متفاوتی روبه‌رو است. خدمات مهام بر پایه معماری اختصاصی برای هر گروه توسعه یافته است.
              </p>
            </div>
            <button
              onClick={() => onRouteChange('audiences')}
              className="mt-4 md:mt-0 text-sm font-bold text-[#004778] hover:text-[#003860] inline-flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>مشاهده تفکیک کامل مخاطبان</span>
              <ArrowLeft size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Physicians Card */}
            <div className="bg-white rounded-2xl border border-black/[0.07] p-7 flex flex-col justify-between hover:shadow-lg transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#004778] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Stethoscope size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">پزشکان و متخصصان سلامت</h3>
                <p className="text-xs text-slate-500 mb-4">Physicians & Healthcare Specialists</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  معادل‌سازی گام‌به‌گام مدارک بالینی، فلوشیپ‌های بین‌المللی و اعزام هیأت‌های تبادل جراحی و درمانی به مراکز معتبر سوئیس، آلمان و خلیج‌فارس.
                </p>
              </div>
              <button
                onClick={() => onRouteChange('audiences/physicians')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-[#004778] group-hover:text-white text-slate-700 text-xs font-bold transition-colors inline-flex items-center justify-between"
              >
                <span>مشاهده پرونده تخصصی سلامت</span>
                <ArrowLeft size={14} />
              </button>
            </div>

            {/* Attorneys Card */}
            <div className="bg-white rounded-2xl border border-black/[0.07] p-7 flex flex-col justify-between hover:shadow-lg transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Gavel size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">وکلا و مشاوران حقوقی</h3>
                <p className="text-xs text-slate-500 mb-4">Attorneys & Legal Specialists</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  اتصال به مجامع داوری بین‌المللی (ICC, LCIA)، شبکه‌سازی فرامرزی و ساختاربندی پرونده‌های ارجاعی با رعایت بالاترین استانداردهای استقلال حرفه‌ای.
                </p>
              </div>
              <button
                onClick={() => onRouteChange('audiences/attorneys')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-[#004778] group-hover:text-white text-slate-700 text-xs font-bold transition-colors inline-flex items-center justify-between"
              >
                <span>مشاهده پرونده تخصصی حقوقی</span>
                <ArrowLeft size={14} />
              </button>
            </div>

            {/* Executives Card */}
            <div className="bg-white rounded-2xl border border-black/[0.07] p-7 flex flex-col justify-between hover:shadow-lg transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#3f6a00] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">مدیران ارشد و رهبران</h3>
                <p className="text-xs text-slate-500 mb-4">C-Level Executives & Enterprise Leaders</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  حکمرانی شرکتی مدرن، تأسیس هلدینگ‌های چندحوزه‌ای و ویزاهای انتقال بین‌شرکتی مدیران برای هدایت پایدار کسب‌وکارها در کلاس بین‌المللی.
                </p>
              </div>
              <button
                onClick={() => onRouteChange('audiences/executives')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-[#004778] group-hover:text-white text-slate-700 text-xs font-bold transition-colors inline-flex items-center justify-between"
              >
                <span>مشاهده پرونده مدیران ارشد</span>
                <ArrowLeft size={14} />
              </button>
            </div>

            {/* Founders Card */}
            <div className="bg-white rounded-2xl border border-black/[0.07] p-7 flex flex-col justify-between hover:shadow-lg transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">صاحبان کسب‌وکار و بنیان‌گذاران</h3>
                <p className="text-xs text-slate-500 mb-4">Business Owners & Startup Founders</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  ورود هوشمند به بازارهای اروپا و خلیج‌فارس، ثبت بهینه دارایی‌های فکری (IP)، گشایش حساب‌های تجاری و جذب سرمایه خطرپذیر خارجی.
                </p>
              </div>
              <button
                onClick={() => onRouteChange('audiences/founders')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-[#004778] group-hover:text-white text-slate-700 text-xs font-bold transition-colors inline-flex items-center justify-between"
              >
                <span>مشاهده پرونده کارآفرینان</span>
                <ArrowLeft size={14} />
              </button>
            </div>

            {/* Specialists Card */}
            <div className="bg-white rounded-2xl border border-black/[0.07] p-7 flex flex-col justify-between hover:shadow-lg transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">متخصصان و نخبگان علمی</h3>
                <p className="text-xs text-slate-500 mb-4">Specialists & Researchers</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  مسیرهای نخبگی بدون نیاز به پیشنهاد شغلی (EB-1A / Global Talent)، اتصال به گرنت‌های پژوهشی و الحاق به قطب‌های علمی جهان.
                </p>
              </div>
              <button
                onClick={() => onRouteChange('audiences/specialists')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-[#004778] group-hover:text-white text-slate-700 text-xs font-bold transition-colors inline-flex items-center justify-between"
              >
                <span>مشاهده پرونده نخبگان علمی</span>
                <ArrowLeft size={14} />
              </button>
            </div>

            {/* Assessment Hub Promotion Box */}
            <div className="bg-gradient-to-br from-[#004778] to-[#002f52] rounded-2xl p-7 text-white flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-lime-300 font-semibold mb-4">
                  <Sparkles size={14} />
                  <span>سنجش آنلاین و محرمانه</span>
                </div>
                <h3 className="text-xl font-bold mb-3">هنوز گروه دقیق خود را مشخص نکرده‌اید؟</h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  با تکمیل پرسشنامه ۵ دقیقه‌ای مهام، داده‌های حرفه‌ای، اهداف استراتژیک و میزان آمادگی شما ارزیابی شده و نقشه راه پیشنهادی صادر می‌شود.
                </p>
              </div>
              <button
                onClick={() => onRouteChange('assessment')}
                className="w-full py-3 px-4 rounded-xl bg-[#65a30d] hover:bg-[#52840a] text-white text-xs font-bold transition-all shadow-md mt-6 inline-flex items-center justify-center gap-2"
              >
                <span>شروع پرسشنامه ارزیابی انطباق</span>
                <ArrowLeft size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Methodology: 4-Stage Process (فرآیند ۴ مرحله‌ای مهام) */}
      <section className="py-20 bg-white border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-right mb-16">
            <span className="text-xs font-bold text-[#004778] uppercase tracking-wider block mb-2">
              متدولوژی تصمیم‌گیری سیستماتیک
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              فرآیند همکاری با مهام چگونه است؟
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              ما هیچ مسیری را بدون گذر از غربالگری علمی آغاز نمی‌کنیم. ۴ گام منظم و شفاف، مسیر تصمیم تا استقرار را تضمین می‌کنند.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06] flex flex-col justify-between">
              <div>
                <span className="text-3xl font-bold font-mono text-[#004778] block mb-3">۰۱</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">شناخت اولیه و غربالگری</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  بررسی دارایی‌ها، سوابق حرفه‌ای، رزومه علمی و اهداف بنیادین شما بر اساس شاخص‌های واقع‌گرایانه بین‌المللی.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs text-[#004778] font-semibold">
                <CheckCircle2 size={14} className="text-[#65a30d]" />
                <span>تعیین صلاحیت اولیه بدون هزینه</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06] flex flex-col justify-between">
              <div>
                <span className="text-3xl font-bold font-mono text-[#004778] block mb-3">۰۲</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">ارزیابی شرایط و تحلیل گزینه‌ها</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  تطبیق همزمان ۴ لایه: قوانین مهاجرت، رژیم مالیاتی مبدأ و مقصد، فرصت‌های بازار و پایداری جایگاه خانواده.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs text-[#004778] font-semibold">
                <CheckCircle2 size={14} className="text-[#65a30d]" />
                <span>ماتریس مقایسه‌ای چندکشوره</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06] flex flex-col justify-between">
              <div>
                <span className="text-3xl font-bold font-mono text-[#004778] block mb-3">۰۳</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">تحلیل میدانی و اعزام هیأت‌ها</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  حضور در قالب هیأت‌های تخصصی یا تجاری جهت بازدید میدانی از بیمارستان‌ها، پارک‌های فناوری و نشست با وکلا.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs text-[#004778] font-semibold">
                <CheckCircle2 size={14} className="text-[#65a30d]" />
                <span>تجربه زیسته پیش از هر تصمیم قطعی</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06] flex flex-col justify-between">
              <div>
                <span className="text-3xl font-bold font-mono text-[#004778] block mb-3">۰۴</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">طراحی گام بعدی و استقرار</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  اجرای صلب حقوقی، تدوین بسته درخواست ویزا یا ثبت ساختار شرکتی و پشتیبانی مستمر تا استقرار کامل.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs text-[#004778] font-semibold">
                <CheckCircle2 size={14} className="text-[#65a30d]" />
                <span>همراهی پایدار و رفع موانع اجرایی</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onRouteChange('how-it-works')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#004778] hover:text-[#003860]"
            >
              <span>مطالعه تشریح کامل متدولوژی مهام و استانداردهای تضمین کیفیت</span>
              <ArrowLeft size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Pathways & International Delegations Highlight */}
      <section className="py-20 bg-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 text-right">
              <span className="text-xs font-bold text-[#65a30d] uppercase tracking-wider block mb-2">
                اعزام هیأت‌های تجاری، تخصصی و توریستی
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                بعضی تصمیم‌ها با شنیدن گرفته نمی‌شوند؛ با تجربه بهتر گرفته می‌شوند.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                برنامه‌های اعزام هیأت‌های تجاری و تخصصی مهام، امکان حضور مستقیم در مراکز عالی تصمیم‌گیری جهانی، دیدار با همتایان بین‌المللی و آزمون دقیق محیط پیش از انتقال سرمایه یا زندگی را فراهم می‌آورد.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#65a30d] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">
                    دیدارهای اختصاصی B2B با رؤسای اتاق‌های بازرگانی و داوری در ژنو، لندن و دبی
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#65a30d] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">
                    بازدیدهای بالینی فوق‌تخصصی در بیمارستان‌های مرجع و دانشگاه‌های پزشکی اروپا
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#65a30d] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium">
                    جلسات هدایت‌شده با مدیران صندوق‌های سرمایه‌گذاری و مشاوران امور مالیاتی فرامرزی
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => onRouteChange('pathways/experiences')}
                  className="px-5 py-2.5 bg-[#004778] hover:bg-[#003860] text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-2"
                >
                  <span>تقویم هیأت‌های اعزامی</span>
                  <ArrowLeft size={14} />
                </button>
                <button
                  onClick={() => onRouteChange('pathways/discovery')}
                  className="px-5 py-2.5 bg-white text-slate-700 border border-slate-200 text-xs font-semibold rounded-xl hover:bg-slate-50 transition-colors"
                >
                  کشف فرصت‌های راهبردی
                </button>
              </div>
            </div>

            {/* Delegations Showcase Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-black/[0.07] shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-[#004778] bg-sky-50 px-2.5 py-0.5 rounded-full">
                    سوئیس و آلمان
                  </span>
                  <span className="text-xs font-mono text-slate-400">۶ روز کاری</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">هیأت فوق‌تخصصی جراحی و سلامت</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  زوریخ و مونیخ؛ دیدار با رؤسای دپارتمان‌های جراحی مغز و اعصاب، ارزیابی مدارک کانتونی و حقوق پزشکان.
                </p>
                <div className="text-[11px] text-slate-400 font-medium">ظرفیت محدود: ۱۲ متخصص برگزیده</div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-black/[0.07] shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-[#3f6a00] bg-lime-50 px-2.5 py-0.5 rounded-full">
                    انگلستان و فرانسه
                  </span>
                  <span className="text-xs font-mono text-slate-400">۵ روز فشرده</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">هیأت داوری تجاری و ساختار تراست</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  لندن و پاریس؛ حضور در اتاق بازرگانی بین‌المللی (ICC) و ملاقات با بارسترهای ارشد معاهده‌های نفتی.
                </p>
                <div className="text-[11px] text-slate-400 font-medium">مخصوص وکلا و مشاوران ارشد حقوقی</div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-black/[0.07] shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-[#004778] bg-sky-50 px-2.5 py-0.5 rounded-full">
                    امارات متحده عربی
                  </span>
                  <span className="text-xs font-mono text-slate-400">۴ روز اجرایی</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">هیأت هلدینگ‌سازی DIFC دبی</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  دیدار با مدیران بانک‌های تجاری معتبر منطقه، بازدید از مناطق آزاد مالیاتی و ثبت شرکت‌های مدیریت دارایی.
                </p>
                <div className="text-[11px] text-slate-400 font-medium">ویژه مدیران عامل و مالکان صنایع</div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-black/[0.07] shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full">
                    هلند و آلمان
                  </span>
                  <span className="text-xs font-mono text-slate-400">۵ روز تجاری</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">هیأت کارآفرینان و توسعه فناوری</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  آمستردام و برلین؛ مذاکره با شتاب‌دهنده‌های تراز اول اروپایی و ارزیابی تطبیق قوانین مقیاس‌پذیری ویزای استارتاپ.
                </p>
                <div className="text-[11px] text-slate-400 font-medium">مخصوص بنیان‌گذاران فناوری و نوآوری</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Executive Consultation Intake Call to Action */}
      <section className="py-20 bg-[#0a1128] text-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-lime-400 font-semibold mb-6">
              <ShieldCheck size={16} />
              <span>رعایت بالاترین پروتکل‌های محرمانگی حرفه‌ای</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5 leading-snug">
              تصمیم‌های سرنوشت‌ساز، شایسته تحلیل دقیق و بدون پیش‌داوری هستند.
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-xl">
              چه در پی بررسی معادل‌سازی مدارک پزشکی باشید، چه توسعه دفاتر حقوقی یا تأسیس شعبات شرکتی فرامرزی، مشاوران راهبردی مهام پرونده شما را در سکوت کامل حرفه‌ای ارزیابی می‌کنند.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onRouteChange('assessment')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#65a30d] hover:bg-[#52840a] text-white font-bold rounded-xl shadow-lg transition-all text-sm inline-flex items-center justify-center gap-2"
              >
                <span>تکمیل فرم ارزیابی اولیه صلاحیت</span>
                <ArrowLeft size={16} />
              </button>

              <button
                onClick={() => onRouteChange('contact')}
                className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/15 transition-all text-sm"
              >
                هماهنگی جلسه مشاوره حضوری یا آنلاین
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
