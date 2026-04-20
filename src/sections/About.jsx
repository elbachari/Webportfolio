import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and mathematically enhance solutions against advanced threats",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams or leading them to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices while reading new articles and blogs.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Hardening the future, 
              <span className="font-serif italic font-normal text-white">
                {" "}
                one vulnerability at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a dedicated Security Engineer with a dual-specialization in Offensive Security and DevSecOps. My journey began with a deep curiosity about system vulnerabilities and has evolved into a mastery of both attacking and defending complex environments. I hold an Engineering Degree from ENSIAS and a Master’s in Networks & Security from Sorbonne Université
              </p>
              <p>
                I specialize in Red Teaming, AppSec, and Cloud Security, with experience ranging from simulating advanced phishing 2.0 and MFA bypass attacks to building unified SAST, DAST, and SCA pipelines. My approach combines rigorous mathematical formalization—achieving 100% detection precision in SIEM rules—with the practical agility required to secure enterprise-scale CI/CD environments.
              </p>
              <p>
                When I’m not hardening systems, you’ll find me exploring the latest in AI-augmented threat detection, refining my skills in Active Directory attacks, or maintaining my edge through certifications like PNPT and PJPT.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to engineer digital environments that are not just functional, but inherently resilient—building systems that users can trust and creating automated security frameworks that developers can seamlessly integrate and maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
