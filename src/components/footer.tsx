import { PROFILE_DATA, SOCIAL_LINKS } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
