import React from 'react';
import { PageRoute } from '../types';
import {
  ShieldCheck,
  Check,
  X,
  ArrowLeft,
  Award,
  Lock,
  Globe2,
  Users2,
  Scale,
  Building,
} from 'lucide-react';

interface AboutPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onRouteChange }) => {
  return (
    <div className="w-full flex flex-col">
      {/* Header Banner */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-[#faf9f6] via-[#f4f3f1] to-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#004778] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
            <span>معماری ارزش و پارادایم تصمیم‌سازی مهام</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            مهام؛ همراه تصمیم‌های مهم
            <br />
            <span className="text-[#004778]">و مسیرهای آینده فرامرزی</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            گروه بین‌المللی مهام، نهادی مشورتی و توسعه‌ای است که با هدف ارتقای استانداردهای تصمیم‌گیری، ساختارسازی حقوقی و تسهیل اعزام هیأت‌های تخصصی، تجاری و توریستی شکل گرفته است. ما باور داریم که تصمیم‌های بزرگ نیازمند شناخت چندبعدی و فارغ از هیجانات زودگذر بازاری هستند.
          </p>
        </div>
      </section>

      {/* Why Mahaam Was Formed (چرا مهام شکل گرفت؟) */}
      <section className="py-20 bg-white border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 text-right">
              <span className="text-xs font-bold text-[#004778] uppercase tracking-wider block mb-2">
                فلسفه وجودی و مأموریت
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-5 leading-snug">
                چرا مهام شکل گرفت؟
                <br />
                گذار از واسطه‌گری سطحی به رایزنی استراتژیک
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  در طول دهه‌های اخیر، اکوسیستم جابجایی بین‌المللی، مهاجرت و گسترش سرمایه در کشور تحت سلطه روش‌های تک‌بعدی، تبلیغات فریبنده و کانال‌های غیررسمی قرار گرفت. در این فضا، مدیران، نخبگان و پزشکان برجسته اغلب با راهکارهای کلیشه‌ای و پرریسک روبه‌رو شدند که دارایی‌ها و اعتبار آنان را در معرض تهدید قرار داد.
                </p>
                <p>
                  مهام به عنوان یک کانون تخصصی شکل گرفت تا خلاء وجود یک ناظر امین و ساختارساز حقوقی را پر کند؛ نهادی که پیش از هر اقدامی، شرایط متقاضی را در چهار ساحت حقوقی، مالیاتی، بازاری و شخصی تحلیل کرده و تنها مسیرهای دارای انطباق حداکثری را پیشنهاد می‌دهد.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-black/[0.07] flex items-center gap-6">
                <div>
                  <div className="text-2xl font-bold font-mono text-[#004778]">۲۰۱۸</div>
                  <div className="text-xs text-slate-500 mt-0.5">آغاز ساختارسازی مشاوره‌های فرامرزی</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-[#65a30d]">۵ کشور</div>
                  <div className="text-xs text-slate-500 mt-0.5">شبکه کارگزاری مستقیم و رسمی</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-slate-900">۱۰۰٪</div>
                  <div className="text-xs text-slate-500 mt-0.5">استقلال از کمپین‌های تبلیغاتی زرد</div>
                </div>
              </div>
            </div>

            {/* 4 Core Pillars */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#004778] flex items-center justify-center mb-4">
                  <Scale size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">بدون پیش‌فرض عمومی</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ما هیچ مسیر واحدی را به همه توصیه نمی‌کنیم. راهکار هر پزشک با مدیر یا پژوهشگر متناسب با منابع و ریسک‌پذیری او متفاوت است.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                  <Building size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">تمایز از دلالان ویزا</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  مهام یک نهاد حقوقی و مشاور راهبردی است، نه بنگاه فروش ویزا. درآمد ما مبتنی بر خدمات کارشناسی و ارزیابی است.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <Lock size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">محرمانگی شأن حرفه‌ای</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  کلیه داده‌های متقاضیان و شرکت‌ها طبق پیمان‌نامه عدم‌افشا (NDA) و پروتکل رمزنگاری پیشرفته محافظت می‌شود.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-800 flex items-center justify-center mb-4">
                  <Users2 size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">شبکه بین‌المللی همتا</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ارتباط مستقیم با کانون‌های وکلا، بیمارستان‌های دانشگاهی و اتاق‌های بازرگانی در ژنو، لندن، مونیخ و دبی.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-20 bg-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-right mb-12">
            <span className="text-xs font-bold text-[#004778] uppercase tracking-wider block mb-2">
              جدول مقایسه تحلیلی
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              تفاوت بنیادین ساختار مهام با شیوه‌های سنتی
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-black/[0.08] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right text-sm">
                <thead>
                  <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700">
                    <th className="py-4 px-6 font-bold w-1/3">شاخص‌های ارزیابی</th>
                    <th className="py-4 px-6 font-bold text-slate-500 w-1/3">واسطه‌گری سنتی و موسسات مهاجرتی</th>
                    <th className="py-4 px-6 font-bold text-[#004778] w-1/3 bg-sky-50/50">
                      ساختار هدایت راهبردی مهام
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-4 px-6 font-semibold">رویکرد در پیشنهاد مسیر</td>
                    <td className="py-4 px-6 text-slate-500">تحمیل برنامه‌های آماده با بالاترین کمیسیون</td>
                    <td className="py-4 px-6 font-medium text-slate-900 bg-sky-50/20">
                      غربالگری چندبعدی و طراحی راهکار اختصاصی بدون پیش‌فرض
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">تحلیل مالیاتی و ساختار دارایی</td>
                    <td className="py-4 px-6 text-slate-500">نادیده گرفتن کامل؛ منجر به جریمه‌های سنگین مالیاتی</td>
                    <td className="py-4 px-6 font-medium text-slate-900 bg-sky-50/20">
                      بررسی تطبیقی قوانین مالیات بین‌الملل (CRS) و حفظ دارایی‌ها
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">امکان تجربه میدانی پیش از تصمیم</td>
                    <td className="py-4 px-6 text-slate-500">عدم وجود؛ اصرار بر تعهد قطعی و پرداخت کل هزینه</td>
                    <td className="py-4 px-6 font-medium text-slate-900 bg-sky-50/20">
                      اعزام در قالب هیأت‌های تخصصی، تجاری و توریستی جهت لمس مستقیم
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">محرمانگی و شأن حرفه‌ای</td>
                    <td className="py-4 px-6 text-slate-500">انتشار عکس و هویت موکلان در شبکه‌های اجتماعی برای تبلیغ</td>
                    <td className="py-4 px-6 font-medium text-slate-900 bg-sky-50/20">
                      تعهد کتبی محرمانگی کامل (Non-Disclosure Agreement)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">پشتیبانی پس از ورود</td>
                    <td className="py-4 px-6 text-slate-500">قطع ارتباط پس از اخذ ویزا</td>
                    <td className="py-4 px-6 font-medium text-slate-900 bg-sky-50/20">
                      همراهی در الحاق به جامعه همتایان، شبکه‌سازی شغلی و استقرار
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Callout */}
      <section className="py-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#faf9f6] rounded-2xl border border-black/[0.07] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-right">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                آماده‌اید پرونده شما توسط هیئت مشاوران مهام بررسی شود؟
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                برای شروع، نیازی به تعهدات مالی یا تصمیم‌گیری نهایی نیست. پرسشنامه ارزیابی اولیه، وضعیت شما را برای ما روشن می‌سازد.
              </p>
            </div>
            <button
              onClick={() => onRouteChange('assessment')}
              className="px-6 py-3.5 bg-[#004778] hover:bg-[#003860] text-white text-sm font-bold rounded-xl transition-colors whitespace-nowrap inline-flex items-center gap-2"
            >
              <span>درخواست ارزیابی اولیه صلاحیت</span>
              <ArrowLeft size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
