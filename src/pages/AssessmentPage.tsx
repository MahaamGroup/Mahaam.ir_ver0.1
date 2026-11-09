import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowLeft,
  Award,
  Sparkles,
  Download,
  Check,
  Building,
  UserCheck,
} from 'lucide-react';

interface AssessmentPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AssessmentPage: React.FC<AssessmentPageProps> = ({ onRouteChange }) => {
  const [selectedFormType, setSelectedFormType] = useState<'specialist' | 'executive' | 'institutional'>('specialist');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form Fields State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [experienceYears, setExperienceYears] = useState('5_to_10');
  const [destination, setDestination] = useState('europe');
  const [capitalRange, setCapitalRange] = useState('medium');
  const [englishLevel, setEnglishLevel] = useState('intermediate');
  const [notes, setNotes] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(true);
  const [dossierId, setDossierId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    const generatedId = `MHM-${Math.floor(100000 + Math.random() * 900000)}`;
    setDossierId(generatedId);
    setSubmitted(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="w-full flex flex-col">
      {/* Hero Banner */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-[#faf9f6] via-[#f4f3f1] to-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#004778] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
            <span>فرم‌های سه‌گانه ارزیابی صلاحیت و ورود به فرآیند مهام</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            هر مسیر مناسب،
            <br />
            <span className="text-[#004778]">از شناخت دقیق شرایط شروع می‌شود.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            پیش از برقراری هرگونه گفتگوی مشاوره یا عقد قرارداد، ممیزی اولیه شرایط شما توسط کارشناسان مهام انجام می‌پذیرد. این پرسشنامه کوتاه، تضمین می‌کند که زمان و منابع ارزشمند شما در جلسات بی‌نتیجه هدر نرود.
          </p>
        </div>
      </section>

      {/* Why Pre-Screening Matters (چرا پیش از گفت‌وگو، ارزیابی اولیه انجام می‌شود؟) */}
      <section className="py-16 bg-white border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-[#004778] uppercase tracking-wider block mb-2">
              استانداردهای تضمین کیفیت
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              چرا پیش از گفت‌وگو، ارزیابی اولیه انجام می‌شود؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">اطلاعات عمومی کافی نیست</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                مشاوره‌ای که بدون اطلاع از وضعیت دارایی‌ها، پروانه‌ها و سنجه‌های اختصاصی شما انجام شود، جنبه تجاری داشته و ارزش تحلیلی ندارد.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">هر فرد شرایط متفاوتی دارد</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                فرمول موفقیت یک همکار یا دوست، در نظام‌های مهاجرتی متغیر امروز به هیچ وجه قابل تعمیم مستقیم به شرایط پرونده شما نیست.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">گفت‌وگوی اثربخش با شناخت متقابل</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                وقتی مشاور مهام با مطالعه قبلی پرونده شما وارد جلسه می‌شود، دقایق گفتگو مستقیماً به سناریوهای اجرایی اختصاص می‌یابد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Questionnaire Form Section */}
      <section className="py-20 bg-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          {/* Form Type Segmented Tabs */}
          <div className="mb-10">
            <span className="text-xs font-bold text-slate-500 block mb-3">
              فرم ارزیابی منطبق با وضعیت خود را انتخاب کنید:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-slate-200/60 rounded-2xl">
              <button
                type="button"
                onClick={() => setSelectedFormType('specialist')}
                className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  selectedFormType === 'specialist'
                    ? 'bg-white text-[#004778] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <UserCheck size={16} />
                <span>فرم الف: پزشکان، وکلا و نخبگان</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedFormType('executive')}
                className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  selectedFormType === 'executive'
                    ? 'bg-white text-[#004778] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Award size={16} />
                <span>فرم ب: مدیران و کارآفرینان</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedFormType('institutional')}
                className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  selectedFormType === 'institutional'
                    ? 'bg-white text-[#004778] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building size={16} />
                <span>فرم ج: سازمانی و هیأت‌های تجاری</span>
              </button>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-3xl border border-black/[0.08] p-8 sm:p-12 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="border-b border-slate-100 pb-5">
                  <h3 className="text-xl font-bold text-slate-900">
                    {selectedFormType === 'specialist' && 'پرسشنامه ارزیابی انطباق متخصصان، پزشکان و نخبگان'}
                    {selectedFormType === 'executive' && 'پرسشنامه ارزیابی مدیران ارشد و صاحبان صنایع'}
                    {selectedFormType === 'institutional' && 'درخواست ارزیابی اعزام هیأت‌های تجاری و سازمانی'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    اطلاعات واردشده تحت پروتکل محرمانگی ISO 27001 و صرفاً جهت بررسی صلاحیت مشاوره‌ای است.
                  </p>
                </div>

                {/* Section 1: Contact Identity */}
                <div>
                  <h4 className="text-xs font-bold text-[#004778] uppercase tracking-wider mb-4">
                    ۱. هویت و اطلاعات تماس معتبر
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        نام و نام خانوادگی <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="مثال: دکتر علیرضا سلیمانی"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#004778]/20 focus:border-[#004778] transition-all bg-[#faf9f6]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        شماره تماس مستقیم (همراه با واتس‌اپ) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="۰۹۱۲۰۰۰۰۰۰۰"
                        dir="ltr"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#004778]/20 focus:border-[#004778] transition-all bg-[#faf9f6] text-right"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        نشانی پست الکترونیکی (جهت ارسال گزارش تحلیلی)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        dir="ltr"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#004778]/20 focus:border-[#004778] transition-all bg-[#faf9f6] text-right"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Professional Standing & Experience */}
                <div>
                  <h4 className="text-xs font-bold text-[#004778] uppercase tracking-wider mb-4">
                    ۲. عمق سوابق تخصصی و موقعیت استراتژیک
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        سابقه حرفه‌ای و فعالیت مرتبط
                      </label>
                      <select
                        value={experienceYears}
                        onChange={(e) => setExperienceYears(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#004778]/20 focus:border-[#004778] transition-all bg-[#faf9f6]"
                      >
                        <option value="under_5">کمتر از ۵ سال</option>
                        <option value="5_to_10">۵ الی ۱۰ سال تخصصی</option>
                        <option value="10_to_20">۱۰ الی ۲۰ سال مدیریت / طبابت</option>
                        <option value="over_20">بیش از ۲۰ سال سابقه عالیه</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        سطح تسلط به زبان انگلیسی / زبان کشور مقصد
                      </label>
                      <select
                        value={englishLevel}
                        onChange={(e) => setEnglishLevel(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#004778]/20 focus:border-[#004778] transition-all bg-[#faf9f6]"
                      >
                        <option value="basic">پایه یا مقدماتی</option>
                        <option value="intermediate">متوسط (مکالمه کاری)</option>
                        <option value="fluent">پیشرفته و روان (IELTS 7+ یا معادل)</option>
                        <option value="native">تکلم حرفه‌ای در محیط بین‌المللی</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        حوزه جغرافیایی دارای اولویت
                      </label>
                      <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#004778]/20 focus:border-[#004778] transition-all bg-[#faf9f6]"
                      >
                        <option value="europe">اتحادیه اروپا (آلمان، سوئیس، هلند، فرانسه)</option>
                        <option value="uk">بریتانیا (انگلستان و اسکاتلند)</option>
                        <option value="uae">امارات متحده عربی و حوزه خلیج‌فارس</option>
                        <option value="north_america">کانادا و ایالات متحده آمریکا</option>
                        <option value="open">بدون اولویت تعصبی؛ بر پایه بالاترین انطباق</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        برآورد سرمایه در دسترس برای فرایند
                      </label>
                      <select
                        value={capitalRange}
                        onChange={(e) => setCapitalRange(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#004778]/20 focus:border-[#004778] transition-all bg-[#faf9f6]"
                      >
                        <option value="minimal">صرفاً متکی بر درآمد حاصل از تخصص و دستمزد</option>
                        <option value="low">بین ۵۰ تا ۱۰۰ هزار یورو</option>
                        <option value="medium">بین ۱۰۰ تا ۲۵۰ هزار یورو</option>
                        <option value="high">بیش از ۲۵۰ هزار یورو (سرمایه‌گذاری کلان)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 3: Notes & Confidentiality Pledge */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    توضیحات تکمیلی یا خطوط قرمز مدنظر (اختیاری)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="هر نکته‌ای درباره سوابق رد ویزا در گذشته، مقالات شاخص، ساختار شرکتی فعلی یا وضعیت خانوادگی که ذکر آن را مفید می‌دانید..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#004778]/20 focus:border-[#004778] transition-all bg-[#faf9f6]"
                  />
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                    className="mt-1 accent-[#004778] cursor-pointer"
                  />
                  <label htmlFor="privacy" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
                    تأیید می‌نمایم که اطلاعات فوق صحیح بوده و رضایت دارم کارشناسان ارزیابی مهام جهت ارسال گزارش صلاحیت‌سنجی اولیه و هماهنگی جلسه با اینجانب تماس حاصل نمایند.
                  </label>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={!privacyConsent}
                  className="w-full py-4 px-6 bg-[#004778] hover:bg-[#003860] disabled:bg-slate-300 text-white font-bold rounded-xl shadow-md transition-all text-sm inline-flex items-center justify-center gap-2"
                >
                  <ShieldCheck size={18} className="text-lime-400" />
                  <span>ارسال رسمی پرسشنامه و دریافت کد رهگیری پرونده</span>
                  <ArrowLeft size={16} />
                </button>
              </form>
            ) : (
              /* Success / Preliminary Dossier State */
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-lime-100 text-[#3f6a00] flex items-center justify-center mb-5">
                  <Check size={32} />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-100/70 text-[#3f6a00] rounded-full text-xs font-bold mb-3">
                  <span>پرونده با موفقیت ثبت شد</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  پرسشنامه ارزیابی انطباق دریافت گردید.
                </h3>

                <p className="text-sm text-slate-600 max-w-lg leading-relaxed mb-6">
                  جناب آقای / سرکار خانم <span className="font-bold text-slate-900">{fullName}</span>، پرونده شما تحت کد رهگیری زیر در سیستم محرمانه مهام ثبت شد. کارشناسان ما ظرف حداکثر ۴۸ ساعت کاری پرونده شما را ارزیابی و گزارش ممیزی اولیه را ارسال خواهند کرد.
                </p>

                <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200 mb-8 inline-flex flex-col items-center gap-1 min-w-[260px]">
                  <span className="text-xs text-slate-500">شماره اختصاصی پرونده (Dossier ID):</span>
                  <span className="font-mono text-xl font-bold text-[#004778] tracking-widest" dir="ltr">
                    {dossierId}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => onRouteChange('decision-engine')}
                    className="w-full sm:w-auto px-6 py-2.5 bg-[#004778] hover:bg-[#003860] text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <span>مشاهده شبیه‌ساز مسیر در موتور تصمیم‌سازی</span>
                    <ArrowLeft size={14} />
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-2.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold rounded-xl transition-colors"
                  >
                    ثبت یک پرونده دیگر
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
