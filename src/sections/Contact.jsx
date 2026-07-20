import { Mail, MapPinSearch, Globe, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/Button"
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { LinkedinIcon } from "@/components/icons";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    description: 
        "smithdave2004@gmail.com"
  },
  {
    icon: LinkedinIcon,
    title: "LinkedIn",
    description: 
        "www.linkedin.com/in/davidchrsmith"
  },
  {
    icon: MapPinSearch,
    title: "Location",
    description: 
        "Twin-Cities, Minnesota, USA"
  },
  {
    icon: Globe,
    title: "Languages",
    description: 
        "English (Native), German (B1)"
  },
];

export const Contact = () => {
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, //success or error
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            if (!serviceId || !templateId  || !publicKey) {
                throw new Error("EmailJS service ID, template ID, or public key is not configured.");
            }
            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publicKey);

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            })
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error sending email:", error);
            setSubmitStatus({
                type: "error",
                message: error.text || "Failed to send message. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <section id="contact" className="py-20 relative min-h-screen flex items-center overflow-hidden">
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
            <div className="absolute top-1/3 right-3/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
            <div className="absolute bottom-3/5 left-1/2 w-64 h-64 bg-highlight/8 rounded-full blur-3xl" />
            <div className="absolute top-90 right-0 w-96 h-96 bg-primary/12 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Column */}
                    <div className="space-y-6" >
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Contact</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif italic font-normal text-white ">
                            Let's build
                            <span className="font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground"> something meaningful.</span>
                        </h2>

                        <div className="grid xl:grid-cols-2 gap-8">
                            {contacts.map((item, idx) => (
                                <div key={idx} className="glass p-6 rounded-2xl animate-fade-in animation-delay-200 border border-primary/30" style={{animationDelay: `${(idx + 1) * 100}ms`}}>
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

                    {/** Right column */}
                    <div className="w-full">
                        <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                    <input 
                                        id="name" 
                                        type="text" 
                                        required placeholder="Your name... " 
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value})
                                        }
                                        className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                    <input 
                                        id="email"
                                        type="email"
                                        required placeholder="your@email.com " 
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value})
                                        }
                                        className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                    <textarea 
                                        rows={5} 
                                        required placeholder="Your message... " 
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value})
                                        }
                                        className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" />
                                </div>

                            <Button
                                className="w-full"
                                type="submit"
                                size="lg"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                <>Sending...</>
                                ) : (
                                <>
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </>
                                )}
                            </Button>

                            {submitStatus.type && (
                                <div
                                className={`flex items-center gap-3
                                    p-4 rounded-xl ${
                                    submitStatus.type === "success"
                                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                                    }`}
                                >
                                {submitStatus.type === "success" ? (
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                )}
                                <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                            </form>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    );
};