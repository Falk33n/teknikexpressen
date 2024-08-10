import {
  Button,
  LoginDialog,
  NavBarSearchBar,
  RegisterDialog,
  Separator,
  ShoppingCartDialog
} from '@/components';
import { cn } from '@/helpers';
import Image from 'next/image';
import Link from 'next/link';
import { FaShopify } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';
import { MdOutlineKeyboardReturn, MdSupportAgent } from 'react-icons/md';

const paragraphClassName = cn(
  'flex [&>p]:items-center gap-1.5 font-medium uppercase text-foreground'
);
const svgClassName = cn('text-xl text-primary');

export function TopNavBar() {
  return (
    <aside
      className={cn(
        'mb-1.5 flex items-center justify-center gap-6 bg-muted py-2'
      )}
    >
      <p className={paragraphClassName}>
        <FaShopify className={svgClassName} />
        Sveriges billigaste teknik e-handel
      </p>
      <p className={paragraphClassName}>
        <MdOutlineKeyboardReturn className={svgClassName} /> Fri retur
      </p>
      <p className={paragraphClassName}>
        <FaTruckFast className={svgClassName} /> Fri frakt över 500kr
      </p>
    </aside>
  );
}

export function MiddleNavBar() {
  return (
    <div className={cn('flex items-center justify-between overflow-visible')}>
      <div className={cn('relative flex flex-1 items-center')}>
        <figure>
          <Image
            className={cn('-ml-3.5')}
            draggable={false}
            width={365}
            height={235}
            src='/logo.svg'
            alt='A blue lightning bolt icon on the left, with the word TEKNIKEXPRESSEN in uppercase on the right, representing the company logo.'
            priority
          />
        </figure>
        <NavBarSearchBar />
        <div
          className={cn('flex items-center justify-between gap-1.5 pl-2 pr-5')}
        >
          <Link href='/'>
            <Button
              size={'textAndIcon'}
              className={cn(
                'flex-col bg-background text-xs text-accent-foreground',
                'hover:bg-accent/25 hover:text-primary',
                'focus-visible:bg-accent/25 focus-visible:text-primary'
              )}
            >
              <MdSupportAgent className={cn('mb-0.5 size-[1.1rem]')} />
              Kundtjänst
            </Button>
          </Link>
          <RegisterDialog />
          <LoginDialog />
          <ShoppingCartDialog />
        </div>
      </div>
    </div>
  );
}

const listItemClassName = cn('transition-colors duration-300');
const linkClassName = cn(
  'relative inline-block px-6 py-1.5 font-medium transition-colors duration-300',
  'hover:text-primary',
  'focus-visible:text-primary',
  'after:absolute after:bottom-1 after:left-1/2 after:h-px after:w-3/4 after:origin-bottom-right after:-translate-x-1/2 after:scale-x-0 after:rounded-xl after:bg-primary after:transition-transform after:duration-300 after:ease-out after:content-[""]',
  'hover:after:origin-bottom-left hover:after:scale-x-100',
  'focus-visible:after:origin-bottom-left focus-visible:after:scale-x-100'
);

export function BottomNavBar() {
  return (
    <nav>
      <ul className={cn('flex items-center justify-center')}>
        <li className={listItemClassName}>
          <Link className={linkClassName} href='/'>
            Datorer
          </Link>
        </li>
        <li className={listItemClassName}>
          <Link className={linkClassName} href='/'>
            Telefoner
          </Link>
        </li>
        <li className={listItemClassName}>
          <Link className={linkClassName} href='/'>
            Surfplattor
          </Link>
        </li>
        <li className={listItemClassName}>
          <Link className={linkClassName} href='/'>
            TV
          </Link>
        </li>
        <li className={listItemClassName}>
          <Link className={linkClassName} href='/'>
            Tillbehör
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export function NavBar() {
  return (
    <>
      <TopNavBar />
      <div className={cn('bg-background')}>
        <MiddleNavBar />
        <BottomNavBar />
      </div>
      <Separator className={cn('mx-auto mt-3 w-11/12 opacity-50')} />
    </>
  );
}
