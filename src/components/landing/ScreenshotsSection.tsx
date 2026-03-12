import { motion } from "framer-motion";
import screenshotDashboard from "@/assets/screenshot-dashboard.png";
import screenshotAddExpense from "@/assets/screenshot-add-expense.png";
import screenshotAnalytics from "@/assets/screenshot-analytics.png";
import screenshotHistory from "@/assets/screenshot-history.png";

const screenshots = [
  { src: screenshotDashboard, label: "ড্যাশবোর্ড" },
  { src: screenshotAddExpense, label: "খরচ যোগ" },
  { src: screenshotAnalytics, label: "অ্যানালিটিক্স" },
  { src: screenshotHistory, label: "খরচের ইতিহাস" },
];

const ScreenshotsSection = () => {
  return (
    <section id="screenshots" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">স্ক্রিনশট</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            অ্যাপের <span className="text-gradient">ভেতরের দৃশ্য</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {screenshots.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="phone-mockup mx-auto max-w-[200px] md:max-w-[240px]">
                <img src={s.src} alt={s.label} className="w-full" loading="lazy" />
              </div>
              <p className="mt-4 font-semibold text-sm text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
