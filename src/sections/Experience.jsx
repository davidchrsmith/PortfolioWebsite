export const Experience = () => {
    return (
      <section id="experience" className="relative min-h-screen flex items-center overflow-hidden">
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

        <div className="absolute bottom-1/4 right-1/8 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/6 left-0 w-64 h-64 bg-highlight/9 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          
          <div className="mt-20 space-y-6">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">My Experience</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif italic font-normal text-white ">
                        The journey
                        <span className="font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground"> so far.</span>
                    </h2>
            </div>
          
          <div className="space-y-8 mt-12">
            {/* HaFSBX */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <img src="/HaFSBX_Logo_WHITE%201.png" alt="HaFSBX logo" className="py-10 h-auto max-w-sm animate-fade-in animation-delay-200"></img>
              </div>
              <div className="animate-fade-in animation-delay-300">
                <h2 className="py-4 text-4xl md:text-5xl font-serif italic font-bold text-white ">
                        HaFSBX - R&D Intern
                </h2>
                <div className="glass rounded-2xl p-4 glow-haf-border">
                  <p className="text-muted-foreground">
                    - Full stack web app development with React, Next.js, Three.js, CSS, PostgreSQL, and Django Rest Framework (DRF)
                  </p>
                  <p className="text-muted-foreground">
                    - Full ROS2 lifecycle development and deployment in Python, C++, and XML
                  </p>
                  <p className="text-muted-foreground">
                    - Backend API and data pipeline development, management, and maintenance with Bruno and OpenAPI
                  </p>
                  <p className="text-muted-foreground">
                    - NVIDIA Isaac Sim, Mission Control and Mission Dispatch proficiency
                  </p>
                </div>
              </div>
            </div>

            {/* Lavner */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div>
                <div className="py-10 h-auto max-w-sm animate-fade-in animation-delay-400">
                  <img src="/lavner-education-squareLogo.jpg" alt="Lavner Education logo" className="rounded-3xl glow-lavner-border"></img>
                </div>
              </div>
              <div className="animate-fade-in animation-delay-500">
                <h2 className="py-4 text-4xl md:text-5xl font-serif italic font-bold text-white ">
                        Lavner Education - Programming Instructor Intern
                </h2>
                <div className="glass rounded-2xl p-4 glow-lavner-border">
                  <p className="text-muted-foreground">
                    - Taught and mentored students (ages 6-14) in Python, C++, robotics, and AI with Ethics, fostering problem-solving and teamwork skills.
                  </p>
                  <p className="text-muted-foreground">
                    - Collaborated with instructors to refine curriculum, adding interactive coding challenges and hands-on projects that improved student engagement and project completion rates.
                  </p>
                  <p className="text-muted-foreground">
                    - Debugged student code and robotics programs in real time, providing individualized guidance and reinforcing core programming concepts.
                  </p>
                  <p className="text-muted-foreground">
                    - Troubleshot technical issues with laptops, IDEs, and robotics kits, minimizing class disruptions and ensuring smooth delivery of lessons.
                  </p>
                </div>
              </div>
            </div>

            {/* Lavner */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div>
                <div className="py-10 h-auto max-w-sm animate-fade-in animation-delay-400">
                  <img src="/UofM.png" alt="University of Minnesota logo"></img>
                </div>
              </div>
              <div className="animate-fade-in animation-delay-500">
                <h2 className="py-4 text-4xl md:text-5xl font-serif italic font-bold text-white ">
                        University of Minnesota - Student
                </h2>
                <div className="glass rounded-2xl p-4 glow-uofm-border">
                  <p className="text-muted-foreground">
                    - Pursuing dual degrees, a B.S. in Computer Science and a B.S. in Economics, with a focus on quantitative analysis, software development, and algorithmic problem-solving.
                  </p>
                  <p className="text-muted-foreground">
                    - Coursework includes Advanced Algorithms and Data Structures, Machine Learning, Development of Secure Software Systems, Environmental Economics, and Industrial Organization and Antitrust Policy. This diverse curriculum equips me with a strong foundation in both technical and analytical skills, preparing me for a career at the intersection of technology and economics.
                  </p>
                  <p className="text-muted-foreground">
                    - Was awarded the College of Science and Engineering Dean's List for academic excellence, recognizing my dedication to maintaining a high GPA while actively engaging in research and extracurricular activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};