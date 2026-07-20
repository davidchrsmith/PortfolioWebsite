import { Code2, Cpu, TrendingUp, Network, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: 
        "Building software that enables autonomous systems to perceive, navigate, and make decisions in real-world environments."
  },
  {
    icon: Cpu,
    title: "Robotics & Intelligent Systems",
    description: 
        "Designing and developing scalable applications, from intuitive user interfaces to reliable backend services and APIs."
  },
  {
    icon: TrendingUp,
    title: "Economics & Analytics",
    description: 
        "Applying quantitative analysis and economic reasoning to evaluate trade-offs, uncover insights, and support data-driven decisions."
  },
  {
    icon: Network,
    title: "Systems Thinking",
    description: 
        "Approaching complex challenges by understanding how people, processes, and technology interact within larger systems."
  },
];

export const About = () => {
    return (
      <section id="about" className="py-20 relative min-h-screen flex items-center overflow-hidden">
        {/* Sand In Air */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
            <div 
              className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
              style={{
                backgroundColor: "#5D6658",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`, 
              }}
            />
        ))}
        </div>

        <div className="absolute top-1/6 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/5 right-0 w-64 h-64 bg-highlight/9 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid gap-16 items-center">
                <div className="space-y-4">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building technology
                        <span className="font-serif italic font-normal text-white"> with purpose.</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I'm a software engineer with Bachelors of Science in both Computer Science and Economics. I have a passion 
                            for technology, problem-solving, and continuous learning. I enjoy exploring how software, data, 
                            and systems come together to solve real-world challenges.
                        </p>
                        <p>
                            What excites me most is the process of building. Whether it's developing 
                            applications, analyzing complex problems, or experimenting with new ideas, 
                            I enjoy turning concepts into practical solutions through thoughtful design and engineering.
                        </p>
                        <p>
                            Beyond academics and technology, I enjoy pursuing a variety of long-term interests. 
                            I've played piano since I was seven years old, studied German since I was fourteen, and enjoy 
                            staying active through tennis, running, and weightlifting. I value activities that require 
                            consistency, discipline, and continuous improvement.
                        </p>
                        <p>
                            I also enjoy spending time outdoors, especially gardening and yard work, and my life goal is 
                            to own and operate a farm. There's something rewarding about seeing progress over time, whether it's 
                            in a garden, a piece of software, or a personal goal. These hobbies help me maintain balance 
                            while continuing to learn, build, and grow in different areas of life.
                        </p>
                    </div>

                    <div className="glass rounded-2xl p-4 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "I believe the best technology serves people. My mission is to build solutions
                            that make life easier, create opportunity, and have a meaningful impact on the
                            communities they serve."
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                                {item.title}
                            </h3>
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