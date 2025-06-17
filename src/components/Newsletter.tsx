
import { useState } from "react";
import { toast } from "sonner";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { sendNewsletterEmail } from "@/services/atlantizEmailService";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) {
      toast.error("Please fill in required fields", {
        description: "Full name and email address are required.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address", {
        description: "Please enter a valid email format.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendNewsletterEmail({
        fullName,
        email,
        company
      });

      if (result.success) {
        toast.success("Welcome to Atlantiz AI! 🎉", {
          description: "Your newsletter signup has been sent successfully!"
        });
        setEmail("");
        setFullName("");
        setCompany("");
      } else {
        toast.error("Submission failed", {
          description: "Please try again or contact support."
        });
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      toast.error("Submission failed", {
        description: "Please try again or contact support."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="bg-gradient-to-br from-white via-pulse-50/30 to-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pulse-100/40 to-transparent animate-float"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-pulse-200/30 rounded-full blur-xl animate-pulse-glow"></div>
      
      <div className="section-container opacity-0 animate-on-scroll relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8 animate-slide-up-fade">
            <div className="pulse-chip bg-gradient-to-r from-pulse-100 to-orange-100 border-pulse-300 hover:scale-110 transition-all duration-300">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2 animate-pulse-ring">
                <Sparkles className="w-3 h-3" />
              </span>
              <span className="font-medium">Stay Connected</span>
            </div>
          </div>
          
          <div className="mb-12 animate-slide-up-fade" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-left bg-gradient-to-r from-gray-900 via-pulse-600 to-gray-900 bg-clip-text text-transparent animate-text-shimmer">
              Join the Atlantiz AI Revolution
            </h2>
            <p className="text-xl text-gray-700 mb-4 text-left leading-relaxed animate-slide-up-fade" style={{ animationDelay: "0.4s" }}>
              Be the first to experience breakthrough AI innovations and exclusive early access opportunities
            </p>
          </div>
          
          <div className="glass-card p-8 sm:p-12 bg-white/70 backdrop-blur-md border border-white/20 shadow-elegant hover:shadow-elegant-hover transition-all duration-500 animate-slide-up-fade" style={{ animationDelay: "0.6s" }}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label htmlFor="fullName" className="block text-base font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-6 py-6 text-lg rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-3 focus:ring-pulse-500 focus:border-transparent text-gray-700 bg-white/90 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg hover:border-gray-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-16 pr-6 py-6 text-lg rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-3 focus:ring-pulse-500 focus:border-transparent text-gray-700 bg-white/90 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg hover:border-gray-300"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="group">
                <label htmlFor="company" className="block text-base font-semibold text-gray-700 mb-3">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Your company name"
                  className="w-full px-6 py-6 text-lg rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-3 focus:ring-pulse-500 focus:border-transparent text-gray-700 bg-white/90 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg hover:border-gray-300"
                />
              </div>

              {/* Attractive Decorative Filler Element */}
              <div className="relative flex items-center justify-center py-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gradient-to-r from-transparent via-pulse-200 to-transparent"></div>
                </div>
                <div className="relative bg-white px-8 py-4 rounded-full shadow-lg border border-pulse-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-pulse-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-600 tracking-wide">SECURE & ENCRYPTED</span>
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative overflow-hidden bg-gradient-to-r from-pulse-500 via-orange-500 to-pulse-600 hover:from-pulse-600 hover:via-orange-600 hover:to-pulse-700 text-white font-bold py-7 px-20 text-xl rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-pulse-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-4"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Atlantiz AI
                        <ArrowRight className="ml-4 w-6 h-6 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
