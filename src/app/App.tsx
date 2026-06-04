import { Star, Menu, Search, User, MapPin, Phone, Mail, Instagram, Youtube, Linkedin, Clock, Shield, CheckCircle2, Calendar, Settings, Eye, FileText, DollarSign, Award, Zap, ChevronLeft, Sun, Moon, ShoppingBag, X } from "lucide-react";
import { useState, useEffect } from "react";
const logoImage = new URL("../../assets/logo.png", import.meta.url).href;
const darkLogoImage = new URL("../../assets/logo2.png", import.meta.url).href;
const bannerHorizontalImage = new URL("../../assets/بانر-افقي-لوزان.png", import.meta.url).href;
const carProtectionImage = new URL("../../assets/خنقة-سياره.png", import.meta.url).href;
const yourCarDeservesImage = new URL("../../assets/سيارتك-تستاهل.png", import.meta.url).href;
const oldInsulatorImage = new URL("../../assets/عازلك-القديم.png", import.meta.url).href;
const beforeAugustImage = new URL("../../assets/قبل-اغسطس.png", import.meta.url).href;
const everyWeekImage = new URL("../../assets/كل-اسبوع.png", import.meta.url).href;

const whatsappBookingUrl = `https://api.whatsapp.com/send/?phone=966535101960&text=${encodeURIComponent("السلام عليكم، أرغب بحجز عرض تظليلة النانو سيراميك بـ 270 ريال.")}&type=phone_number&app_absent=0`;
const whatsappBookingUrl500 = `https://api.whatsapp.com/send/?phone=966535101960&text=${encodeURIComponent("السلام عليكم، أرغب بحجز عرض حماية السيارات بـ 500 ريال.")}&type=phone_number&app_absent=0`;

const offerPackages = [
  {
    price: "270 ريال",
    title: "عرض التظليلة الأساسية",
    description: "حل سريع ومميز للحماية اليومية مع نتيجة احترافية وسريعة.",
    points: ["تظليلة نانو سيراميك", "حماية من الحرارة والأشعة", "ضمان جودة على التركيب"],
    accent: "primary",
  },
  {
    price: "500 ريال",
    title: "عرض الحماية الشاملة",
    description: "خدمة متكاملة تجمع بين الحماية القوية والمظهر الراقي للسيارة.",
    points: ["حماية أعمق + عزل متقدم", "تنظيف ومتابعة مهنية", "أفضل قيمة لحفظ السيارة"],
    accent: "yellow",
  },
];

