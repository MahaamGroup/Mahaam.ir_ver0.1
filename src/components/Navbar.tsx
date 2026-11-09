import React, { useState } from 'react';
import { PageRoute } from '../types';
import { ChevronDown, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onRouteChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audiencesDropdownOpen, setAudiencesDropdownOpen] = useState(false);
  const [pathwaysDropdownOpen, setPathwaysDropdownOpen] = useState(false);

  const handleNavigate = (route: PageRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    setAudiencesDropdownOpen(false);
    setPathwaysDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isAudienceActive = currentRoute.startsWith('audiences');
  const isPathwayActive = currentRoute.startsWith('pathways');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#faf9f6]/90 backdrop-blur-md border-b border-black/[0.06] transition-all">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Official Logo */}
        <button
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-3 text-right focus:outline-none group shrink-0"
        >
          <img
            src="/site_logo.png"
            alt="گروه بین‌المللی مهام"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </button>

        {/* Zone 2: 4-5 Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-slate-700">
          <button
            onClick={() => handleNavigate('home')}
            className={`whitespace-nowrap transition-colors py-1 relative ${
              currentRoute === 'home'
                ? 'text-[#004778] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#004778]'
                : 'hover:text-[#004778]'
            }`}
          >
            صفحه اصلی
          </button>

          <button
            onClick={() => handleNavigate('about')}
            className={`whitespace-nowrap transition-colors py-1 relative ${
              currentRoute === 'about'
                ? 'text-[#004778] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#004778]'
                : 'hover:text-[#004778]'
            }`}
          >
            درباره مهام
          </button>

          <button
            onClick={() => handleNavigate('how-it-works')}
            className={`whitespace-nowrap transition-colors py-1 relative ${
              currentRoute === 'how-it-works'
                ? 'text-[#004778] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#004778]'
                : 'hover:text-[#004778]'
            }`}
          >
            فرآیند ۴ مرحله‌ای
          </button>

          {/* Audiences Menu with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAudiencesDropdownOpen(true)}
            onMouseLeave={() => setAudiencesDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavigate('audiences')}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap transition-colors py-1 relative ${
                isAudienceActive
                  ? 'text-[#004778] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#004778]'
                  : 'hover:text-[#004778]'
              }`}
            >
              <span>مخاطبان تخصصی</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${audiencesDropdownOpen ? 'rotate-180 text-[#004778]' : 'text-slate-400'}`}
              />
            </button>

            {audiencesDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-72 bg-white rounded-xl shadow-xl shadow-slate-900/10 border border-slate-100 p-2 text-right transition-all">
                <button
                  onClick={() => handleNavigate('audiences')}
                  className="w-full text-right px-3 py-2 text-xs font-semibold text-[#004778] bg-sky-50/70 rounded-lg mb-1 flex items-center justify-between"
                >
                  <span>مرکز گروه‌های مخاطب (نمای کلی)</span>
                  <ArrowUpRight size={14} />
                </button>
                <button
                  onClick={() => handleNavigate('audiences/physicians')}
                  className="w-full text-right px-3 py-2 text-sm text-slate-700 hover:text-[#004778] hover:bg-slate-50 rounded-lg transition-colors flex flex-col"
                >
                  <span className="font-semibold">پزشکان و سلامت</span>
                  <span className="text-xs text-slate-400">معادل‌سازی بالینی و فرصت‌های بیمارستانی</span>
                </button>
                <button
                  onClick={() => handleNavigate('audiences/attorneys')}
                  className="w-full text-right px-3 py-2 text-sm text-slate-700 hover:text-[#004778] hover:bg-slate-50 rounded-lg transition-colors flex flex-col"
                >
                  <span className="font-semibold">وکلا و حقوق‌دانان</span>
                  <span className="text-xs text-slate-400">داوری‌های بین‌المللی و ساختارهای فرامرزی</span>
                </button>
                <button
                  onClick={() => handleNavigate('audiences/executives')}
                  className="w-full text-right px-3 py-2 text-sm text-slate-700 hover:text-[#004778] hover:bg-slate-50 rounded-lg transition-colors flex flex-col"
                >
                  <span className="font-semibold">مدیران ارشد و سازمان‌ها</span>
                  <span className="text-xs text-slate-400">حکمرانی شرکتی و انتقال بین‌المللی مدیران</span>
                </button>
                <button
                  onClick={() => handleNavigate('audiences/founders')}
                  className="w-full text-right px-3 py-2 text-sm text-slate-700 hover:text-[#004778] hover:bg-slate-50 rounded-lg transition-colors flex flex-col"
                >
                  <span className="font-semibold">صاحبان کسب‌وکار</span>
                  <span className="text-xs text-slate-400">مقیاس‌پذیری و حفظ دارایی‌های کارآفرینان</span>
                </button>
                <button
                  onClick={() => handleNavigate('audiences/specialists')}
                  className="w-full text-right px-3 py-2 text-sm text-slate-700 hover:text-[#004778] hover:bg-slate-50 rounded-lg transition-colors flex flex-col"
                >
                  <span className="font-semibold">متخصصان و نخبگان علمی</span>
                  <span className="text-xs text-slate-400">مسیرهای تلنت، گرنت‌ها و مراکز تحقیقاتی</span>
                </button>
              </div>
            )}
          </div>

          {/* Pathways Menu */}
          <div
            className="relative"
            onMouseEnter={() => setPathwaysDropdownOpen(true)}
            onMouseLeave={() => setPathwaysDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavigate('pathways')}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap transition-colors py-1 relative ${
                isPathwayActive
                  ? 'text-[#004778] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#004778]'
                  : 'hover:text-[#004778]'
              }`}
            >
              <span>مسیرها و تجارب</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${pathwaysDropdownOpen ? 'rotate-180 text-[#004778]' : 'text-slate-400'}`}
              />
            </button>

            {pathwaysDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-64 bg-white rounded-xl shadow-xl shadow-slate-900/10 border border-slate-100 p-2 text-right transition-all">
                <button
                  onClick={() => handleNavigate('pathways')}
                  className="w-full text-right px-3 py-2 text-xs font-semibold text-[#004778] bg-sky-50/70 rounded-lg mb-1 flex items-center justify-between"
                >
                  <span>نقشه مسیرهای بین‌المللی</span>
                  <ArrowUpRight size={14} />
                </button>
                <button
                  onClick={() => handleNavigate('pathways/discovery')}
                  className="w-full text-right px-3 py-2 text-sm text-slate-700 hover:text-[#004778] hover:bg-slate-50 rounded-lg transition-colors flex flex-col"
                >
                  <span className="font-semibold">کشف فرصت‌های راهبردی</span>
                  <span className="text-xs text-slate-400">غربالگری فرصت‌ها پیش از اتلاف سرمایه</span>
                </button>
                <button
                  onClick={() => handleNavigate('pathways/experiences')}
                  className="w-full text-right px-3 py-2 text-sm text-slate-700 hover:text-[#004778] hover:bg-slate-50 rounded-lg transition-colors flex flex-col"
                >
                  <span className="font-semibold">تجارب زیسته و هیأت‌های تجاری</span>
                  <span className="text-xs text-slate-400">اعزام‌های میدانی و آزمون مستقیم واقعیت</span>
                </button>
                <button
                  onClick={() => handleNavigate('decision-matrix')}
                  className="w-full text-right px-3 py-2 text-sm text-slate-700 hover:text-[#004778] hover:bg-slate-50 rounded-lg transition-colors flex flex-col"
                >
                  <span className="font-semibold">ماتریس تصمیم‌گیری ۴ لایه</span>
                  <span className="text-xs text-slate-400">تطبیق اهداف، دارایی‌ها و معیارهای ریسک</span>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavigate('decision-engine')}
            className={`whitespace-nowrap transition-colors py-1 relative ${
              currentRoute === 'decision-engine'
                ? 'text-[#004778] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#004778]'
                : 'hover:text-[#004778]'
            }`}
          >
            موتور تصمیم‌سازی
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavigate('assessment')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#004778] hover:bg-[#003860] active:scale-[0.98] rounded-xl shadow-sm hover:shadow-md transition-all duration-150 whitespace-nowrap"
          >
            <ShieldCheck size={16} className="text-lime-400" />
            <span>درخواست ارزیابی اولیه</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-black/5"
            aria-label="باز کردن منو"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf9f6] border-b border-black/[0.08] px-4 pt-3 pb-6 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          <button
            onClick={() => handleNavigate('home')}
            className="text-right py-2.5 px-3 rounded-lg text-slate-800 hover:bg-black/5 font-medium"
          >
            صفحه اصلی
          </button>
          <button
            onClick={() => handleNavigate('about')}
            className="text-right py-2.5 px-3 rounded-lg text-slate-800 hover:bg-black/5 font-medium"
          >
            درباره ساختار مهام
          </button>
          <button
            onClick={() => handleNavigate('how-it-works')}
            className="text-right py-2.5 px-3 rounded-lg text-slate-800 hover:bg-black/5 font-medium"
          >
            فرآیند ۴ مرحله‌ای همکاری
          </button>

          <div className="border-t border-black/[0.06] pt-2">
            <span className="block px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              گروه‌های مخاطب مهام
            </span>
            <button
              onClick={() => handleNavigate('audiences')}
              className="w-full text-right py-2 px-3 rounded-lg text-slate-700 hover:bg-black/5 text-sm"
            >
              مرکز همه مخاطبان
            </button>
            <button
              onClick={() => handleNavigate('audiences/physicians')}
              className="w-full text-right py-2 px-3 rounded-lg text-slate-700 hover:bg-black/5 text-sm"
            >
              پزشکان و سلامت
            </button>
            <button
              onClick={() => handleNavigate('audiences/attorneys')}
              className="w-full text-right py-2 px-3 rounded-lg text-slate-700 hover:bg-black/5 text-sm"
            >
              وکلا و حقوق‌دانان
            </button>
            <button
              onClick={() => handleNavigate('audiences/executives')}
              className="w-full text-right py-2 px-3 rounded-lg text-slate-700 hover:bg-black/5 text-sm"
            >
              مدیران ارشد و سازمان‌ها
            </button>
            <button
              onClick={() => handleNavigate('audiences/founders')}
              className="w-full text-right py-2 px-3 rounded-lg text-slate-700 hover:bg-black/5 text-sm"
            >
              صاحبان کسب‌وکار و بنیان‌گذاران
            </button>
            <button
              onClick={() => handleNavigate('audiences/specialists')}
              className="w-full text-right py-2 px-3 rounded-lg text-slate-700 hover:bg-black/5 text-sm"
            >
              متخصصان و پژوهشگران
            </button>
          </div>

          <div className="border-t border-black/[0.06] pt-2">
            <span className="block px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              مسیرها و ابزارهای تصمیم
            </span>
            <button
              onClick={() => handleNavigate('pathways')}
              className="w-full text-right py-2 px-3 rounded-lg text-slate-700 hover:bg-black/5 text-sm"
            >
              مسیرهای بین‌المللی
            </button>
            <button
              onClick={() => handleNavigate('pathways/discovery')}
              className="w-full text-right py-2 px-3 rounded-lg text-slate-700 hover:bg-black/5 text-sm"
            >
              کشف فرصت‌های راهبردی
            </button>
            <button
              onClick={() => handleNavigate('pathways/experiences')}
              className="w-full text-right py-2 px-3 rounded-lg text-slate-700 hover:bg-black/5 text-sm"
            >
              تجارب زیسته و هیأت‌های تجاری
            </button>
            <button
              onClick={() => handleNavigate('decision-matrix')}
              className="w-full text-right py-2 px-3 rounded-lg text-slate-700 hover:bg-black/5 text-sm"
            >
              ماتریس تصمیم‌گیری
            </button>
            <button
              onClick={() => handleNavigate('decision-engine')}
              className="w-full text-right py-2 px-3 rounded-lg text-slate-700 hover:bg-black/5 text-sm font-semibold text-[#004778]"
            >
              موتور ارزیابی و تصمیم‌سازی هوشمند
            </button>
          </div>

          <div className="border-t border-black/[0.06] pt-3 flex flex-col gap-2">
            <button
              onClick={() => handleNavigate('assessment')}
              className="w-full py-2.5 px-4 text-center font-semibold text-white bg-[#004778] rounded-xl text-sm"
            >
              درخواست ارزیابی اولیه صلاحیت
            </button>
            <button
              onClick={() => handleNavigate('contact')}
              className="w-full py-2.5 px-4 text-center font-medium text-slate-700 bg-white border border-slate-200 rounded-xl text-sm"
            >
              ارتباط و هماهنگی جلسه محرمانه
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
