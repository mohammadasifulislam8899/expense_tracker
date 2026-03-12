import { motion } from "framer-motion";
import { Wifi, WifiOff, CalendarDays, FolderOpen, BarChart3, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: <WifiOff className="w-6 h-6" />,
    title: "অফলাইন + অনলাইন সিঙ্ক",
    desc: "ইন্টারনেট ছাড়াই খরচ যোগ করুন। নেটওয়ার্ক পেলে স্বয়ংক্রিয়ভাবে সিঙ্ক হয়ে যাবে।",
  },
  {
    icon: <CalendarDays className="w-6 h-6" />,
    title: "দৈনিক খরচ ট্র্যাকিং",
    desc: "প্রতিদিনের খরচ সহজেই লিপিবদ্ধ করুন। দিন, সপ্তাহ বা মাস অনুযায়ী দেখুন।",
  },
  {
    icon: <FolderOpen className="w-6 h-6" />,
    title: "ক্যাটাগরি ভিত্তিক খরচ",
    desc: "খাবার, যাতায়াত, বিল, শপিং — প্রতিটি খরচ ক্যাটাগরি অনুযায়ী আলাদা করুন।",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "স্মার্ট অ্যানালিটিক্স",
    desc: "চার্ট ও গ্রাফের মাধ্যমে আপনার খরচের প্যাটার্ন বুঝুন এবং সঞ্চয় বাড়ান।",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "নিরাপদ ডেটা",
    desc: "আপনার সকল আর্থিক তথ্য এনক্রিপ্টেড এবং সম্পূর্ণ সুরক্ষিত।",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "সিম্পল ইউআই",
    desc: "কোনো জটিলতা নেই। যে কেউ সহজেই ব্যবহার করতে পারবে।",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">ফিচারস</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            যা যা আছে <span className="text-gradient">হিসাব</span> অ্যাপে
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            আপনার দৈনন্দিন খরচ ম্যানেজমেন্টকে সহজ ও স্মার্ট করতে আমাদের সব ফিচার।
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-lg transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-hero-gradient group-hover:text-primary-foreground transition-colors">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
