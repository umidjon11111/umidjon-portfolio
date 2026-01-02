import { Code2, Rocket, Users, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Programming languages and technologies
  const techIcons = [
    "⚛️",
    "📱",
    "🔷",
    "🟢",
    "🔴",
    "🟡",
    "🔵",
    "🟣",
    "JS",
    "TS",
    "PY",
    "GO",
    "RS",
    "PHP",
    "RB",
    "C++",
    "React",
    "Vue",
    "Node",
    "Next",
    "Nest",
    "Docker",
    "K8s",
    "AWS",
    "{",
    "}",
    "<",
    ">",
    "/",
    "*",
    "+",
    "=",
    "fn",
    "const",
    "let",
    "var",
    "async",
    "await",
    "class",
    "def",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    class FloatingText {
      x: number;
      y: number;
      text: string;
      speed: number;
      opacity: number;
      fontSize: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.text = techIcons[Math.floor(Math.random() * techIcons.length)];
        this.speed = 0.3 + Math.random() * 0.5;
        this.opacity = 0.1 + Math.random() * 0.2;
        this.fontSize = 12 + Math.random() * 16;
        const colors = ["#6366f1", "#8b5cf6", "#06b6d4", "#10b981", "#f59e0b"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y -= this.speed;
        if (this.y < -50) {
          this.y = canvas.height + 50;
          this.x = Math.random() * canvas.width;
          this.text = techIcons[Math.floor(Math.random() * techIcons.length)];
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.font = `${this.fontSize}px "JetBrains Mono", monospace`;
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
      }
    }

    const floatingTexts: FloatingText[] = [];
    for (let i = 0; i < 40; i++) {
      floatingTexts.push(new FloatingText());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      floatingTexts.forEach((text) => {
        text.update();
        text.draw();
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

  const highlights = [
    {
      icon: Code2,
      title: "4+",
      description: t("about.experience"),
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
      borderColor: "border-blue-500/30",
    },
    {
      icon: Rocket,
      title: "50+",
      description: t("about.projects"),
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500",
      borderColor: "border-purple-500/30",
    },
    {
      icon: Users,
      title: "30+",
      description: t("about.clients"),
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500",
      borderColor: "border-green-500/30",
    },
    {
      icon: Zap,
      title: "15+",
      description: t("about.technologies"),
      gradient: "from-orange-500/20 to-yellow-500/20",
      iconColor: "text-orange-500",
      borderColor: "border-orange-500/30",
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[80px] sm:blur-[120px] floating hidden sm:block" />
      <div className="absolute bottom-0 right-0 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-purple-500/10 rounded-full blur-[100px] sm:blur-[150px] floating-delayed hidden sm:block" />

      {/* Grid Pattern - Hidden on mobile */}
      <div
        className="absolute inset-0 opacity-[0.02] hidden sm:block"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto relative z-10 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-up text-center lg:text-left">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-bold text-xs tracking-wider uppercase">
                {t("about.title")}
              </span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 leading-tight px-4 lg:px-0">
                <span className="gradient-text">{t("about.subtitle")}</span>
              </h2>
              <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto lg:mx-0" />
            </div>

            {/* Description */}
            <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
              <p className="relative pl-4 border-l-2 border-primary/50">
                {t("about.description")}
              </p>
              <p className="relative pl-4 border-l-2 border-purple-500/50">
                {t("about.philosophy")}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2 sm:pt-4">
              {["React", "TypeScript", "Node.js", "Next.js", "Tailwind"].map(
                (tech, i) => (
                  <div
                    key={tech}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-secondary/60 border border-border/50 text-xs sm:text-sm font-semibold text-foreground/80 hover:bg-secondary hover:border-primary/50 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {tech}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right Content - Enhanced Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 animate-fade-up-delay-2">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect - Hidden on mobile */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block`}
                />

                {/* Card */}
                <div
                  className={`relative bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-xl p-4 sm:p-6 rounded-xl sm:rounded-2xl border ${item.borderColor} hover:border-opacity-60 transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center`}
                >
                  {/* Icon Container */}
                  <div className="relative mb-3 sm:mb-4 mx-auto">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center backdrop-blur-sm border ${item.borderColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon
                        className={`w-6 h-6 sm:w-7 sm:h-7 ${item.iconColor}`}
                      />
                    </div>
                    {/* Floating particles */}
                    <div
                      className={`absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full ${item.iconColor.replace(
                        "text-",
                        "bg-"
                      )} opacity-60 animate-ping`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-3xl sm:text-4xl font-black mb-1 sm:mb-2 gradient-text">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-semibold text-muted-foreground">
                    {item.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className={`mt-3 sm:mt-4 h-0.5 sm:h-1 w-full bg-gradient-to-r ${item.gradient} rounded-full opacity-50 group-hover:opacity-100 transition-opacity`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Code Elements - Hidden on mobile */}
        <div className="absolute -left-10 top-1/4 opacity-10 hidden lg:block">
          <div className="font-mono text-4xl md:text-6xl text-primary animate-pulse">
            {"{"}
          </div>
        </div>
        <div className="absolute -right-10 bottom-1/4 opacity-10 hidden lg:block">
          <div
            className="font-mono text-4xl md:text-6xl text-purple-500 animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            {"}"}
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

        @keyframes floating {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes floatingDelayed {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.05);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out;
        }

        .animate-fade-up-delay-2 {
          animation: fadeUp 0.8s ease-out 0.4s backwards;
        }

        .floating {
          animation: floating 8s ease-in-out infinite;
        }

        .floating-delayed {
          animation: floatingDelayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
