"use client";

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, type FormState } from '@/app/actions';
import { SECTION_MAP } from '@/lib/data';
import SectionWrapper from './section-wrapper';
import SectionTitle from './section-title';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const initialState: FormState = {
  success: false,
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Message'}
    </Button>
  );
}

const Contact = () => {
  const { id, icon, title } = SECTION_MAP.contact;
  const { toast } = useToast();
  const [state, formAction] = useFormState(submitContactForm, initialState);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
    }
  }, [state, toast]);

  return (
    <SectionWrapper id={id}>
      <SectionTitle icon={icon}>{title}</SectionTitle>
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardContent className="pt-6">
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Your message..." required minLength={10} />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
};

export default Contact;
