'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { doc, setDoc } from 'firebase/firestore';
import { Send } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { db } from '@/firebase';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

export function SendMessageButton() {
  const [open, setOpen] = useState(false);
  const formSchema = z.object({
    name: z.string().min(1, { message: 'Digite seu nome.' }),
    lastName: z.string().min(1, { message: 'Digite seu sobrenome.' }),
    email: z.string().email({ message: 'Digite seu E-mail.' }),
    idea: z.string().min(10, { message: 'A frase deve ter pelo menos 10 caracteres' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema.required({ name: true, lastName: true })),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      idea: '',
    },
  });

  const onChangeSubmit = async (data: z.infer<typeof formSchema>) => {
    setOpen(false);
    try {
      await setDoc(doc(db, 'networking', `${data.name} ${data.lastName}`), {
        name: {
          fist: data.name,
          lastL: data.lastName,
        },
        contact: {
          email: data.email,
        },
        idea: data.idea,
      });
      toast({ description: 'Your message has been sent.' });
    } catch (e) {
      console.log(e);
      toast({
        variant: 'destructive',
        description: 'There was a problem with your request.',
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={() => { setOpen(!open); form.reset(); }}>
      <DialogTrigger onClick={() => setOpen(true)} className="min-w-[320px] w-[90%] max-w-[560px]">
        <div className="group relative transition-all flex items-center justify-center rounded-full w-full h-[72px] bg-background text-[140%] md:text-[36px] hover:bg-primary hover:border border-action hover:text-action">
          Entre em contato
          <div className="absolute transition-all right-8 h-[40%] md:h-[36px] group-hover:text-action">
            <Send size="100%" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Fale conosco
          </DialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onChangeSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sobrenome</FormLabel>
                    <FormControl>
                      <Input placeholder="Sobrenome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="E-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número</FormLabel>
                    <FormControl>
                      <Input placeholder="Número" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <FormField
                control={form.control}
                name="idea"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Compartilhe suas ideias aqui..." className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full flex z-[54] justify-end text-secondary">
                <Button type="submit" variant="default">send</Button>
              </div>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
