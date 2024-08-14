'use client';

import {
  Button,
  DialogFooter,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from '@/components';
import { cn } from '@/helpers';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z
  .object({
    firstName: z.string().min(1, {
      message: 'Förnamnet måste fyllas i.'
    }),
    lastName: z.string().min(1, {
      message: 'Efternamnet måste fyllas i.'
    }),
    streetAddress: z.string().min(1, {
      message: 'Gatuaddressen måste fyllas i.'
    }),
    postalCode: z.string(),
    city: z.string().min(1, {
      message: 'Staden måste fyllas i.'
    }),
    email: z
      .string()
      .min(1, {
        message: 'E-postadressen måste fyllas i.'
      })
      .email({
        message: 'E-postadressen är inte giltig.'
      }),
    password: z.string(),
    confirmPassword: z.string()
  })
  .superRefine((val, ctx) => {
    if (val.postalCode === '') {
      ctx.addIssue({
        code: 'custom',
        path: ['postalCode'],
        message: 'Postnummeret måste fyllas i.'
      });
    } else if (val.postalCode.length < 5 || val.postalCode.length > 5) {
      ctx.addIssue({
        code: 'custom',
        path: ['postalCode'],
        message: 'Postnummeret måste bestå av endast 5 siffror.'
      });
    }

    if (val.password === '') {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: 'Lösenordet måste fyllas i.'
      });
    } else if (val.password.length < 8) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'Lösenordet måste vara minst 8 tecken långt.'
      });
    }

    if (val.confirmPassword === '') {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'Bekräfta lösenordet måste fyllas i.'
      });
    } else if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'Lösenorden matchar inte.'
      });
    }
  });

const formFields: Array<{
  name: keyof z.infer<typeof formSchema>;
  label: string;
  type?: string;
}> = [
  { name: 'firstName', label: 'Förnamn' },
  { name: 'lastName', label: 'Efternamn' },
  { name: 'streetAddress', label: 'Gatuadress' },
  { name: 'postalCode', label: 'Postnummer' },
  { name: 'city', label: 'Stad' },
  { name: 'email', label: 'E-postadress' },
  { name: 'password', label: 'Lösenord', type: 'password' },
  { name: 'confirmPassword', label: 'Bekräfta Lösenord', type: 'password' }
];

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      streetAddress: '',
      postalCode: '',
      city: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('flex flex-wrap gap-x-7 gap-y-5')}
      >
        {formFields.map(({ name, label, type = 'text' }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem className={cn('w-[48%] gap-4')}>
                <FormLabel className={cn('ml-3')}>{label}</FormLabel>
                <FormControl>
                  <Input placeholder={label} type={type} {...field} />
                </FormControl>
                <FormMessage className={cn('ml-3')} />
              </FormItem>
            )}
          />
        ))}
        <DialogFooter className={cn('flex-1')}>
          <Button type='submit' variant='default' className={cn('self-end')}>
            Spara
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

RegisterForm.displayName = 'RegisterForm';
