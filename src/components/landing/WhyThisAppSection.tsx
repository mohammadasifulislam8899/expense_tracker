import { motion } from "framer-motion";
import { Check } from "lucide-react";

const reasons = [
  "ইন্টারনেট ছাড়াই কাজ করে — গ্রামে বা শহরে যেকোনো জায়গায়",
  "কোনো সাইন আপ বা লগইন লাগে না — সরাসরি ব্যবহার শুরু করুন",
  "সুন্দর চার্ট ও রিপোর্ট — আপনার টাকা কোথায় যাচ্ছে তা দেখুন",
  "হালকা ও দ্রুত — পুরনো ফোনেও চলে",
  "সম্পূর্ণ ফ্রি — কোনো hidden charge নেই",
  "সিম্পল ইউআই — যে কেউ সহজেই ব্যবহার করতে পারবে",
];

const WhyThisAppSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">কেন Expense Tracker?</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              কেন এই অ্যাপ <span className="text-gradient">অন্যদের চেয়ে আলাদা</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              বাজারে অনেক Expense Tracker আছে, কিন্তু সিম্পল, কার্যকর ও সম্পূর্ণ ফ্রি অ্যাপ খুবই কম। Expense Tracker অ্যাপ সেই শূন্যতা পূরণ করতে এসেছে।
            </p>
            <ul className="space-y-4">
              {reasons.map((r, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-sm">{r}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="bg-hero-gradient rounded-3xl p-8 md:p-12 text-primary-foreground max-w-md">
              <div className="text-6xl mb-6">📊</div>
              <h3 className="text-2xl font-bold mb-3">আপনার আর্থিক জীবন নিয়ন্ত্রণে আনুন</h3>
              <p className="opacity-90 leading-relaxed text-sm">
                গবেষণায় দেখা গেছে, যারা নিয়মিত খরচ ট্র্যাক করেন তারা মাসে গড়ে ১৫-২০% বেশি সঞ্চয় করতে পারেন। Expense Tracker অ্যাপ দিয়ে আজই শুরু করুন।
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-extrabold">১০K+</div>
                  <div className="text-xs opacity-80 mt-1">ডাউনলোড</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-extrabold">৪.৮</div>
                  <div className="text-xs opacity-80 mt-1">রেটিং ⭐</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisAppSection;