const offerImages = [
  {
    src: carProtectionImage,
    title: "تظليلة نانو سيراميك 270 ريال",
    description: "حماية شاملة للسيارة مع ضمان طويل الأمد ونتيجة احترافية.",
  },
  {
    src: yourCarDeservesImage,
    title: "حماية السيارة بأعلى جودة",
    description: "خدمة احترافية تحافظ على مظهر سيارتك وتزيد من قيمتها.",
  },
  {
    src: oldInsulatorImage,
    title: "إعادة تأهيل العازل القديم",
    description: "حل عملي يعيد للسيارة مظهرها ويحسن مستوى الحماية.",
  },
  {
    src: beforeAugustImage,
    title: "عرض محدود قبل أغسطس",
    description: "استفد من الفرصة قبل انتهاء التوفير أو تغيير الأسعار.",
  },
  {
    src: everyWeekImage,
    title: "عروض لوزان المتجددة",
    description: "تحديثات عروض دورية مع دعم فني ومتابعة مميزة.",
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedOfferImage, setSelectedOfferImage] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    document.title = "لوزان";
  }, []);

  useEffect(() => {
    if (!selectedOfferImage) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedOfferImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedOfferImage]);

  return (
    <div dir="rtl" className={`${isDarkMode ? "dark" : ""} min-h-screen bg-background pb-20 text-foreground font-['Cairo'] transition-colors duration-300 sm:pb-0`}>
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDarkMode ? "border-white/10 bg-black/80" : "border-black/10 bg-white/90 shadow-sm"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-10 lg:gap-14">
              {/* Logo */}
              <a href="#home" aria-label="لوزان - الرئيسية" className="flex items-center">
                <img src={isDarkMode ? darkLogoImage : logoImage} alt="لوزان" className="h-11 w-auto object-contain sm:h-12" />
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden items-center gap-8 lg:flex">
                {[
                  { href: "#home", label: "الرئيسية" },
                  { href: "#features", label: "الخدمات" },
                  { href: "#about", label: "من نحن" },
                  { href: "#reviews", label: "الآراء" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group relative py-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    {link.label}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 origin-right scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label={isDarkMode ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-semibold transition-colors ${isDarkMode ? "border-white/15 bg-white/5 hover:bg-white/10" : "border-black/10 bg-black/[0.03] hover:bg-black/[0.06]"}`}
              >
                {isDarkMode ? <Sun size={17} /> : <Moon size={17} />}
                <span className="hidden sm:inline">{isDarkMode ? "فاتح" : "داكن"}</span>
              </button>
              <button 
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="border-t border-border py-4 lg:hidden">
              <nav className="flex flex-col gap-4">
                <a href="#home" className="text-sm hover:text-primary transition-colors">الرئيسية</a>
                <a href="#features" className="text-sm hover:text-primary transition-colors">الخدمات</a>
                <a href="#about" className="text-sm hover:text-primary transition-colors">من نحن</a>
                <a href="#reviews" className="text-sm hover:text-primary transition-colors">الآراء</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-[790px] items-start justify-center overflow-hidden pb-[158px] pt-[108px] text-white sm:min-h-screen sm:items-center sm:pb-0 sm:pt-20">
        {/* Full Background Image */}
        <img
          src="https://i.postimg.cc/59Cyg04d/Chat-GPT-Image-May-25-2026-11-42-16-AM.png"
          alt="سيارات لوزان"
          className="hidden sm:block absolute inset-0 w-full h-full object-cover"
        />
        <img
          src="https://i.postimg.cc/5ywWQyhD/f330d390-805d-44f2-b43d-6498bc827327.png"
          alt="سيارات لوزان"
          className="sm:hidden absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/45 sm:from-black/50 sm:via-black/20 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        {/* Content overlay */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-3.5 sm:px-4">
            {/* Hero Text */}
            <div className="mx-auto max-w-[360px] sm:mx-0 sm:max-w-2xl">
              <h1 className="mb-2 text-center text-[2rem] font-bold leading-tight drop-shadow-2xl sm:mb-4 sm:text-right sm:text-5xl lg:text-6xl">
                تظليلة نانو سيراميك
              </h1>
              <div className="mb-3 flex items-center justify-center gap-3 sm:justify-start sm:gap-4">
                <div className="h-px w-8 bg-gradient-to-l from-yellow-500 to-transparent sm:max-w-[40px] sm:flex-1"></div>
                <p className="whitespace-nowrap text-2xl font-extrabold text-yellow-500 drop-shadow-lg sm:text-4xl lg:text-5xl">
                  بـ 270 ريال
                </p>
                <div className="h-px w-8 bg-gradient-to-r from-yellow-500 to-transparent sm:max-w-[40px] sm:flex-1"></div>
              </div>
              <p className="mb-5 text-center text-sm font-medium text-white/90 drop-shadow sm:mb-8 sm:text-right sm:text-lg">
                حماية من الحرارة والأشعة فوق البنفسجية بضمان حتى 10 سنوات
              </p>

              {/* Trust points close to the primary action */}
              <div className="mb-5 grid max-w-full grid-cols-2 gap-2.5 sm:mb-8 sm:max-w-lg sm:gap-3">
                {[
                  { icon: <Sun size={18} />, title: "حجب حتى 99%", detail: "من أشعة الشمس" },
                  { icon: <Shield size={18} />, title: "ضمان حتى 10 سنوات", detail: "على جودة التركيب" },
                  { icon: <CheckCircle2 size={18} />, title: "تركيب احترافي", detail: "لجميع السيارات" },
                  { icon: <DollarSign size={18} />, title: "تابي وتمارا", detail: "خيارات دفع ميسرة" },
                ].map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-2 rounded-lg border border-white/15 bg-black/30 p-2.5 text-right backdrop-blur-sm sm:p-3">
                    <span className="mt-0.5 shrink-0 text-yellow-500">{benefit.icon}</span>
                    <div>
                      <div className="text-[11px] font-bold sm:text-sm">{benefit.title}</div>
                      <div className="text-[10px] text-white/70 sm:text-xs">{benefit.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Section */}
              <div className="mb-0 flex flex-col items-center gap-3 sm:mb-28 sm:items-start">
                <div className="w-full max-w-md rounded-2xl border border-white/15 bg-black/35 p-3 text-right shadow-[0_18px_40px_rgba(0,0,0,0.25)] backdrop-blur-md sm:max-w-lg">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-yellow-400">العروض المتاحة</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-white/90">
                    <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1">270 ريال · تظليلة نانو سيراميك</span>
                    <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1">500 ريال · حماية شاملة + عزل احترافي</span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
                  <a href={whatsappBookingUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-[48px] w-[220px] items-center justify-center gap-2 rounded-lg border border-yellow-500 bg-primary px-5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(220,38,38,0.35)] transition-all hover:scale-105 hover:border-yellow-400 hover:bg-primary/90 sm:min-h-[58px] sm:w-auto sm:px-9 sm:text-lg">
                    <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span>احجز عرض 270 ريال</span>
                  </a>
                  <a href={whatsappBookingUrl500} target="_blank" rel="noopener noreferrer" className={`flex min-h-[48px] w-[220px] items-center justify-center gap-2 rounded-lg border px-5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(255,255,255,0.08)] transition-all hover:scale-105 sm:min-h-[58px] sm:w-auto sm:px-9 sm:text-lg ${isDarkMode ? "border-white/20 bg-white/10 hover:bg-white/15" : "border-black/10 bg-black/85 hover:bg-black/95"}`}>
                    <Shield className="h-5 w-5 text-yellow-400 sm:h-6 sm:w-6" />
                    <span>احجز عرض 500 ريال</span>
                  </a>
                </div>

                <a href="https://salla.sa/lozan-sa/" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-yellow-400 sm:text-sm">
                  <span>اشتري من المتجر</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black via-black/85 to-transparent sm:from-black/60 sm:to-transparent">
          <div className="border-t border-white/5 sm:border-white/10"></div>
          <div className="container mx-auto px-4 py-2.5 sm:py-5">
            <div className="grid grid-cols-2 gap-0 text-[12px] text-white/80 sm:grid-cols-4 sm:gap-0 sm:text-lg">
              <div className="flex items-center justify-center gap-2 border-b border-l border-white/5 px-2 py-3.5 sm:justify-start sm:gap-5 sm:border-b-0 sm:py-5 sm:px-5">
                <Sun size={18} className="flex-shrink-0 text-yellow-500 sm:h-6 sm:w-6" />
                <span className="hidden sm:inline">عزل حراري ممتاز</span>
                <span className="sm:hidden">عزل حراري</span>
              </div>
              <div className="flex items-center justify-center gap-2 border-b border-white/5 px-2 py-3.5 sm:justify-start sm:gap-5 sm:border-b-0 sm:border-l sm:py-5 sm:px-5">
                <Shield size={18} className="flex-shrink-0 text-yellow-500 sm:h-6 sm:w-6" />
                <span className="hidden sm:inline">حماية من الأشعة فوق البنفسجية</span>
                <span className="sm:hidden">حماية UV</span>
              </div>
              <div className="flex items-center justify-center gap-2 border-l border-white/5 px-2 py-3.5 sm:justify-start sm:gap-5 sm:py-5 sm:px-5">
                <Eye size={18} className="flex-shrink-0 text-yellow-500 sm:h-6 sm:w-6" />
                <span className="hidden sm:inline">وضوح رؤية عالي</span>
                <span className="sm:hidden">وضوح رؤية</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-2 py-3.5 sm:justify-start sm:gap-5 sm:py-5 sm:px-5">
                <Zap size={18} className="flex-shrink-0 text-yellow-500 sm:h-6 sm:w-6" />
                <span className="hidden sm:inline">ضمان حتى 10 سنوات</span>
                <span className="sm:hidden">ضمان 10 سنوات</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eid Offer Gallery */}
      <section className={`pt-14 pb-7 transition-colors duration-300 sm:pt-20 sm:pb-10 ${isDarkMode ? "bg-[#090909]" : "bg-[#f7f7f7]"}`}>
        <div className="container mx-auto px-4">
          <div className="mb-9 text-center sm:mb-11">
            <h2 className="text-3xl font-bold sm:text-[2.55rem]">اختر العرض المناسب لك</h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">عروض حصرية لفترة محدودة </p>
          </div>

          <div dir="ltr" className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 sm:gap-5">
            {offerImages.map((offer, index) => (
              <div
                key={offer.src}
                className={`overflow-hidden rounded-xl border p-2 shadow-[0_14px_38px_rgba(0,0,0,0.12)] transition-colors duration-300 sm:p-3 ${isDarkMode ? "border-white/10 bg-[#070707]" : "border-black/10 bg-white"}`}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (window.matchMedia("(max-width: 639px)").matches) {
                      setSelectedOfferImage(offer.src);
                    }
                  }}
                  aria-label={`عرض صورة لوزان ${index + 1} بحجم كامل`}
                  className="block w-full cursor-zoom-in sm:cursor-default"
                >
                  <img
                    src={offer.src}
                    alt={offer.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-lg object-contain object-center bg-black/5 sm:aspect-[4/5]"
                  />
                </button>
                <div dir="rtl" className="px-1 pb-1 pt-2.5 text-right sm:pt-3">
                  <h3 className="text-sm font-bold sm:text-base">{offer.title}</h3>
                  <p className="mt-1 text-[11px] text-muted-foreground sm:text-xs">{offer.description}</p>
                  <div className="mt-2 flex flex-wrap justify-end gap-1.5 text-[10px] font-semibold text-yellow-500 sm:text-xs">
                    <span className="rounded-full border border-yellow-500/25 px-2 py-1">ضمان حتى 10 سنوات</span>
                    <span className="rounded-full border border-yellow-500/25 px-2 py-1">حجب حتى 99%</span>
                  </div>
                </div>
                <a
                  dir="rtl"
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 flex min-h-10 w-full items-center justify-center gap-1.5 rounded-md border border-red-400/20 bg-[#dc2525] px-2 text-[11px] font-bold text-white shadow-[0_7px_18px_rgba(220,37,37,0.26)] transition-all hover:bg-[#ed3030] sm:mt-3 sm:min-h-[48px] sm:gap-2 sm:text-sm"
                >
                  <span>احجز عبر واتساب</span>
                  <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`px-4 pb-8 pt-2 transition-colors duration-300 sm:pb-12 ${isDarkMode ? "bg-[#090909]" : "bg-[#f7f7f7]"}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6 text-center sm:mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-yellow-500">الفرق بين العرضين</p>
            <h3 className="mt-2 text-2xl font-bold sm:text-3xl">اختر العرض الذي يناسب سيارتك وأهدافك</h3>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">شرح واضح ومباشر لكل عرض مع مميزات كل خدمة لتساعد العميل على اتخاذ القرار بسرعة.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {offerPackages.map((item) => (
              <article key={item.title} className={`rounded-2xl border p-5 shadow-[0_18px_40px_rgba(0,0,0,0.14)] ${isDarkMode ? "border-white/10 bg-black/70" : "border-black/10 bg-white"}`}>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-yellow-500">عرض</p>
                    <h4 className="mt-1 text-xl font-bold">{item.title}</h4>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-sm font-bold ${item.accent === "yellow" ? "bg-yellow-400/10 text-yellow-400" : "bg-primary/10 text-primary"}`}>{item.price}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                <ul className="mt-4 space-y-2 text-right text-sm text-foreground/90">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 justify-end">
                      <CheckCircle2 size={16} className="mt-0.5 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a href={item.price === "270 ريال" ? whatsappBookingUrl : whatsappBookingUrl500} target="_blank" rel="noopener noreferrer" className={`mt-5 inline-flex min-h-[46px] items-center justify-center rounded-lg px-4 text-sm font-bold text-white transition-colors ${item.accent === "yellow" ? "bg-yellow-500 hover:bg-yellow-400" : "bg-primary hover:bg-red-500"}`}>
                  احجز الآن
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedOfferImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="معاينة العرض"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:hidden"
          onClick={() => setSelectedOfferImage(null)}
        >
          <button
            type="button"
            aria-label="إغلاق الصورة"
            onClick={() => setSelectedOfferImage(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm"
          >
            <X size={26} />
          </button>
          <img
            src={selectedOfferImage}
            alt="العرض بالحجم الكامل"
            className="max-h-full max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

    

      {/* Why Lozan Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Car Image Card */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden group order-2 lg:order-1">
              <img
                src="https://i.ibb.co/q3Vxyqv8/Chat-GPT-Image-May-23-2026-12-59-26-AM.png"
                alt="وش يفرق"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              {/* Card Content */}
              <div className="absolute bottom-0 right-0 left-0 p-6 text-right text-white">
                <div className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  الفرق واضح
                </div>
                <h3 className="text-2xl font-bold mb-2">حماية دائمة وفعّالة</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  تقنية النانو سيراميك توفر حماية مستدامة ضد الحرارة والأشعة فوق البنفسجية مع حفاظ الزجاج على وضوح الرؤية الممتاز
                </p>
                <div className="flex items-center gap-4 mt-4 justify-end">
                  <div className="flex items-center gap-1.5 text-xs text-white/60">
                    <CheckCircle2 size={14} className="text-primary" />
                    <span>عزل حراري فعّال</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/60">
                    <CheckCircle2 size={14} className="text-primary" />
                    <span>خصوصية وحماية</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="text-right order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">لماذا لوزان؟</h2>
              <p className="text-muted-foreground mb-8">نوفر لك الحماية الشاملة بأحدث التقنيات</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-secondary/20 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
                  <Zap className="text-primary shrink-0 mt-1" size={24} />
                  <div className="text-right">
                    <h3 className="font-bold mb-1">عزل حراري متقدم</h3>
                    <p className="text-sm text-muted-foreground">تقلل درجة الحرارة داخل السيارة بنسبة تصل إلى 50%</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/20 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
                  <Eye className="text-primary shrink-0 mt-1" size={24} />
                  <div className="text-right">
                    <h3 className="font-bold mb-1">وضوح رؤية ممتاز</h3>
                    <p className="text-sm text-muted-foreground">الزجاج يبقى واضح تماماً دون أي تأثر بالحماية</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/20 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
                  <Shield className="text-primary shrink-0 mt-1" size={24} />
                  <div className="text-right">
                    <h3 className="font-bold mb-1">حماية من الأشعة فوق البنفسجية</h3>
                    <p className="text-sm text-muted-foreground">حماية 99% من الأشعة الضارة والحفاظ على الجلديات</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary/20 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
                  <Award className="text-primary shrink-0 mt-1" size={24} />
                  <div className="text-right">
                    <h3 className="font-bold mb-1">ضمان يصل إلى 10 سنوات</h3>
                    <p className="text-sm text-muted-foreground">ضمان 10 سنوات على جودة الطبقة الحماية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .review-card {
          animation: slideInUp 0.8s ease-out forwards;
        }
        .review-card:nth-child(1) { animation-delay: 0.1s; }
        .review-card:nth-child(2) { animation-delay: 0.3s; }
        .review-card:nth-child(3) { animation-delay: 0.5s; }
        .review-comment {
          animation: fadeInScale 0.6s ease-out forwards;
          animation-delay: 0.6s;
        }
      `}</style>
      <section id="reviews" className={`relative scroll-mt-20 overflow-hidden py-20 transition-colors duration-300 ${isDarkMode ? "bg-gradient-to-b from-transparent via-black/40 to-black/60" : "bg-gradient-to-b from-white via-red-50/40 to-gray-100"}`}>
        {/* Cinematic background effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-2">آراء العملاء</h2>
            <p className="text-yellow-500 font-semibold">تجارب عملائنا مع حماية لوزان</p>
          </div>

          <div className="flex flex-col gap-6 max-w-2xl mx-auto">
            {/* Review Card 1 */}
            <div className={`review-card rounded-2xl border p-8 backdrop-blur-md transition-colors hover:border-primary/30 ${isDarkMode ? "border-white/10 bg-black/50" : "border-black/10 bg-white shadow-sm"}`}>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-primary text-primary" />
                ))}
              </div>
              <h3 className="font-bold text-center mb-4 text-xl">Ziad Saud</h3>
              <div className={`review-comment rounded-xl p-5 text-center text-black ${isDarkMode ? "bg-white" : "bg-gray-50"}`}>
                <p className="text-sm sm:text-base font-semibold leading-relaxed">
                  الفرق بين معك من أول وقفة في الشمس تريد كيف صار أسرع بمراحل.. تجربة تستحق 10/10
                </p>
              </div>
            </div>

            {/* Review Card 2 */}
            <div className={`review-card rounded-2xl border p-8 backdrop-blur-md transition-colors hover:border-primary/30 ${isDarkMode ? "border-white/10 bg-black/50" : "border-black/10 bg-white shadow-sm"}`}>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-primary text-primary" />
                ))}
              </div>
              <h3 className="font-bold text-center mb-4 text-xl">إبراهيم بن خليف المطيري</h3>
              <div className={`review-comment rounded-xl p-5 text-center text-black ${isDarkMode ? "bg-white" : "bg-gray-50"}`}>
                <p className="text-sm sm:text-base font-semibold leading-relaxed">
                  أفضل عازل حراري يحميك من الشمس
                </p>
              </div>
            </div>

            {/* Review Card 3 */}
            <div className={`review-card rounded-2xl border p-8 backdrop-blur-md transition-colors hover:border-primary/30 ${isDarkMode ? "border-white/10 bg-black/50" : "border-black/10 bg-white shadow-sm"}`}>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-primary text-primary" />
                ))}
              </div>
              <h3 className="font-bold text-center mb-4 text-xl">Sara Alqahtani</h3>
              <div className={`review-comment rounded-xl p-5 text-center text-black ${isDarkMode ? "bg-white" : "bg-gray-50"}`}>
                <p className="text-sm sm:text-base font-semibold leading-relaxed">
                  العازل أثيق وشكله راقي على السيارة كأنه وكالة
                </p>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
         
        </div>
      </section>

      {/* About Lozan Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)',
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Car Image Card */}
            <div className="relative h-[400px] order-2 lg:order-1 rounded-2xl overflow-hidden group">
              <img
                src="https://i.ibb.co/bgkbjFkF/Chat-GPT-Image-May-23-2026-12-59-32-AM.png"
                alt="عن لوزان"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              {/* Top badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Award size={12} />
                  <span>موثوقون منذ 2020</span>
                </div>
              </div>
              {/* Card Content */}
              <div className="absolute bottom-0 right-0 left-0 p-6 text-right text-white">
                <h3 className="text-2xl font-bold mb-2">لوزان — الاختيار الأول للحماية</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  نؤمن أن حماية سيارتك لازم تكون احترافية، موثوقة، وبأعلى معايير الجودة
                </p>
                <div className="flex gap-6 justify-end">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">+5000</div>
                    <div className="text-xs text-white/50">سيارة محمية</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">4.95★</div>
                    <div className="text-xs text-white/50">رضا العملاء</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-white/50">خدمة عملاء 24 ساعة</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-right order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">عن لوزان</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                لوزان علامة متخصصة في العزل الحراري وحماية السيارات بتقنيات النانو سيراميك الحديثة. نقدم حلول احترافية تحافظ على حرارة السيارة، تقلل دخول أشعة الشمس، وتعطي خصوصية وحماية أعلى مع وضوح رؤية ممتاز. نهتم بالجودة والتفاصيل ونستخدم خامات عالية الأداء بضمان طويل وخدمة تركيب احترافية تناسب جميع أنواع السيارات.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Zap className="text-primary mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold">عزل حراري</div>
                  <div className="text-sm text-muted-foreground">تقنية متقدمة</div>
                </div>
                <div className="text-center">
                  <Shield className="text-primary mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold">حماية شاملة</div>
                  <div className="text-sm text-muted-foreground">UV و حرارة</div>
                </div>
                <div className="text-center">
                  <CheckCircle2 className="text-primary mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold">جودة عالية</div>
                  <div className="text-sm text-muted-foreground">خامات أصلية</div>
                </div>
                <div className="text-center">
                  <Award className="text-primary mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold">ضمان طويل</div>
                  <div className="text-sm text-muted-foreground">ثقة مضمونة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


  {/* Offer Booking Banner */}
      <section className={`px-4 pb-14 pt-7 transition-colors duration-300 sm:pb-20 sm:pt-10 ${isDarkMode ? "bg-[#090909]" : "bg-[#f7f7f7]"}`}>
        <div className={`relative mx-auto max-w-[1180px] overflow-hidden rounded-2xl border px-5 py-6 transition-colors duration-300 sm:px-8 lg:px-10 ${isDarkMode ? "border-white/15 bg-[#141414]" : "border-black/10 bg-white shadow-sm"}`}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(220,38,38,0.06),transparent_36%),linear-gradient(105deg,rgba(0,0,0,0.03),transparent_55%)]" />
          <div className="relative grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
              <img src={bannerHorizontalImage} alt="عرض لوزان وخصومات الحماية" className="h-56 w-full object-cover object-center sm:h-64" />
            </div>

            <div dir="rtl" className="text-right">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-yellow-500">العروض المميزة</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">عرض 270 ريال + عرض 500 ريال</h2>
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">اختر العرض المناسب لك: حماية نانو سيراميك احترافية أو حزمة شاملة مع عزل وتغطية متكاملة، مع تقديم واضح ومتكامل في نفس المكان.</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a href={whatsappBookingUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-right transition-colors hover:bg-primary/15">
                  <div className="text-sm font-bold text-primary">عرض 270 ريال</div>
                  <p className="mt-1 text-sm text-muted-foreground">تظليلة نانو سيراميك احترافية مع ضمان قوي.</p>
                </a>
                <a href={whatsappBookingUrl500} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-right transition-colors hover:bg-yellow-400/15">
                  <div className="text-sm font-bold text-yellow-400">عرض 500 ريال</div>
                  <p className="mt-1 text-sm text-muted-foreground">حزمة حماية شاملة مع عزل وتغطية متقدمة.</p>
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a href={whatsappBookingUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-[50px] items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-white transition-colors hover:bg-red-500">احجز عرض 270 ريال</a>
                <a href={whatsappBookingUrl500} target="_blank" rel="noopener noreferrer" className={`flex min-h-[50px] items-center justify-center gap-2 rounded-lg border px-5 text-sm font-bold text-white transition-colors ${isDarkMode ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-black/10 bg-black/90 hover:bg-black/95"}`}>احجز عرض 500 ريال</a>
                <a href="https://salla.sa/lozan-sa/" target="_blank" rel="noopener noreferrer" className="flex min-h-[44px] items-center justify-center gap-2 px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-yellow-500">اشتري من المتجر</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className={`border-t py-12 transition-colors duration-300 ${isDarkMode ? "border-white/10 bg-black" : "border-black/10 bg-white"}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="text-right">
              <div className="text-2xl font-bold mb-4">
                Lo<span className="text-primary">zan</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                لوزان — متخصصة في حماية السيارات بتقنية النانو سيراميك وتوفير أفضل جودة خدمة
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Youtube size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors text-sm font-bold">
                  TT
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-right">
              <h3 className="font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">من نحن</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">الشروط والأحكام</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">الأسئلة الشائعة</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="text-right">
              <h3 className="font-bold mb-4">معلومات</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">الخدمات</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">العروض</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">الخدمات</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">الاتصال</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-right">
              <h3 className="font-bold mb-4">تواصل معنا</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2 justify-end">
                  <span>info@lozan.com</span>
                  <Mail size={16} className="text-primary" />
                </li>
                <li className="flex items-center gap-2 justify-end">
                  <span dir="ltr">+966 55 123 4567</span>
                  <Phone size={16} className="text-primary" />
                </li>
                <li className="flex items-center gap-2 justify-end">
                  <span dir="ltr">+966 50 765 4321</span>
                  <Phone size={16} className="text-primary" />
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>جميع الحقوق محفوظة © 2025 لوزان</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/90 p-3 backdrop-blur-md sm:hidden">
        <a
          href={whatsappBookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[54px] w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 text-base font-bold text-white shadow-[0_8px_24px_rgba(220,38,38,0.38)]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span>احجز عرض 270 ريال عبر واتساب</span>
        </a>
      </div>
    </div>
  );
}

// Helper Components
function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${className} fill-current`}>
      <path d="M19.11 4.82A9.8 9.8 0 0 0 3.58 16.4L2.2 21.45l5.17-1.36A9.8 9.8 0 1 0 19.11 4.82Zm-7.05 15.12a8 8 0 0 1-4.08-1.12l-.29-.18-3.07.8.82-2.98-.19-.31a8 8 0 1 1 6.81 3.79Zm4.39-5.98c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06a6.53 6.53 0 0 1-1.93-1.19 7.2 7.2 0 0 1-1.34-1.67c-.14-.24-.02-.37.1-.49l.36-.42c.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46a.88.88 0 0 0-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48a9.09 9.09 0 0 0 3.77 3.33c.53.23.94.36 1.26.46.53.17 1.01.14 1.39.09.42-.06 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 bg-secondary/30 border border-border rounded-lg p-3">
      <div className="text-primary shrink-0">{icon}</div>
      <span className="text-sm">{text}</span>
    </div>
  );
}

function FeatureItemAlt({ text }: { text: string }) {
  return (
    <div className="bg-secondary/20 border border-border rounded-lg p-3 text-center">
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}
