import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, Database, Wrench, Zap, TrendingUp, Award } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

interface SkillCategory {
  titleKey: string;
  skills: Skill[];
  icon: any;
  gradient: string;
}

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated background code particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const codeSymbols = [
      "const",
      "let",
      "function",
      "import",
      "export",
      "class",
      "async",
      "await",
      "{",
      "}",
      "(",
      ")",
      "[",
      "]",
      "<",
      ">",
      "/",
      "*",
      "+",
      "=",
      "=>",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "React",
      "Node",
      "JS",
      "TS",
      "API",
      "SQL",
      "CSS",
      "HTML",
    ];

    class CodeParticle {
      x: number;
      y: number;
      text: string;
      speed: number;
      opacity: number;
      fontSize: number;
      color: string;
      rotation: number;
      rotationSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.text = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
        this.speed = 0.2 + Math.random() * 0.5;
        this.opacity = 0.05 + Math.random() * 0.15;
        this.fontSize = 10 + Math.random() * 20;
        const colors = [
          "#6366f1",
          "#8b5cf6",
          "#06b6d4",
          "#10b981",
          "#f59e0b",
          "#ef4444",
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }

      update() {
        this.y -= this.speed;
        this.rotation += this.rotationSpeed;
        if (this.y < -50) {
          this.y = canvas.height + 50;
          this.x = Math.random() * canvas.width;
          this.text =
            codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.font = `${this.fontSize}px "JetBrains Mono", monospace`;
        ctx.fillText(this.text, 0, 0);
        ctx.restore();
      }
    }

    const particles: CodeParticle[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push(new CodeParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
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

  const categories: SkillCategory[] = [
    {
      titleKey: "skills.frontend",
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        {
          name: "React",
          level: 95,
          icon: "⚛️",
          color: "from-blue-400 to-cyan-400",
        },
        {
          name: "Next.js",
          level: 90,
          icon: "▲",
          color: "from-slate-600 to-slate-400",
        },
        {
          name: "TypeScript",
          level: 88,
          icon: "📘",
          color: "from-blue-600 to-blue-400",
        },
        {
          name: "Tailwind CSS",
          level: 92,
          icon: "🎨",
          color: "from-cyan-400 to-teal-400",
        },
        {
          name: "HTML/CSS",
          level: 95,
          icon: "🌐",
          color: "from-orange-400 to-red-400",
        },
        {
          name: "JavaScript",
          level: 93,
          icon: "💛",
          color: "from-yellow-400 to-orange-400",
        },
      ],
    },
    {
      titleKey: "skills.backend",
      icon: Database,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        {
          name: "Node.js",
          level: 90,
          icon: "🟢",
          color: "from-green-500 to-emerald-500",
        },
        {
          name: "Express.js",
          level: 88,
          icon: "🚂",
          color: "from-slate-500 to-gray-500",
        },
        {
          name: "MongoDB",
          level: 85,
          icon: "🍃",
          color: "from-green-600 to-green-400",
        },
        {
          name: "PostgreSQL",
          level: 80,
          icon: "🐘",
          color: "from-blue-500 to-indigo-500",
        },
        {
          name: "REST APIs",
          level: 92,
          icon: "🔗",
          color: "from-purple-500 to-pink-500",
        },
        {
          name: "GraphQL",
          level: 75,
          icon: "📊",
          color: "from-pink-500 to-rose-500",
        },
      ],
    },
    {
      titleKey: "skills.tools",
      icon: Wrench,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        {
          name: "Git",
          level: 90,
          icon: "📦",
          color: "from-orange-500 to-red-500",
        },
        {
          name: "Docker",
          level: 75,
          icon: "🐳",
          color: "from-blue-500 to-cyan-500",
        },
        {
          name: "AWS",
          level: 70,
          icon: "☁️",
          color: "from-orange-400 to-yellow-400",
        },
        {
          name: "Figma",
          level: 80,
          icon: "🎯",
          color: "from-purple-400 to-pink-400",
        },
        {
          name: "Jest",
          level: 78,
          icon: "🧪",
          color: "from-red-500 to-pink-500",
        },
        {
          name: "CI/CD",
          level: 72,
          icon: "🔄",
          color: "from-green-500 to-teal-500",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
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

      {/* Decorative Code Symbols */}
      <div className="absolute top-20 left-10 text-6xl font-mono text-primary/5 animate-float">
        &lt;/&gt;
      </div>
      <div className="absolute top-1/3 right-10 text-6xl font-mono text-purple-500/5 animate-float-delayed">
        {}
      </div>
      <div className="absolute bottom-20 left-1/4 text-6xl font-mono text-blue-500/5 animate-float">
        =&gt;
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 backdrop-blur-sm">
            <Zap size={16} className="text-primary animate-pulse" />
            <span className="text-primary font-bold text-xs tracking-wider uppercase">
              {t("skills.subtitle")}
            </span>
            <TrendingUp size={16} className="text-primary" />
          </div>

          {/* Title */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
              <span className="gradient-text">{t("skills.title")}</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full mx-auto" />
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <div className="text-center">
              <div className="text-3xl font-black gradient-text">15+</div>
              <div className="text-xs text-muted-foreground font-semibold">
                Technologies
              </div>
            </div>
            <div className="w-px h-10 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-black gradient-text">3+</div>
              <div className="text-xs text-muted-foreground font-semibold">
                Years Exp
              </div>
            </div>
            <div className="w-px h-10 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-black gradient-text">95%</div>
              <div className="text-xs text-muted-foreground font-semibold">
                Proficiency
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Tabs */}
        <div className="flex justify-center mb-12 animate-fade-up-delay-1">
          <div className="inline-flex items-center gap-2 p-2 rounded-2xl bg-secondary/60 backdrop-blur-xl border border-border/50 shadow-2xl">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`group relative px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                    activeTab === index
                      ? "text-primary bg-background shadow-lg scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon
                      size={18}
                      className={activeTab === index ? "animate-pulse" : ""}
                    />
                    {t(category.titleKey)}
                  </span>
                  {activeTab === index && (
                    <>
                      <span
                        className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-10 rounded-xl blur-xl`}
                      />
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r ${category.gradient} rounded-full`}
                      />
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {categories[activeTab].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-2xl transition-all duration-500`}
                />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-xl p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        {skill.icon}
                      </div>
                      <div>
                        <span className="font-bold text-foreground text-lg block">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level >= 90
                            ? "Expert"
                            : skill.level >= 80
                            ? "Advanced"
                            : "Intermediate"}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-3xl font-black bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                      >
                        {skill.level}%
                      </div>
                      {hoveredSkill === skill.name && (
                        <Award
                          size={16}
                          className="text-yellow-500 mx-auto mt-1 animate-bounce"
                        />
                      )}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-3 bg-secondary/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <div
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{
                        width:
                          hoveredSkill === skill.name
                            ? "100%"
                            : `${skill.level}%`,
                        opacity: hoveredSkill === skill.name ? 0.5 : 1,
                      }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    </div>
                  </div>

                  {/* Level Indicator */}
                  <div className="flex justify-between mt-2 text-xs font-semibold text-muted-foreground">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Tags */}
        <div className="text-center animate-fade-up-delay-2">
          <h3 className="text-xl font-bold text-foreground mb-6">
            More Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Redux",
              "Prisma",
              "Socket.io",
              "Redis",
              "Nginx",
              "Linux",
              "Vercel",
              "Firebase",
              "Sass",
              "Material UI",
              "Framer Motion",
              "Stripe",
              "WebSocket",
              "JWT",
            ].map((skill, i) => (
              <span
                key={skill}
                className="group px-5 py-2.5 rounded-xl bg-secondary/60 backdrop-blur-sm border border-border/50 text-muted-foreground text-sm font-semibold hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all cursor-default hover:scale-110 hover:shadow-lg"
                style={{ animationDelay: `${i * 30}ms` }}
              >
                <span className="relative z-10">{skill}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Decorative */}
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
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

        .animate-fade-up-delay-2 {
          animation: fadeUp 0.8s ease-out 0.4s backwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
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

export default SkillsSection;
