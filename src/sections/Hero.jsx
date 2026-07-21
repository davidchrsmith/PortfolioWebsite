import {Button} from "@/components/Button";
import { RobotScene } from "@/components/RobotScene";
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton"
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import {LinkedinIcon, GitHubIcon} from "@/components/icons";

const skills = [
  "React.js",
  "Next.js",
  "PostgreSQL",
  "Django",
  "Redis",
  "Docker",
  "CSS",
  "C",
  "C++",
  "Python",
  "Figma",
  "Git",
  "Java",
  "Supabase",
  "Bruno",
  "OpenAPI",
  "ROS2",
  "SQL",
  "Javascript",
  "OCaml",
  "R",
  "Excel",
  "Linux",
]

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

export const Hero = () => {
    return ( 
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
            <img src={`${import.meta.env.BASE_URL}HeroBG2.jpg`} alt="Hero image" className="w-full h-full object-cover opacity-40"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/100 via-background/30 to-background/0"></div>
        </div>

        {/* Sand In Air */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
            <div 
              className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
              style={{
                backgroundColor: "#5D6658",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`, 
              }}
            />
        ))}
        </div>

        {/* Conent */}
        <div className="container mx-auto px-6 pt-28 pb-28 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-5">
                    <div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-normal text-primary animate-fade-in">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        Software Engineer + Economist
                      </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-blur animation-delay-200">
                            Developing software 
                            <br />
                            at the <span className="font-serif italic font-bold text-white">intersection</span> of
                            <br />
                            <span className="text-primary font-bold glow-text">technology</span> and <span className="text-primary font-bold glow-text">economics</span>.
                        </h1>
                        <p className="text-medium text-muted-foreground max-w-lg animate-fade-in-blur animation-delay-300">
                          I'm David Smith, a software engineer specializing in robotics, full-stack development, 
                          and quantitative analysis. With a background in computer science and economics, I'm passionate 
                          about turning complex technical challenges into practical solutions that create a real-world impact. 
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                      <Button size="lg" onClick={scrollToContact}>
                        Contact Me <ArrowRight className="w-5 h-5" />
                      </Button>
                      <AnimatedBorderButton
                        href={`${import.meta.env.BASE_URL}DavidSmithResume.pdf`}
                        download
                      >
                        Download CV
                      </AnimatedBorderButton>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                      <span className="text-sm text-muted-foreground">Follow: </span>
                      {[
                        {icon: LinkedinIcon, href: "https://www.linkedin.com/in/davidchrsmith"},
                        {icon: GitHubIcon, href: "https://github.com/davidchrsmith"},
                      ].map((social, idx) => (
                        <a 
                          key={idx}
                          href={social.href}
                          className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {<social.icon className="w-5 h-5"/>}
                        </a>
                      ))}
                    </div>
                </div>

                {/* Three.js Modelling here */}
                <div className="h-125 w-full ">
                  <RobotScene />
                </div>
            </div>
            {/* Skills Section */}
            <div className="mt-10 animate-fade-in animation-delay-600">
                <div className="relative overflow-hidden">
                  <div className="flex animate-marquee">{[...skills, ...skills].map((skill, idx) => (
                    <div key={idx} className="shrink-0 px-8">
                      <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                    </div>
                  ))}
                  </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-8 animate-bounce" />
          </a>
        </div>
      </section>
    );
};