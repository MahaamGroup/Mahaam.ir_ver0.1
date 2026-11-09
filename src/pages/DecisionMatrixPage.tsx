import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  Grid3X3,
  Layers,
  Scale,
  ShieldAlert,
  CheckCircle2,
  Sliders,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

interface DecisionMatrixPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const DecisionMatrixPage: React.FC<DecisionMatrixPageProps> = ({ onRouteChange }) => {
  const [legalWeight, setLegalWeight] = useState(85);
  const [taxWeight, setTaxWeight] = useState(70);
  const [marketWeight, setMarketWeight] = useState(80);
  const [familyWeight, setFamilyWeight] = useState(75);

  const aggregateScore = Math.round(
    legalWeight * 0.3 + taxWeight * 0.25 + marketWeight * 0.25 + familyWeight * 0.2
  );

  return (
    <div className="w-full flex flex-col">
      {/* Hero Banner */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-[#faf9f6] via-[#f4f3f1] to-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#004778] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#65a30d]" />
            <span>ابزار تحلیلی مهام: ماتریس تصمیم‌گیری چندبعدی</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            مسیر مناسب،
            <br />
            <span className="text-[#004778]">از شناخت درست شرایط شروع می‌شود.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            ماتریس تصمیم‌گیری مهام، مدلی ۴ لایه‌ای است که ابعاد گوناگون پرونده شما را در هم می‌آمیزد تا بر خلاف روش‌های تک‌بعدی، نقاط کور و تهدیدهای احتمالی مسیر پیش از اقدام آشکار شوند.
          </p>
        </div>
      </section>

      {/* 4 Core Dimensions */}
      <section className="py-20 bg-white border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-[#004778] uppercase tracking-wider block mb-2">
              ۴ ستون تحلیل جامع
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              چه عواملی در ماتریس تصمیم مهام بررسی می‌شوند؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
              <span className="text-xs font-mono font-bold text-[#004778] block mb-2">DIMENSION 01</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">هدف اصلی (Primary Goal)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                آیا اولویت نهایی شما معادل‌سازی جایگاه پزشکی، حفظ سرمایه ارزی، مقیاس‌پذیری بیزنس یا آینده تحصیلی فرزندان است؟
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
              <span className="text-xs font-mono font-bold text-[#004778] block mb-2">DIMENSION 02</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">وضعیت فعلی (Current State)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                سوابق اجرایی مستند، مدارک تحصیلی و بورد، دارایی‌های نقد و غیرنقد، سن متقاضیان و تسلط زبانی به طور واقعی.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
              <span className="text-xs font-mono font-bold text-[#004778] block mb-2">DIMENSION 03</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ظرفیت‌ها (Capacities & Assets)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                اعتبار بین‌المللی مقالات، پتنت‌ها، قراردادهای بازرگانی جاری، شرکت‌های فعال و شبکه همکاران خارجی.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf9f6] border border-black/[0.06]">
              <span className="text-xs font-mono font-bold text-[#004778] block mb-2">DIMENSION 04</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">معیارهای تصمیم (Decision Criteria)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                افق زمانی مدنظر (عاجل، میان‌مدت)، تاب‌آوری ریسک، تعهد به حضور فیزیکی در مقصد و الزامات اقامتی خانواده.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 4-Layer Simulator */}
      <section className="py-20 bg-[#faf9f6] border-b border-black/[0.05]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-[#65a30d] uppercase tracking-wider block mb-2">
              شبیه‌ساز تعاملی مدل ۴ لایه
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              تعیین تعادل وزنی شاخص‌ها در تصمیم شما
            </h2>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              با تغییر سنجه‌های زیر، نحوه ارزیابی و ضریب پایداری مسیر خود را شبیه‌سازی کنید:
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-black/[0.08] p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Sliders Area */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2">
                    <span>لایه اول: انطباق حقوقی و پذیرش قانونی ویزا</span>
                    <span className="font-mono text-[#004778]">{legalWeight}٪</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="100"
                    value={legalWeight}
                    onChange={(e) => setLegalWeight(Number(e.target.value))}
                    className="w-full accent-[#004778] cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-500 block mt-1">
                    وزن قوانین سخت‌گیرانه اداره مهاجرت و انطباق بورد تخصصی
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2">
                    <span>لایه دوم: امنیت مالیاتی و ساختار تراست دارایی</span>
                    <span className="font-mono text-[#004778]">{taxWeight}٪</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="100"
                    value={taxWeight}
                    onChange={(e) => setTaxWeight(Number(e.target.value))}
                    className="w-full accent-[#004778] cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-500 block mt-1">
                    پرهیز از پرداخت مالیات مضاعف و تضمین سلامت تبادلات بانکی
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2">
                    <span>لایه سوم: بازار کار تخصصی و درآمد ارزی پایدار</span>
                    <span className="font-mono text-[#004778]">{marketWeight}٪</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="100"
                    value={marketWeight}
                    onChange={(e) => setMarketWeight(Number(e.target.value))}
                    className="w-full accent-[#004778] cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-500 block mt-1">
                    تقاضای واقعی برای تخصص یا خدمات شرکت شما در مقصد
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2">
                    <span>لایه چهارم: تطابق زیست‌بوم خانوادگی و آرامش اجتماعی</span>
                    <span className="font-mono text-[#004778]">{familyWeight}٪</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="100"
                    value={familyWeight}
                    onChange={(e) => setFamilyWeight(Number(e.target.value))}
                    className="w-full accent-[#004778] cursor-pointer"
                  />
                  <span className="text-[11px] text-slate-500 block mt-1">
                    کیفیت مدارس، زبان، هزینه‌های رفاهی و پذیرش فرهنگی
                  </span>
                </div>
              </div>

              {/* Live Output Card */}
              <div className="lg:col-span-5 bg-[#faf9f6] p-7 rounded-2xl border border-black/[0.06] flex flex-col justify-between text-right">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles size={16} className="text-[#65a30d]" />
                    <span className="text-xs font-bold text-slate-700">
                      ضریب یکپارچگی استراتژیک محاسبه‌شده
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-mono font-bold text-[#004778]">
                      {aggregateScore}
                    </span>
                    <span className="text-sm font-bold text-slate-500">از ۱۰۰</span>
                  </div>

                  <div className="mb-6">
                    {aggregateScore >= 80 ? (
                      <span className="text-xs font-bold text-[#65a30d] bg-lime-100/80 px-2.5 py-1 rounded-full">
                        پایداری بالا؛ آماده ورود به فاز بررسی سناریوهای اجرایی
                      </span>
                    ) : aggregateScore >= 60 ? (
                      <span className="text-xs font-bold text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-full">
                        متوسط؛ نیازمند تقویت لایه مالیاتی یا بازار کار
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-red-700 bg-red-100/80 px-2.5 py-1 rounded-full">
                        پرریسک؛ پیشنهاد بازنگری در اهداف اولیه
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    این ارزیابی حاصل برآیند ۴ ستون تحلیل است. برای ثبت پرونده و دریافت تحلیل تفصیلی توسط هیئت مشاوران مهام، به موتور ارزیابی هدایت شوید.
                  </p>
                </div>

                <button
                  onClick={() => onRouteChange('decision-engine')}
                  className="w-full py-3 px-4 bg-[#004778] hover:bg-[#003860] text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>ورود به موتور جامع تصمیم‌سازی</span>
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
