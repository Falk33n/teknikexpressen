import { Logo } from '@/components';
import { cn } from '@/helpers';
import Link from 'next/link';
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquareYoutube
} from 'react-icons/fa6';

const linkClassName =
  'text-2xl transition-transform hover:scale-125 focus-visible:scale-125';
const unorderedListClassName = cn('flex flex-col gap-1.5');
const listItemHeadingClassName = cn('font-semibold mb-1.5 text-foreground');
const listItemClassName = cn(
  'text-foreground/80 transition-colors',
  'hover:text-foreground hover:underline hover:underline-offset-1 hover:decoration-foreground/70',
  'focus-visible:text-foreground focus-visible:underline focus-visible:underline-offset-1 focus-visible:decoration-foreground/70'
);

function TopFooter() {
  return (
    <div className={cn('flex pb-16 pr-44 pt-9')}>
      <div className={'flex flex-1 flex-col items-center justify-center gap-4'}>
        <Logo width={315} height={200} />
        <figure className={cn('flex gap-3.5 pl-4')}>
          <Link
            href='/'
            aria-label='Gå till vår Facebook sida'
            title='Gå till vår Facebook sida'
            className={cn('text-primary', linkClassName)}
          >
            <FaSquareFacebook />
          </Link>
          <Link
            href='/'
            aria-label='Gå till vår X sida'
            title='Gå till vår X sida'
            className={cn('text-black', linkClassName)}
          >
            <FaSquareXTwitter />
          </Link>
          <Link
            href='/'
            aria-label='Gå till vår Instagram sida'
            title='Gå till vår Instagram sida'
            className={cn('text-orange-400', linkClassName)}
          >
            <FaSquareInstagram />
          </Link>
          <Link
            href='/'
            aria-label='Gå till vår YouTube kanal'
            title='Gå till vår YouTube kanal'
            className={cn('text-red-600', linkClassName)}
          >
            <FaSquareYoutube />
          </Link>
        </figure>
      </div>
      <div className={cn('flex justify-end gap-24')}>
        <ul className={unorderedListClassName}>
          <li className={listItemHeadingClassName}>Genvägar</li>
          <li className={listItemClassName}>
            <Link href='/'>Konto</Link>
          </li>
          <li className={listItemClassName}>
            <Link href='/'>Besökshistorik</Link>
          </li>
          <li className={listItemClassName}>
            <Link href='/'>Orderhistorik</Link>
          </li>
          <li className={listItemClassName}>
            <Link href='/'>Kundvagn</Link>
          </li>
        </ul>
        <ul className={unorderedListClassName}>
          <li className={listItemHeadingClassName}>Support och hjälp</li>
          <li className={listItemClassName}>
            <Link href='/'>Kontakta oss</Link>
          </li>
          <li className={listItemClassName}>
            <Link href='/'>Kundtjänst</Link>
          </li>
          <li className={listItemClassName}>
            <Link href='/'>Frakt och leverans</Link>
          </li>
        </ul>
        <ul className={unorderedListClassName}>
          <li className={listItemHeadingClassName}>Information</li>
          <li className={listItemClassName}>
            <Link href='/'>Nya produkter</Link>
          </li>
          <li className={listItemClassName}>
            <Link href='/'>Märke/Producent</Link>
          </li>
        </ul>
        <ul className={unorderedListClassName}>
          <li className={listItemHeadingClassName}>Om Teknikexpressen</li>
          <li className={listItemClassName}>
            <Link href='/'>Om oss</Link>
          </li>
          <li className={listItemClassName}>
            <Link href='/'>Miljöarbete</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function BottomFooter() {
  return (
    <aside className={cn('border-t border-input')}>
      <p className={cn('py-3 text-center text-xs text-muted-foreground')}>
        © 2024 Teknikexpressen AB. All rights reserved.
      </p>
    </aside>
  );
}

export function Footer() {
  return (
    <footer className={cn('border-t border-input bg-accent', 'mt-[1500px]')}>
      <TopFooter />
      <BottomFooter />
    </footer>
  );
}
