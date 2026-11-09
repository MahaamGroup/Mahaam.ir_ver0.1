import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Lock,
  ArrowLeft,
  Calendar,
} from 'lucide-react';

interface ContactPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onRouteChange }) => {
  const [topic, setTopic] = useState<string>('audit');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [meetingType, setMeetingType] = useState<'online' | 'in_person'>('online');
  const [message, setMessage] = useState<string>('');
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setIsSent(true);
    window.scrollTo({ top: 250, behavior: 'smooth' });
  };

  return (
    <div className="w-full flex flex-col">
      {/* Hero Banner */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-[#faf9f6] via-[#f4f3f1] to-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#004778] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
            <span>ارتباط مستقیم و محرمانه با دپارتمان رایزنی راهبردی</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            از کجا شروع کنیم؟
            <br />
            <span className="text-[#004778]">درخواست گفتگوی محرمانه و رزرو جلسه</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            گفتگو با مشاوران مهام، در فضایی کاملاً تخصصی، محرمانه و بر مبنای احترام متقابل صورت می‌پذیرد. موضوع ارتباط خود را مشخص فرمایید تا پرونده به مشاور ارشد همان حوزه ارجاع شود.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-white border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-right">
            {/* Contact Information & Channels */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#004778] uppercase tracking-wider block mb-2">
                  دفاتر و راه‌های ارتباطی
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  مرکز عملیات و شبکه کارگزاری
                </h2>

                <div className="space-y-6 text-sm">
                  <div className="p-5 rounded-2xl bg-[#faf9f6] border border-black/[0.06] flex items-start gap-3.5">
                    <MapPin size={22} className="text-[#004778] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">مرکز عملیات و رایزنی تهران</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        خیابان ولیعصر، برج بین‌المللی آرین، طبقه ۱۱، واحد ۴
                      </p>
                      <span className="text-[11px] text-slate-400 block mt-1">
                        (پذیرش مراجعین محترم صرفاً با تعیین وقت قبلی)
                      </span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#faf9f6] border border-black/[0.06] flex items-start gap-3.5">
                    <Phone size={22} className="text-[#65a30d] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">خط ارتباطی اختصاصی</h4>
                      <p className="text-sm font-mono font-bold text-slate-800" dir="ltr">
                        ۰۲۱-۹۲۰۰۰۰۰۰
                      </p>
                      <span className="text-[11px] text-slate-500 block mt-1">
                        شنبه تا چهارشنبه از ساعت ۹:۰۰ الی ۱۸:۰۰
                      </span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#faf9f6] border border-black/[0.06] flex items-start gap-3.5">
                    <Mail size={22} className="text-[#004778] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">مکاتبات رسمی و پرونده‌ها</h4>
                      <p className="text-xs font-mono text-slate-700" dir="ltr">
                        advisory@mahaamgroup.com
                      </p>
                      <span className="text-[11px] text-slate-500 block mt-1">
                        پاسخگویی سریع ظرف حداکثر ۲۴ ساعت کاری
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-xl bg-sky-50/70 border border-sky-100 flex items-center gap-3">
                  <Lock size={18} className="text-[#004778] shrink-0" />
                  <span className="text-xs text-slate-700 leading-relaxed font-medium">
                    تمامی جلسات و اطلاعات رد و بدل شده مشمول تعهدنامه رسمی عدم‌افشا (NDA) خواهد بود.
                  </span>
                </div>
              </div>

              {/* Network Locations */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>دفاتر همکار:</span>
                <span className="font-semibold text-slate-700">ژنو · لندن · دبی · فرانکفورت</span>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7 bg-[#faf9f6] rounded-3xl border border-black/[0.08] p-8 sm:p-10 shadow-sm">
              {!isSent ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">موضوع ارتباط شما چیست؟</h3>
                    <p className="text-xs text-slate-500 mb-5">
                      گزینه متناسب با نیاز خود را انتخاب کنید تا مستقیماً به میز تخصصی مربوطه متصل شوید.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        { id: 'audit', title: 'می‌خواهم شرایط فردی یا شرکتم را ارزیابی کنم' },
                        { id: 'specific_route', title: 'درباره یک کشور یا مسیر مشخص سؤال دارم' },
                        { id: 'delegations', title: 'درخواست شرکت در هیأت‌های تجاری / بالینی' },
                        { id: 'general', title: 'موضوع حقوقی یا همکاری سازمانی دیگر' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setTopic(t.id)}
                          className={`p-3 rounded-xl text-right text-xs font-semibold border transition-all ${
                            topic === t.id
                              ? 'bg-[#004778] text-white border-[#004778] shadow-sm'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {t.title}
                        </button>
                      ))}
                    </div>
                  </div>

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
                        placeholder="مثال: مهندس رضوانی"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#004778]/20 focus:border-[#004778] transition-all bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        شماره تماس مستقیم <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="۰۹۱۲۰۰۰۰۰۰۰"
                        dir="ltr"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#004778]/20 focus:border-[#004778] transition-all bg-white text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      نحوه برگزاری جلسه مدنظر
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setMeetingType('online')}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                          meetingType === 'online'
                            ? 'bg-[#004778] text-white border-[#004778]'
                            : 'bg-white text-slate-700 border-slate-200'
                        }`}
                      >
                        جلسه آنلاین ویدیویی (گوگل میت / زوم)
                      </button>
                      <button
                        type="button"
                        onClick={() => setMeetingType('in_person')}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                          meetingType === 'in_person'
                            ? 'bg-[#004778] text-white border-[#004778]'
                            : 'bg-white text-slate-700 border-slate-200'
                        }`}
                      >
                        جلسه حضوری در دفتر تهران
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      شرح خلاصه نیاز یا سؤالات شما
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="لطفاً به اختصار بفرمایید در چه مرحله‌ای هستید و مایلید پیرامون چه حوزه‌ای گفتگو شود..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#004778]/20 focus:border-[#004778] transition-all bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#004778] hover:bg-[#003860] text-white text-sm font-bold rounded-xl shadow-md transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    <span>ارسال درخواست هماهنگی جلسه</span>
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-lime-100 text-[#3f6a00] flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">درخواست شما با موفقیت ثبت شد</h3>
                  <p className="text-xs text-slate-600 max-w-md leading-relaxed mb-6">
                    جناب آقای / سرکار خانم {fullName}، کارشناس هماهنگی مهام تا حداکثر ظهر فردا جهت تنظیم وقت دقیق جلسه با شماره {phone} تماس حاصل خواهد کرد.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="px-5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl bg-white"
                  >
                    ارسال پیام دیگر
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
