import { motion } from "framer-motion";
import { Download } from "lucide-react";

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-hero-gradient rounded-3xl p-10 md:p-16 text-primary-foreground text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary-foreground/5" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary-foreground/5" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              আজই শুরু করুন আপনার খরচ ট্র্যাকিং
            </h2>
            <p className="opacity-90 max-w-xl mx-auto mb-8 leading-relaxed">
              হিসাব অ্যাপ ডাউনলোড করুন এবং আপনার আর্থিক জীবনকে সুশৃঙ্খল করুন। সম্পূর্ণ ফ্রি, কোনো রেজিস্ট্রেশন লাগবে না।
            </p>

            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg"
            >
              <Download className="w-5 h-5" />
              Google Play থেকে ডাউনলোড করুন
            </a>

            <p className="text-sm opacity-75 mt-6">
              ✨ ১০,০০০+ মানুষ ইতোমধ্যে ব্যবহার করছে
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
