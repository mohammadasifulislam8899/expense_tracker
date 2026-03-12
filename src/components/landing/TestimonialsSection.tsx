import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "রাহুল হাসান",
    role: "বিশ্ববিদ্যালয় ছাত্র",
    text: "আগে কোথায় টাকা যেত বুঝতামই না! Expense Tracker ব্যবহার করে এখন প্রতি মাসে সঞ্চয় করতে পারছি।",
    rating: 5,
  },
  {
    name: "ফারিয়া আক্তার",
    role: "গৃহিণী",
    text: "ব্যবহার করতে অনেক সহজ। বাচ্চাদের খরচ, বাজার খরচ সব আলাদা আলাদা ট্র্যাক করি।",
    rating: 5,
  },
  {
    name: "তানভীর আহমেদ",
    role: "ফ্রিল্যান্সার",
    text: "ক্লায়েন্টের কাজ করতে গিয়ে আয়-ব্যয়ের হিসাব রাখা কঠিন ছিল। এই অ্যাপ সব সহজ করে দিয়েছে।",
    rating: 5,
  },
  {
    name: "সুমাইয়া ইসলাম",
    role: "চাকরিজীবী",
    text: "অফলাইনে কাজ করে — এটাই সবচেয়ে ভালো দিক! অফিসে ওয়াইফাই না থাকলেও সমস্যা নেই।",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">রিভিউ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            ব্যবহারকারীদের <span className="text-gradient">মতামত</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-4 h-4 ${si < t.rating ? "text-accent fill-accent" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
