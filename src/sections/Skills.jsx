export const Skills = () => {
    return (
        <section id="skills" className="py-20 relative min-h-screen flex items-center overflow-hidden">
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

            {/* Bg Glows */}
            <div className="absolute top-1/3 right-3/4 w-96 h-96 bg-primary/12 rounded-full blur-3xl" />
            <div className="absolute bottom-1/12 left-1/2 w-64 h-64 bg-highlight/8 rounded-full blur-3xl" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />


            <div className="container mx-auto px-6 relative z-10">
            {/** Section Header */}
                <div className="mt-15 text-center mx-auto max-w-7xl mb-10">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Skills & Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in text-secondary-foreground">
                        Tools for building
                        <span className="font-serif italic font-normal text-white"> better solutions. </span>
                    </h2>
                    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                       <div className="glass rounded-2xl p-4 glow-border animate-fade-in animation-delay-100 items-center">
                            <div>
                                <h3 className="text-lg font-semibold text-secondary-foreground mb-2">Software Development</h3>
                            </div>
                            <div>
                                <ul className="py-2 list-disc list-inside">
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>C++</li>
                                    <li>JavaScript</li>
                                    <li>TypeScript</li>
                                    <li>React</li>
                                    <li>Django (DRF)</li>
                                    <li>PostgreSQL</li>
                                    <li>Docker</li>
                                    <li>Git</li>
                                    <li>C</li>
                                    <li>OCaml</li>
                                    <li>CSS</li>
                                    <li>Three.js</li>
                                </ul>
                            </div>
                        </div>
                        <div className="glass rounded-2xl p-4 glow-border animate-fade-in animation-delay-100 items-center">
                            <div>
                                <h3 className="text-lg font-semibold text-secondary-foreground mb-2">Robotics & Intelligent Systems</h3>
                            </div>
                            <div>
                                <ul className="py-2 list-disc list-inside">
                                    <li>ROS2</li>
                                    <li>Isaac Sim</li>
                                    <li>Nav2</li>
                                    <li>LiDAR</li>
                                    <li>Sensor Integration</li>
                                    <li>Fleet Orchestration</li>
                                    <li>Rviz</li>
                                    <li>Foxglove</li>
                                    <li>Isaac Mission Control</li>
                                    <li>Isaac Mission Dispatch</li>
                                    <li>Gazebo</li> 
                                </ul>
                            </div>
                        </div>
                        <div className="glass rounded-2xl p-4 glow-border animate-fade-in animation-delay-100 items-center">
                            <div>
                                <h3 className="text-lg font-semibold text-secondary-foreground mb-2">Economics & Quantitative Analysis</h3>
                            </div>
                            <div>
                                <ul className="py-2 list-disc list-inside">
                                    <li>Econometrics</li>
                                    <li>Economic Modeling</li>
                                    <li>Financial Modeling</li>
                                    <li>Data Analysis</li>
                                    <li>Regression Analysis</li>
                                    <li>Market Analysis</li>
                                    <li>Cost-Benefit Analysis</li>
                                    <li>Data Visualization</li>
                                    <li>SQL</li>
                                    <li>R (RStudio)</li>
                                    <li>Power BI</li>
                                    <li>Excel</li>
                                </ul>
                            </div>
                        </div>
                        <div className="glass rounded-2xl p-4 glow-border animate-fade-in animation-delay-100 items-center">
                            <div>
                                <h3 className="text-lg font-semibold text-secondary-foreground mb-2">Systems Architecture</h3>
                            </div>
                            <div>
                                <ul className="py-2 list-disc list-inside">
                                    <li>Systems Design</li>
                                    <li>Solution Architecture</li>
                                    <li>Requirements Analysis</li>
                                    <li>Rapid Prototyping</li>
                                    <li>Design Thinking</li>
                                    <li>Figma</li>
                                    <li>Technical Documentation</li>
                                    <li>Technical Writing</li>
                                    <li>Technical Presentations</li>
                                    <li>Research</li>
                                    <li>Unit Testing</li>  
                                </ul>
                            </div>
                        </div>
                    </div>
                
                    <div className="my-20 glass max-w-screen-md rounded-2xl p-4 glow-border animate-fade-in animation-delay-100 items-center justify-center mx-auto">
                        <div>
                                <h3 className="text-lg font-semibold text-secondary-foreground mb-2">Languages</h3>
                            </div>
                            <span> English (Native), German (Conversational B1)</span>
                    </div>
                
                </div>
            </div>
        </section>
    );
};