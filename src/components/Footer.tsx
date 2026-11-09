import React from 'react';
import { PageRoute } from '../types';
import { Shield, Lock, Award, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  const handleNav = (route: PageRoute) => {
    onRouteChange(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a1128] text-slate-300 border-t border-slate-800/80 pt-16 pb-12 transition-colors">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/[0.08]">
          {/* Col 1 & 2: Brand Lockup & Trust Badges */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="bg-white/95 p-2 rounded-xl inline-block shadow-md">
                <img
                  src="/site_logo.png"
                  alt="گروه بین‌المللی مهام"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-slate-300/90 leading-relaxed max-w-md">
              نهاد معتبر رایزنی، ساختارسازی حقوقی و هدایت راهبردی تصمیمات کلان مهاجرتی و جابجایی بین‌المللی سرمایه، مدیران و نخبگان بر پایه ضوابط دقیق بین‌المللی و اعزام هیأت‌های تجاری و تخصصی.
            </p>

            {/* Trust Markers */}
            <div className="flex items-center gap-2.5 flex-wrap pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] rounded-lg text-slate-200 text-xs border border-white/10">
                <Award size={14} className="text-lime-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] rounded-lg text-slate-200 text-xs border border-white/10">
                <Shield size={14} className="text-lime-400" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.06] rounded-lg text-slate-200 text-xs border border-white/10">
                <Lock size={14} className="text-lime-400" />
                <span>AES-256 Confidentiality</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-white tracking-wide border-r-2 border-lime-500 pr-2">
              دسترسی سریع
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors text-right"
                >
                  صفحه اصلی پایگاه
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors text-right"
                >
                  درباره ساختار و هویت مهام
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('how-it-works')}
                  className="hover:text-white transition-colors text-right"
                >
                  متدولوژی ۴ مرحله‌ای
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('decision-engine')}
                  className="hover:text-white transition-colors text-right"
                >
                  موتور ارزیابی و تصمیم‌سازی
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('decision-matrix')}
                  className="hover:text-white transition-colors text-right"
                >
                  ماتریس تحلیل شرایط
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('assessment')}
                  className="hover:text-white transition-colors text-right"
                >
                  پرسشنامه ارزیابی انطباق
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Audiences & Pathways */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-white tracking-wide border-r-2 border-lime-500 pr-2">
              مخاطبان و مسیرها
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('audiences/physicians')}
                  className="hover:text-white transition-colors text-right"
                >
                  جامعه پزشکی و سلامت
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('audiences/attorneys')}
                  className="hover:text-white transition-colors text-right"
                >
                  وکلا و مشاوران حقوقی
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('audiences/executives')}
                  className="hover:text-white transition-colors text-right"
                >
                  مدیران ارشد و رهبران
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('audiences/founders')}
                  className="hover:text-white transition-colors text-right"
                >
                  صاحبان کسب‌وکار و بنیان‌گذاران
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('audiences/specialists')}
                  className="hover:text-white transition-colors text-right"
                >
                  متخصصان و نخبگان علمی
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pathways/experiences')}
                  className="hover:text-white transition-colors text-right text-lime-400"
                >
                  تجارب زیسته و هیأت‌های تجاری
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Transparency & Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-white tracking-wide border-r-2 border-lime-500 pr-2">
              شفافیت و تماس
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={17} className="text-lime-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  مرکز عملیات تهران و شبکه کارگزاری ژنو، لندن و دبی
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={17} className="text-lime-400 shrink-0" />
                <span className="font-mono text-sm tracking-wide" dir="ltr">
                  ۰۲۱-۹۲۰۰۰۰۰۰
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={17} className="text-lime-400 shrink-0" />
                <span className="font-mono text-xs" dir="ltr">
                  advisory@mahaamgroup.com
                </span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-lime-400 hover:text-lime-300 transition-colors"
                >
                  <span>درخواست جلسه مشاوره محرمانه</span>
                  <ArrowLeft size={14} />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row: Copyright & Ethics */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3 flex-wrap">
            <p>© {new Date().getFullYear()} گروه بین‌المللی مهام. تمامی حقوق مادی و معنوی محفوظ است.</p>
            <span className="hidden md:inline text-slate-700">•</span>
            <p className="font-mono text-[11px] text-slate-500" dir="ltr">
              Mahaam International Group. Confidential & Regulated Advisory.
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
              قوانین و چارچوب محرمانگی
            </button>
            <span className="text-slate-700">•</span>
            <button onClick={() => handleNav('how-it-works')} className="hover:text-white transition-colors">
              منشور اخلاق حرفه‌ای
            </button>
            <span className="text-slate-700">•</span>
            <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
              پروتکل حفاظت از داده‌ها
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
