import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import screenshotDashboard from "@/assets/screenshot-dashboard.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              🚀 বাংলাদেশের #১ খরচ ট্র্যাকার
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              আপনার প্রতিটি{" "}
              <span className="text-gradient">খরচ ট্র্যাক</span>{" "}
              করুন সহজেই
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              দৈনিক খরচ রেকর্ড করুন, ক্যাটাগরি অনুযায়ী বিশ্লেষণ দেখুন এবং আপনার আর্থিক লক্ষ্য পূরণ করুন — সম্পূর্ণ বাংলায়।
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#download"
                className="bg-hero-gradient text-primary-foreground px-8 py-4 rounded-full text-base font-bold hover:opacity-90 transition-opacity shadow-card-lg text-center"
              >
                ফ্রি ডাউনলোড করুন
              </a>
              <a
                href="#features"
                className="border-2 border-primary/20 text-foreground px-8 py-4 rounded-full text-base font-semibold hover:border-primary/40 transition-colors text-center"
              >
                ফিচার দেখুন
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              ✅ সম্পূর্ণ ফ্রি &nbsp;•&nbsp; ✅ অফলাইনে কাজ করে &nbsp;•&nbsp; ✅ বাংলা ইন্টারফেস
            </p>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 glow rounded-[2rem] scale-110" />
              <div className="phone-mockup w-[260px] md:w-[300px] animate-float">
                <img
                  src={screenshotDashboard}
                  alt="হিসাব অ্যাপ ড্যাশবোর্ড"
                  className="w-full"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-12"
        >
          <a href="#features" className="text-muted-foreground animate-bounce">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
