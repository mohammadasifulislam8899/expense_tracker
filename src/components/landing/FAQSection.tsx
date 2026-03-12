import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "অ্যাপটি কি অফলাইনে কাজ করে?",
    a: "হ্যাঁ! হিসাব অ্যাপ সম্পূর্ণ অফলাইনে কাজ করে। ইন্টারনেট সংযোগ পেলে স্বয়ংক্রিয়ভাবে ডেটা সিঙ্ক হয়ে যায়।",
  },
  {
    q: "ডেটা সিঙ্ক কিভাবে হয়?",
    a: "অ্যাপটি আপনার ডিভাইসে ডেটা সংরক্ষণ করে। ইন্টারনেট সংযোগ পেলে ক্লাউডে স্বয়ংক্রিয়ভাবে ব্যাকআপ হয়, যাতে আপনি নতুন ফোনেও পুরনো ডেটা ফেরত পান।",
  },
  {
    q: "আমার ডেটা কি নিরাপদ?",
    a: "অবশ্যই! আপনার সকল আর্থিক তথ্য এনক্রিপ্ট করা থাকে। আমরা কোনো তৃতীয় পক্ষের সাথে আপনার ডেটা শেয়ার করি না।",
  },
  {
    q: "অ্যাপটি কি সম্পূর্ণ ফ্রি?",
    a: "হ্যাঁ, হিসাব অ্যাপ সম্পূর্ণ বিনামূল্যে ব্যবহার করা যায়। কোনো hidden charge বা in-app purchase নেই।",
  },
  {
    q: "কোন কোন ফোনে চলে?",
    a: "Android 5.0 বা তার উপরের যেকোনো ফোনে অ্যাপটি চলবে। খুব কম স্টোরেজ ও RAM ব্যবহার করে।",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            সচরাচর <span className="text-gradient">জিজ্ঞাসা</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl px-6 shadow-card border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-sm hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
