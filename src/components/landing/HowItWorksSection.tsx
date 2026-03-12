import { motion } from "framer-motion";
import { PlusCircle, TrendingUp, FileBarChart } from "lucide-react";

const steps = [
  {
    icon: <PlusCircle className="w-8 h-8" />,
    step: "০১",
    title: "খরচ যোগ করুন",
    desc: "যেকোনো সময় খরচের পরিমাণ, ক্যাটাগরি ও নোট যোগ করুন — মাত্র ৫ সেকেন্ডে।",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    step: "০২",
    title: "খরচ ট্র্যাক করুন",
    desc: "দিন, সপ্তাহ বা মাস অনুযায়ী আপনার খরচের হিসাব দেখুন এবং বাজেট মেনে চলুন।",
  },
  {
    icon: <FileBarChart className="w-8 h-8" />,
    step: "০৩",
    title: "রিপোর্ট দেখুন",
    desc: "সুন্দর চার্ট ও গ্রাফে আপনার সম্পূর্ণ খরচের বিশ্লেষণ পান।",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">কিভাবে কাজ করে</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            মাত্র <span className="text-gradient">৩ ধাপে</span> শুরু করুন
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-border" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 rounded-full bg-hero-gradient text-primary-foreground flex items-center justify-center mx-auto mb-6 relative z-10 shadow-card-lg">
                {s.icon}
              </div>
              <span className="text-5xl font-extrabold text-primary/10 absolute top-0 right-1/4">{s.step}</span>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
