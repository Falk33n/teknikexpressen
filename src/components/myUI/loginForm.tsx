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
    email: z
      .string()
      .min(1, {
        message: 'E-postadressen måste fyllas i.'
      })
      .email({
        message: 'E-postadressen är inte giltig.'
      }),
    password: z.string()
  })
  .superRefine((val, ctx) => {
    if (val.password === '') {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: 'Lösenordet måste fyllas i.'
      });
    }
  });

const formFields: Array<{
  name: keyof z.infer<typeof formSchema>;
  label: string;
  type?: string;
}> = [
  { name: 'email', label: 'E-postadress' },
  { name: 'password', label: 'Lösenord', type: 'password' }
];

export const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
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
            Logga in
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

LoginForm.displayName = 'LoginForm';
