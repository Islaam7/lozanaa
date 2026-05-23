import { Star, Menu, Search, User, MapPin, Phone, Mail, Instagram, Youtube, Linkedin, Clock, Shield, CheckCircle2, Calendar, Settings, Eye, FileText, DollarSign, Award, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    document.title = "لوزان - حماية السيارات بتقنية النانو سيراميك";
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-[#0a0a0a] text-white font-['Cairo']">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                <img src="https://i.ibb.co/KxchXXLs/Group-1.png" alt="لوزان" className="h-10 w-auto" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-sm hover:text-primary transition-colors">الرئيسية</a>
              <a href="#features" className="text-sm hover:text-primary transition-colors">الخدمات</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">من نحن</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">الآراء</a>
            </nav>

            {/* Header Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="text-sm hover:text-primary transition-colors">تسجيل الدخول</button>
              <button className="text-sm hover:text-primary transition-colors">حسابي</button>
              <button className="p-2 hover:text-primary transition-colors">
                <Search size={20} />
              </button>
              <button className="p-2 hover:text-primary transition-colors">
                <User size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-white/10">
              <nav className="flex flex-col gap-4">
                <a href="#home" className="text-sm hover:text-primary transition-colors">الرئيسية</a>
                <a href="#features" className="text-sm hover:text-primary transition-colors">الخدمات</a>
                <a href="#about" className="text-sm hover:text-primary transition-colors">من نحن</a>
                <a href="#about" className="text-sm hover:text-primary transition-colors">الآراء</a>
                <div className="flex gap-4 pt-2">
                  <button className="text-sm hover:text-primary transition-colors">تسجيل الدخول</button>
                  <button className="text-sm hover:text-primary transition-colors">حسابي</button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-end pb-0 overflow-hidden">
        {/* Full Background Image */}
        <img
          src="https://i.ibb.co/5xGqVC6M/Chat-GPT-Image-May-23-2026-12-58-13-AM.png"
          alt="سيارات لوزان"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Content overlay */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 pt-40 pb-8">
            {/* Hero Text */}
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-primary/20 border border-primary/40 text-primary text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                حماية سيارتك بأحدث التقنيات
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-2xl">
                عزل حراري متقدم
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                تقنية النانو سيراميك الحديثة لحماية شاملة وعزل حراري فعّال. نقلل الحرارة، نعزز الخصوصية، ونضمن وضوح رؤية ممتاز على جميع السيارات.
              </p>
              <div className="flex flex-wrap gap-4 mb-10 justify-center">
                <div className="flex items-center gap-2 text-sm bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>عزل حراري</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>نانو سيراميك</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>حماية شاملة</span>
                </div>
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-primary/30">
                اطلب الآن
              </button>
            </div>
          </div>

          {/* Features Bar */}
          <div className="container mx-auto px-4 mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-black/60 backdrop-blur-md border-t border-white/10 rounded-t-2xl p-4">
              <div className="flex items-center gap-3 p-3">
                <Shield className="text-primary shrink-0" size={28} />
                <div className="text-right">
                  <div className="text-xs text-white/50">ضمان</div>
                  <div className="text-sm font-semibold">راحة وثقة بضمان يمتد لـ 10 سنوات</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3">
                <Calendar className="text-primary shrink-0" size={28} />
                <div className="text-right">
                  <div className="text-xs text-white/50">الجودة</div>
                  <div className="text-sm font-semibold">خامات عالية الأداء</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3">
                <Clock className="text-primary shrink-0" size={28} />
                <div className="text-right">
                  <div className="text-xs text-white/50">التركيب</div>
                  <div className="text-sm font-semibold">تركيب احترافي</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3">
                <MapPin className="text-primary shrink-0" size={28} />
                <div className="text-right">
                  <div className="text-xs text-white/50">التغطية</div>
                  <div className="text-sm font-semibold">جميع أنواع السيارات</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <div className="absolute bottom-0 right-0 left-0 p-6 text-right">
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
                    <h3 className="font-bold mb-1">ضمان طويل الأجل</h3>
                    <p className="text-sm text-muted-foreground">ضمان 10 سنوات على جودة الطبقة الحماية</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105">
                احجز استشارة مجانية
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-gradient-to-b from-transparent to-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">آراء العملاء</h2>
            <p className="text-muted-foreground">تقييمات المنتج (20788)</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Review Card 1 */}
            <div className="bg-secondary/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>
              <h3 className="font-bold text-center mb-3">Sara Afghanal</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                الخدمة ممتازة والتركيب احترافي جداً. شعرت بالفرق من أول رحلة، الحرارة نقصت كثير والرؤية واضحة
              </p>
            </div>

            {/* Review Card 2 */}
            <div className="bg-secondary/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>
              <h3 className="font-bold text-center mb-3">Ziad Saud</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                أفضل استثمار لحماية سيارتي. الفريق محترف والخدمة متقنة، وسعر معقول جداً بالنسبة للجودة
              </p>
            </div>

            {/* Review Card 3 */}
            <div className="bg-secondary/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>
              <h3 className="font-bold text-center mb-3">إبراهيم عبد الصادق</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                احترافيين جداً في التركيب والتفاصيل. كل شيء منظم، والنتيجة فعّالة جداً في تقليل الحرارة
              </p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
          </div>
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
              <div className="absolute bottom-0 right-0 left-0 p-6 text-right">
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

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-b from-black/30 to-black/60">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <Mail className="text-primary mx-auto mb-4" size={48} />
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">اشترك الآن</h2>
              <p className="text-muted-foreground">
                اشترك في النشرة الإخبارية للحصول على أحدث العروض والنصائح لحماية سيارتك
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني"
                className="flex-1 bg-input-background border border-input rounded-lg px-4 py-3 text-right focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 whitespace-nowrap">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
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
          <div className="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
            <p>جميع الحقوق محفوظة © 2025 لوزان</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 bg-secondary/30 border border-white/10 rounded-lg p-3">
      <div className="text-primary shrink-0">{icon}</div>
      <span className="text-sm">{text}</span>
    </div>
  );
}

function FeatureItemAlt({ text }: { text: string }) {
  return (
    <div className="bg-secondary/20 border border-white/10 rounded-lg p-3 text-center">
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}
