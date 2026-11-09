import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  Plane,
  Calendar,
  CheckCircle2,
  Users2,
  Building2,
  Compass,
  ArrowLeft,
  FileCheck,
  ShieldCheck,
  MapPin,
  Clock,
} from 'lucide-react';

interface ExperiencesJourneyPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const ExperiencesJourneyPage: React.FC<ExperiencesJourneyPageProps> = ({
  onRouteChange,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'health' | 'legal' | 'business'>('all');

  const delegations = [
    {
      id: 'swiss-health',
      category: 'health',
      badge: 'هیأت فوق‌تخصصی سلامت',
      title: 'هیأت جراحی، معادل‌سازی بالینی و نظام سلامت سوئیس و آلمان',
      destination: 'زوریخ (سوئیس) و مونیخ (آلمان)',
      duration: '۶ روز کاری فشرده',
      dates: 'بهار و پاییز ۱۴۰۴',
      capacity: 'حداکثر ۱۲ متخصص برگزیده',
      highlights: [
        'بازدید از دپارتمان‌های فوق‌تخصصی بیمارستان دانشگاهی زوریخ (USZ)',
        'نشست حضوری با اعضای کمیته ارزیابی مدارک پزشکی کانتون زوریخ',
        'کارگاه آشنایی با قوانین بیمه مسئولیت مدنی، مالیات و استقرار پزشکان در آلمان و سوئیس',
        'گفتگوی خصوصی با پزشکان و جراحان ایرانی موفق مقیم اروپا',
      ],
    },
    {
      id: 'uk-legal',
      category: 'legal',
      badge: 'هیأت حقوقی و داوری بین‌الملل',
      title: 'هیأت داوری تجاری بین‌المللی و ساختارسازی تراست‌های ارزی',
      destination: 'لندن (انگلستان) و پاریس (فرانسه)',
      duration: '۵ روز کاری',
      dates: 'تابستان ۱۴۰۴',
      capacity: 'حداکثر ۱۰ وکیل و مشاور ارشد',
      highlights: [
        'حضور در مقر اتاق بازرگانی بین‌المللی (ICC Paris) و نشست داوری تجاری',
        'جلسات B2B با موسسات و بارسترهای حقوقی Inner Temple لندن',
        'بررسی پرونده‌های واقعی تحریم، تراست‌های خانوادگی و گشایش حساب‌های حقوقی',
        'امضای تفاهم‌نامه‌های همکاری ارجاع دوجانبه دعاوی (Best-Friends Agreements)',
      ],
    },
    {
      id: 'difc-exec',
      category: 'business',
      badge: 'هیأت رهبری شرکتی',
      title: 'هیأت هلدینگ‌سازی منطقه‌ای، بانکداری شرکتی و زنجیره تأمین خلیج‌فارس',
      destination: 'دبی و ابوظبی (امارات متحده عربی)',
      duration: '۴ روز اجرایی',
      dates: 'هر دو ماه یک‌بار',
      capacity: '۱۵ مدیرعامل و مالک کسب‌وکار',
      highlights: [
        'دیدار اختصاصی در مرکز مالی بین‌المللی دبی (DIFC) و اتاق بازرگانی بین‌المللی',
        'مذاکره با بانک‌های تجاری تراز اول امارات جهت تسهیل افتتاح حساب‌های چندارزی',
        'بررسی مدل‌های مالیاتی شرکت‌های مقیم و معاهدات اجتناب از اخذ مالیات مضاعف',
        'تسهیل دریافت ویزاهای طلایی ۱۰ ساله (Golden Visa) مدیران و سرمایه‌گذاران',
      ],
    },
    {
      id: 'berlin-tech',
      category: 'business',
      badge: 'هیأت فناوری و کارآفرینی',
      title: 'هیأت نوآوری، پارک‌های علم و فناوری و جذب سرمایه خطرپذیر اروپا',
      destination: 'آمستردام (هلند) و برلین (آلمان)',
      duration: '۵ روز تجاری',
      dates: 'پاییز ۱۴۰۴',
      capacity: '۱۲ کارآفرین و بنیان‌گذار',
      highlights: [
        'حضور در قطب‌های فناوری اروپا و دیدار با نمایندگان آژانس سرمایه‌گذاری خارجی هلند (NFIA)',
        'پیچ اختصاصی کسب‌وکار در برابر صندوق‌های سرمایه‌گذاری خطرپذیر (VC) و فرشتگان کسب‌وکار',
        'کارگاه ثبت بین‌المللی دارایی‌های فکری (IP) و الزامات رگولاتوری بازار اتحادیه اروپا',
        'آشنایی با برنامه ویزای استارتاپ و اقامت کارآفرینی آلمان و هلند',
      ],
    },
  ];

  const filtered = activeTab === 'all' ? delegations : delegations.filter((d) => d.category === activeTab);

  return (
    <div className="w-full flex flex-col">
      {/* Hero Banner */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-[#faf9f6] via-[#f4f3f1] to-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#004778] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
            <span>مسیر استراتژیک دوم مهام: اعزام هیأت‌های تجاری، تخصصی و توریستی</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            بعضی تصمیم‌ها با اطلاعات بهتر گرفته نمی‌شوند؛
            <br />
            <span className="text-[#004778]">با تجربه بهتر گرفته می‌شوند.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            اعزام‌های تخصصی مهام، پل ارتباطی مستقیم میان شما و واقعیت‌های عینی محیط است. پیش از آنکه تصمیم قطعی برای جابجایی سرمایه، خانواده یا پروانه کار بگیرید، با حضور در هیأت‌های اختصاصی، محیط و همتایان را از نزدیک تجربه کنید.
          </p>
        </div>
      </section>

      {/* Why Direct Experience Matters (چرا تجربه مستقیم اهمیت دارد؟) */}
      <section className="py-20 bg-white border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-[#004778] uppercase tracking-wider block mb-2">
              آزمون عینی واقعیت
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              چرا تجربه مستقیم پیش از تصمیم‌گیری ضرورت دارد؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#004778] flex items-center justify-center mb-4">
                <Compass size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">تفاوت عمیق میان شنیدن و دیدن</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                بروشورهای تبلیغاتی و وب‌سایت‌ها هیچ‌گاه هزینه‌های واقعی زندگی، پیچیدگی‌های تعامل با نهادهای دولتی و جو اجتماعی واقعی یک شهر را نشان نمی‌دهند.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-lime-100 text-[#3f6a00] flex items-center justify-center mb-4">
                <Users2 size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">ایجاد ارتباط انسانی و شبکه‌سازی همتا</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                یک فنجان قهوه حضوری با رئیس دپارتمان یک بیمارستان یا یک بارستر لندنی، درهایی را باز می‌کند که ارسال صدها ایمیل هرگز قادر به گشودن آن نیست.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">شناخت عمیق قبل از تعهد مالی</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                هزینه یک سفر کاری هدفمند با هیأت‌های مهام، کمتر از ۱٪ زیان ناشی از یک تصمیم مهاجرتی یا سرمایه‌گذاری اشتباه است.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delegations Calendar & List */}
      <section className="py-20 bg-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-[#65a30d] uppercase tracking-wider block mb-2">
                برنامه‌های جاری اعزام
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                هیأت‌های تخصصی و تجاری فعال مهام
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 mt-4 md:mt-0">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'all' ? 'bg-[#004778] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                همه هیأت‌ها
              </button>
              <button
                onClick={() => setActiveTab('health')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'health' ? 'bg-[#004778] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                پزشکی و سلامت
              </button>
              <button
                onClick={() => setActiveTab('legal')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'legal' ? 'bg-[#004778] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                حقوقی و داوری
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'business' ? 'bg-[#004778] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                مدیران و کسب‌وکار
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-black/[0.08] p-7 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#004778]/50 transition-all text-right"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <span className="text-xs font-bold text-[#004778] bg-sky-50 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                      <Clock size={13} />
                      <span>{item.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-4 leading-snug">{item.title}</h3>

                  <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl mb-5 text-xs text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#65a30d]" />
                      <span>{item.destination}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users2 size={14} className="text-[#004778]" />
                      <span>{item.capacity}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-slate-800 block">برنامه‌های اصلی سفر:</span>
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <CheckCircle2 size={15} className="text-[#65a30d] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 font-medium">زمان برگزاری: {item.dates}</span>
                  <button
                    onClick={() => onRouteChange('contact')}
                    className="py-2.5 px-4 bg-[#004778] hover:bg-[#003860] text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <span>رزرو صندلی هیأت</span>
                    <ArrowLeft size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
