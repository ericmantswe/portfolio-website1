
import Image from 'next/image';
import { PROFILE_DATA, SOCIAL_LINKS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Footer = () => {
  const footerBranding = PlaceHolderImages.find(img => img.id === 'footer-branding');
  const footerBg = PlaceHolderImages.find(img => img.id === 'footer-background');

  return (
    <footer className="relative bg-card border-t py-16 overflow-hidden">
      {/* Footer Background Image */}
      {footerBg && (
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <Image
            src={footerBg.imageUrl}
            alt="Footer Background"
            fill
            className="object-cover"
            data-ai-hint={footerBg.imageHint}
          />
        </div>
      )}

      <div className="container relative z-10 flex flex-col items-center gap-10">
        {footerBranding && (
          <div className="relative w-48 h-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src={footerBranding.imageUrl}
              alt="Branding"
              fill
              className="object-contain"
              data-ai-hint={footerBranding.imageHint}
            />
          </div>
        )}
        
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm font-black uppercase tracking-tighter">
              {PROFILE_DATA.name}
            </p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] font-medium mt-1">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="w-full h-px bg-primary/5" />
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <p className="text-[9px] uppercase tracking-[0.6em] text-muted-foreground/30 font-black">
            Mechatronics
          </p>
          <p className="text-[9px] uppercase tracking-[0.6em] text-muted-foreground/30 font-black">
            Web Development
          </p>
          <p className="text-[9px] uppercase tracking-[0.6em] text-muted-foreground/30 font-black">
            Innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
