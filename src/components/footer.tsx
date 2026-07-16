import Image from 'next/image';
import { PROFILE_DATA, SOCIAL_LINKS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Footer = () => {
  const footerImage = PlaceHolderImages.find(img => img.id === 'footer-branding');

  return (
    <footer className="bg-card border-t py-12">
      <div className="container flex flex-col items-center gap-8">
        {footerImage && (
          <div className="relative w-48 h-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <Image
              src={footerImage.imageUrl}
              alt="Branding"
              fill
              className="object-contain"
              data-ai-hint={footerImage.imageHint}
            />
          </div>
        )}
        
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm font-bold uppercase tracking-tighter">
              {PROFILE_DATA.name}
            </p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
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
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="w-full h-px bg-primary/5 mt-4" />
        
        <p className="text-[8px] uppercase tracking-[0.5em] text-muted-foreground/30">
          Mechatronics • Web Development • Innovation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
