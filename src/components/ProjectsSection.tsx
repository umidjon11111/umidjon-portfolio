import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Code2, Sparkles, Zap, TrendingUp } from "lucide-react";

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects", icon: Sparkles },
    { id: "web", label: "Web Apps", icon: Code2 },
    { id: "mobile", label: "Mobile", icon: Zap },
    { id: "enterprise", label: "Enterprise", icon: TrendingUp },
  ];

  const projects = [
    {
      titleKey: "project.ecommerce.title",
      descKey: "project.ecommerce.desc",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      techStack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      results: "150% increase in sales conversion",
      category: "web",
      featured: true,
    },
    {
      titleKey: "project.taskflow.title",
      descKey: "project.taskflow.desc",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
      techStack: ["React", "Express", "Socket.io", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      results: "10,000+ active users",
      category: "web",
      featured: false,
    },
    {
      titleKey: "project.analytics.title",
      descKey: "project.analytics.desc",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      techStack: ["React", "D3.js", "Python", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      results: "$2M+ transactions processed",
      category: "enterprise",
      featured: true,
    },
    {
      titleKey: "project.social.title",
      descKey: "project.social.desc",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop",
      techStack: ["Next.js", "GraphQL", "PostgreSQL", "AWS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      results: "50,000+ users",
      category: "mobile",
      featured: false,
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] floating" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] floating-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[180px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Code Symbols */}
      <div className="absolute top-20 left-10 text-6xl font-mono text-primary/10 animate-float">
        {"<"}
      </div>
      <div className="absolute top-40 right-20 text-6xl font-mono text-purple-500/10 animate-float-delayed">
        {">"}
      </div>
      <div className="absolute bottom-40 left-1/4 text-6xl font-mono text-blue-500/10 animate-float">
        {"{ }"}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles size={16} className="text-primary" />
            <span className="text-primary font-bold text-xs tracking-wider uppercase">
              Portfolio
            </span>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>

          {/* Title */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
              <span className="gradient-text">{t("projects.title")}</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-full mx-auto" />
          </div>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-3xl font-black gradient-text">
                {projects.length}+
              </div>
              <div className="text-xs text-muted-foreground font-semibold">
                Projects
              </div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-black gradient-text">100K+</div>
              <div className="text-xs text-muted-foreground font-semibold">
                Users
              </div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-black gradient-text">$5M+</div>
              <div className="text-xs text-muted-foreground font-semibold">
                Revenue
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 animate-fade-up-delay-1">
          <div className="inline-flex items-center gap-2 p-2 rounded-2xl bg-secondary/60 backdrop-blur-xl border border-border/50">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`group relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  filter === category.id
                    ? "text-primary bg-background shadow-lg scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <category.icon
                    size={16}
                    className={filter === category.id ? "animate-pulse" : ""}
                  />
                  {category.label}
                </span>
                {filter === category.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl blur-xl" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="relative mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-sm">
                    <Sparkles size={14} className="text-yellow-500" />
                    <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400">
                      Featured Project
                    </span>
                  </div>
                </div>
              )}

              {/* Project Card with 3D Effect */}
              <div className="relative h-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-100" />

                {/* Card Container */}
                <div className="relative h-full transform-gpu group-hover:scale-[1.02] transition-all duration-500">
                  <ProjectCard
                    title={t(project.titleKey)}
                    description={t(project.descKey)}
                    image={project.image}
                    techStack={project.techStack}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    results={project.results}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16 animate-fade-up-delay-2">
          <button className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-purple-500 text-white font-bold text-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <Code2
                size={18}
                className="group-hover:rotate-12 transition-transform"
              />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="absolute -bottom-10 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
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

        .animate-fade-up-delay-2 {
          animation: fadeUp 0.8s ease-out 0.4s backwards;
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

export default ProjectsSection;
