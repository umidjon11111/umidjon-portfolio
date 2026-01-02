import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  Terminal,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(99, 102, 241, 0.1)";

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const codeSnippets = [
    "const developer = {",
    "  name: 'Umidjon',",
    "  skills: ['React', 'Node.js'],",
    "  passion: 'Building amazing apps',",
    "  status: 'Available for hire'",
    "};",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      {/* Mobile Background Pattern - Shows only on mobile */}
      <div className="absolute inset-0 lg:hidden">
        {/* Code Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="code-pattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <text x="10" y="20" className="fill-primary font-mono text-xs">
                  &lt;/&gt;
                </text>
                <text x="60" y="40" className="fill-primary font-mono text-xs">
                  {}
                </text>
                <text x="20" y="60" className="fill-primary font-mono text-xs">
                  =&gt;
                </text>
                <text x="70" y="80" className="fill-primary font-mono text-xs">
                  fn
                </text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#code-pattern)" />
          </svg>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />

        {/* Abstract Shapes for Mobile */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Animated Grid - Hidden on mobile */}
      <div
        className="absolute inset-0 opacity-[0.03] hidden sm:block"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1.5px, transparent 1.5px),
                           linear-gradient(90deg, hsl(var(--primary)) 1.5px, transparent 1.5px)`,
          backgroundSize: "50px 50px",
          animation: "grid-move 20s linear infinite",
        }}
      />

      {/* Floating Orbs - Hidden on mobile */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] floating hidden lg:block" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] floating-delayed hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {/* LEFT SIDE - Content */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="animate-fade-up flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-primary"></span>
                </span>
                <span className="text-xs font-semibold text-primary">
                  {t("hero.available")}
                </span>
                <Sparkles
                  size={12}
                  className="text-primary sm:w-3.5 sm:h-3.5"
                />
              </div>
            </div>

            {/* Main Heading */}
            <div className="animate-fade-up-delay-1">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="text-muted-foreground block sm:inline">
                  Hi, I'm
                </span>
                <span className="gradient-text relative inline-block mt-2 sm:mt-0 sm:ml-3">
                  Umidjon
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground/90 animate-fade-up-delay-2">
              {t("hero.tagline")}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground/80 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-up-delay-3">
              {t("hero.headline")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 animate-fade-up-delay-4 pt-2">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToProjects}
                className="group relative overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t("hero.cta.projects")}
                  <Code2
                    size={18}
                    className="group-hover:rotate-12 transition-transform"
                  />
                </span>
              </Button>
              <Button
                variant="hero-outline"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a href="#contact" className="group">
                  <span className="flex items-center justify-center gap-2">
                    {t("hero.cta.contact")}
                    <Mail
                      size={16}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </span>
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 animate-fade-up-delay-4">
              <a
                href="https://github.com/umidjon-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <Github
                  size={18}
                  className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/umidjon-gafforov-8b151b325/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <Linkedin
                  size={18}
                  className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="mailto:umidjongafforov175@gmail.com"
                className="group p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <Mail
                  size={18}
                  className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform"
                />
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 sm:pt-4 animate-fade-up-delay-4">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-black gradient-text">
                  4+
                </div>
                <div className="text-xs text-muted-foreground font-semibold">
                  Years Exp
                </div>
              </div>
              <div className="w-px h-8 sm:h-10 bg-border"></div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-black gradient-text">
                  50+
                </div>
                <div className="text-xs text-muted-foreground font-semibold">
                  Projects
                </div>
              </div>
              <div className="w-px h-8 sm:h-10 bg-border"></div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-black gradient-text">
                  30+
                </div>
                <div className="text-xs text-muted-foreground font-semibold">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - 3D Code Editor Animation - Desktop Only */}
          <div className="relative hidden lg:block animate-fade-up-delay-2">
            {/* Floating Code Window */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-3xl group-hover:blur-[100px] transition-all duration-700"></div>

              {/* Main Code Editor */}
              <div className="relative bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
                {/* Window Header */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-border/50 bg-background/20">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex-1 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground">
                    <Terminal size={14} className="text-primary" />
                    <span>developer.ts</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-xs md:text-sm space-y-2">
                  {codeSnippets.map((line, index) => (
                    <div
                      key={index}
                      className="flex gap-3 opacity-0 animate-slide-in-right"
                      style={{
                        animationDelay: `${index * 100 + 500}ms`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <span className="text-muted-foreground/40 select-none w-5 text-right text-xs">
                        {index + 1}
                      </span>
                      <span className="text-foreground/90">
                        {line.includes("const") && (
                          <>
                            <span className="text-purple-400">const</span>{" "}
                            <span className="text-blue-400">
                              {line.split(" ")[1]}
                            </span>
                          </>
                        )}
                        {line.includes("name:") && (
                          <>
                            <span className="text-muted-foreground">
                              {" "}
                              name:
                            </span>{" "}
                            <span className="text-green-400">
                              '{line.split("'")[1]}'
                            </span>
                            ,
                          </>
                        )}
                        {line.includes("skills:") && (
                          <>
                            <span className="text-muted-foreground">
                              {" "}
                              skills:
                            </span>{" "}
                            <span className="text-yellow-400">
                              ['{line.split("'")[1]}', '{line.split("'")[3]}']
                            </span>
                            ,
                          </>
                        )}
                        {line.includes("passion:") && (
                          <>
                            <span className="text-muted-foreground">
                              {" "}
                              passion:
                            </span>{" "}
                            <span className="text-green-400">
                              '{line.split("'")[1]}'
                            </span>
                            ,
                          </>
                        )}
                        {line.includes("status:") && (
                          <>
                            <span className="text-muted-foreground">
                              {" "}
                              status:
                            </span>{" "}
                            <span className="text-green-400">
                              '{line.split("'")[1]}'
                            </span>
                          </>
                        )}
                        {line === "};" && (
                          <span className="text-foreground/90">{line}</span>
                        )}
                        {line === "const developer = {" && (
                          <span className="text-foreground/90"> = {"{"}</span>
                        )}
                      </span>
                    </div>
                  ))}

                  {/* Typing Cursor */}
                  <div className="flex gap-3">
                    <span className="text-muted-foreground/40 w-5"></span>
                    <span className="inline-block w-1.5 h-4 bg-primary animate-pulse"></span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-primary/20 rounded-xl backdrop-blur-sm border border-primary/30 flex items-center justify-center floating">
                <Code2 size={32} className="text-primary" />
              </div>

              <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-purple-500/20 rounded-xl backdrop-blur-sm border border-purple-500/30 flex items-center justify-center floating-delayed">
                <Sparkles size={24} className="text-purple-400" />
              </div>
            </div>

            {/* Particle Canvas */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 pointer-events-none"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <button
            onClick={scrollToProjects}
            className="group p-2 sm:p-2.5 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <ArrowDown
              size={18}
              className="sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
