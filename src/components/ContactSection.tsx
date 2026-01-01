import { useState, useEffect, useRef } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Animated background particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        const colors = ["#6366f1", "#8b5cf6", "#06b6d4", "#10b981"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = 0.05 * (1 - distance / 100);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: t("contact.success"),
      description: t("contact.available"),
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "umidjongafforov175@gmail.com",
      href: "mailto:umidjon@example.com",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+998 93 655 89 59",
      href: "tel:+998936558959",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bukhara Uzbekistan",
      href: "#",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/umidjon-developer",
      label: "GitHub",
      color: "hover:bg-slate-700",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/umidjon-gafforov-8b151b325/",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: Twitter,
      href: "https://x.com/umidjondevv",
      label: "Twitter",
      color: "hover:bg-sky-500",
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] floating" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] floating-delayed" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 text-6xl font-mono text-primary/5 animate-float">
        @
      </div>
      <div className="absolute bottom-20 left-10 text-6xl font-mono text-purple-500/5 animate-float-delayed">
        #
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 backdrop-blur-sm">
            <MessageCircle size={16} className="text-primary animate-pulse" />
            <span className="text-primary font-bold text-xs tracking-wider uppercase">
              {t("contact.info")}
            </span>
            <Sparkles size={16} className="text-primary" />
          </div>

          {/* Title */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
              <span className="gradient-text">{t("contact.title")}</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full mx-auto" />
          </div>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6 animate-fade-up">
            {/* Contact Info Card */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <div className="relative bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-black gradient-text">
                    {t("contact.info")}
                  </h3>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-secondary/60 transition-all duration-300 hover:scale-105"
                    >
                      <div
                        className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform shadow-lg`}
                      >
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground font-semibold mb-1">
                          {item.label}
                        </p>
                        <p className="text-foreground font-bold group-hover/item:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground font-semibold mb-4 flex items-center gap-2">
                    <Sparkles size={16} className="text-primary" />
                    {t("contact.available")}
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/social w-14 h-14 rounded-xl bg-secondary/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-1`}
                        aria-label={social.label}
                      >
                        <social.icon
                          size={22}
                          className="group-hover/social:scale-110 transition-transform"
                        />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-xl p-6 rounded-2xl border border-border/50 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-black gradient-text mb-1">
                  &lt;24h
                </div>
                <div className="text-xs text-muted-foreground font-semibold">
                  Response Time
                </div>
              </div>
              <div className="bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-xl p-6 rounded-2xl border border-border/50 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-black gradient-text mb-1">
                  100%
                </div>
                <div className="text-xs text-muted-foreground font-semibold">
                  Available
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-fade-up-delay-1">
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <form
                onSubmit={handleSubmit}
                className="relative bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-2xl"
              >
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-foreground mb-2 flex items-center gap-2"
                    >
                      {t("contact.name")}
                      {focusedField === "name" && (
                        <Sparkles
                          size={14}
                          className="text-primary animate-pulse"
                        />
                      )}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-4 rounded-xl bg-secondary/60 backdrop-blur-sm border-2 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground font-medium"
                        placeholder="John Doe"
                      />
                      {focusedField === "name" && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 -z-10 blur-xl" />
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-foreground mb-2 flex items-center gap-2"
                    >
                      {t("contact.email")}
                      {focusedField === "email" && (
                        <Sparkles
                          size={14}
                          className="text-primary animate-pulse"
                        />
                      )}
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-4 rounded-xl bg-secondary/60 backdrop-blur-sm border-2 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground font-medium"
                        placeholder="john@example.com"
                      />
                      {focusedField === "email" && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 -z-10 blur-xl" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-6 relative">
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-foreground mb-2 flex items-center gap-2"
                  >
                    {t("contact.message")}
                    {focusedField === "message" && (
                      <Sparkles
                        size={14}
                        className="text-primary animate-pulse"
                      />
                    )}
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="w-full px-4 py-4 rounded-xl bg-secondary/60 backdrop-blur-sm border-2 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none font-medium"
                      placeholder="Tell me about your project..."
                    />
                    {focusedField === "message" && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 -z-10 blur-xl" />
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full group/btn relative overflow-hidden"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t("contact.sending")}
                      </>
                    ) : (
                      <>
                        <Send
                          size={18}
                          className="group-hover/btn:rotate-12 transition-transform"
                        />
                        {t("contact.send")}
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </Button>

                {/* Success Message */}
                {!isSubmitting && formData.name === "" && (
                  <div className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 hidden last-of-type:flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-green-500" />
                    <span className="text-sm text-green-600 dark:text-green-400 font-semibold">
                      Message sent successfully!
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-5deg);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out;
        }

        .animate-fade-up-delay-1 {
          animation: fadeUp 0.8s ease-out 0.2s backwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 8s ease-in-out infinite;
        }

        .floating {
          animation: float 8s ease-in-out infinite;
        }

        .floating-delayed {
          animation: floatDelayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
