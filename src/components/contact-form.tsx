'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { contactSchema, type ContactFormValues } from '@/lib/validation';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus('idle');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unable to submit the form right now.');
      }

      setStatus('success');
      setMessage(data.message || 'Your message was sent successfully.');
    } catch (error) {
      const text = error instanceof Error ? error.message : 'Unable to submit the form right now.';
      setStatus('error');
      setMessage(text);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-3xl border border-border bg-card p-6 shadow-soft" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-foreground">Name</label>
          <input id="name" {...register('name')} className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none ring-0 transition focus:border-primary" />
          {errors.name ? <p className="mt-2 text-sm text-red-500">{errors.name.message}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-foreground">Email</label>
          <input id="email" type="email" {...register('email')} className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none ring-0 transition focus:border-primary" />
          {errors.email ? <p className="mt-2 text-sm text-red-500">{errors.email.message}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm text-foreground">Subject</label>
        <input id="subject" {...register('subject')} className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none ring-0 transition focus:border-primary" />
        {errors.subject ? <p className="mt-2 text-sm text-red-500">{errors.subject.message}</p> : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-foreground">Message</label>
        <textarea id="message" rows={6} {...register('message')} className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground outline-none ring-0 transition focus:border-primary" />
        {errors.message ? <p className="mt-2 text-sm text-red-500">{errors.message.message}</p> : null}
      </div>

      <input type="text" {...register('website')} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {status !== 'idle' ? (
        <p className={status === 'success' ? 'text-sm text-emerald-400' : 'text-sm text-red-500'}>{message}</p>
      ) : null}

      <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
        {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
      </Button>
    </form>
  );
}
