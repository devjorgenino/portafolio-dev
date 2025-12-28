import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const footerLinks = t('footer.links');
  const socialLinks = t('footer.social');

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              JN<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              {t('footer.copyright').replace('{year}', currentYear)}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                {social.icon === 'Github' && <Github className="w-5 h-5" />}
                {social.icon === 'Linkedin' && <Linkedin className="w-5 h-5" />}
                {social.icon === 'Twitter' && <Twitter className="w-5 h-5" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
