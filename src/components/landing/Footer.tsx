import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-3">💰 Expense Tracker</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              সবচেয়ে সহজ ও কার্যকর খরচ ট্র্যাকার অ্যাপ।
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">লিংক</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">ফিচারস</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">প্রাইভেসি পলিসি</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">ব্যবহারের শর্তাবলী</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">যোগাযোগ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>👨‍💻 Mohammad Asiful Islam</li>
              <li>🏢 Droidnest Studio</li>
              <li>📍 বাংলাদেশ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            তৈরি করেছে <Heart className="w-4 h-4 text-destructive fill-destructive" /> দিয়ে — Droidnest Studio
          </p>
          <p className="mt-1">© {new Date().getFullYear()} Expense Tracker। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
