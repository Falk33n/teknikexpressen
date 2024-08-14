'use client';

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  IconAndTextButton,
  LoginForm,
  RegisterForm,
  ShoppingCartTable
} from '@/components';
import { cn } from '@/helpers';
import { HiShoppingCart } from 'react-icons/hi2';
import { IoPersonAdd, IoPersonSharp } from 'react-icons/io5';

export function RegisterDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconAndTextButton heading='Bli kund' Icon={IoPersonAdd} />
      </DialogTrigger>
      <DialogContent className={cn('max-w-[1000px] p-8')}>
        <DialogHeader>
          <DialogTitle>Skapa ett konto</DialogTitle>
          <DialogDescription>
            Skapa ditt konto för att bli kund hos Teknikexpressen, tryck på
            spara när du är färdig.
          </DialogDescription>
        </DialogHeader>
        <RegisterForm />
      </DialogContent>
    </Dialog>
  );
}

export function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconAndTextButton heading='Logga in' Icon={IoPersonSharp} />
      </DialogTrigger>
      <DialogContent className={cn('max-w-[1000px] p-8')}>
        <DialogHeader>
          <DialogTitle>Logga in</DialogTitle>
          <DialogDescription>
            Logga in på ditt konto hos Teknikexpressen, när du är klar tryck på
            logga in.
          </DialogDescription>
        </DialogHeader>
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
}

export function ShoppingCartDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconAndTextButton heading='Kundkorg' Icon={HiShoppingCart} />
      </DialogTrigger>
      <DialogContent className={cn('max-w-[1000px] p-8')}>
        <DialogHeader>
          <DialogTitle>Kundkorg</DialogTitle>
          <DialogDescription aria-hidden>
            Här kan du se och redigera din kundkorg, när du är redo att betala
            kan du trycka på betala.
          </DialogDescription>
          <ShoppingCartTable />
        </DialogHeader>
        <DialogFooter className={cn('flex-1')}>
          <Button type='submit' size='lg' className={cn('mt-3 self-end')}>
            Betala
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
