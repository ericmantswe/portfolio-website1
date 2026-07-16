"use client";

import { useEffect, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm, type FormState } from '@/app/actions';
import { SECTION_MAP, SOCIAL_LINKS } from '@/lib/data';
import SectionWrapper from './section-wrapper';
import SectionTitle from './section-title';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send, MessageSquare, User, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const initialState: FormState = {
  success: false,
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-widest h-12 rounded-xl transition-all active:scale-95" 
      disabled={pending}
    >
      {pending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <>
          Send Message
          <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

const Contact = () => {
  const { id, icon, title } = SECTION_MAP.contact;
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Message Sent!" : "Oops!",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
    }
  }, [state, toast]);

  return (
    <SectionWrapper id={id} className="bg-background relative overflow-hidden">
      {/* Subtle Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <SectionTitle icon={icon}>{title}</SectionTitle>
      
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Left Side: Contact Info & Branding */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Let&apos;s build <span className="text-primary">something</span> amazing together
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Whether you have a groundbreaking project in mind or just want to discuss the future of tech, I&apos;m all ears.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Email</p>
                <a href="mailto:ericmantswe3@gmail.com" className="text-xl font-bold hover:text-primary transition-colors">
                  ericmantswe3@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Location</p>
                <p className="text-xl font-bold">Gaborone, Botswana</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold mb-6">Digital Presence</p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-white/10 bg-card/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label={name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative">
            <div className="absolute top-0 right-10 w-20 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <form action={formAction} className="space-y-6">
              <input type="hidden" name="access_key" value="babf6ce9-3446-4f80-9529-d7f503c74b89" />
              
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] font-black text-muted-foreground ml-1">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50" />
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Eric Mantswe" 
                    required 
                    className="pl-11 bg-background/30 border-white/5 h-14 rounded-2xl focus:ring-primary focus:border-primary/50 transition-all placeholder:text-muted-foreground/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-black text-muted-foreground ml-1">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50" />
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="eric@example.com" 
                    required 
                    className="pl-11 bg-background/30 border-white/5 h-14 rounded-2xl focus:ring-primary focus:border-primary/50 transition-all placeholder:text-muted-foreground/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] font-black text-muted-foreground ml-1">Your Message</Label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-primary/50" />
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="I have a project I'd like to discuss..." 
                    required 
                    minLength={10} 
                    className="pl-11 pt-4 bg-background/30 border-white/5 min-h-[160px] rounded-2xl focus:ring-primary focus:border-primary/50 transition-all placeholder:text-muted-foreground/30 resize-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <SubmitButton />
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
