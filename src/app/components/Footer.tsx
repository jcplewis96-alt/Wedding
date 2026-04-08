import { Heart, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Heart className="w-8 h-8 mx-auto mb-4 text-rose-400" />
        <h3 className="text-2xl mb-2 font-serif">Emma & James</h3>
        <p className="text-slate-300 mb-6">June 15, 2026 • Napa Valley, California</p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="mailto:wedding@emmajames.com" 
            className="hover:text-rose-400 transition-colors"
            aria-label="Email us"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-rose-400 transition-colors"
            aria-label="Follow on Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-sm text-slate-400">
          We can't wait to celebrate with you!
        </p>
        <p className="text-xs text-slate-500 mt-4">
          © 2026 Emma & James. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
