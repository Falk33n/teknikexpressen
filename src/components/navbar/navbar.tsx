import { cn } from '@/helpers/cn';
import Link from 'next/link';

export function NavBar() {
  return (
    <nav
      className={cn(
        'bg-background',
        '[&>ul]:flex [&>ul]:items-center [&>ul]:justify-center',
        '[&>ul>li:hover]:bg-accent/50 [&>ul>li]:py-1.5 [&>ul>li]:transition-colors [&>ul>li]:duration-300',
        '[&>ul>li>a:hover]:text-primary [&>ul>li>a]:relative [&>ul>li>a]:inline-block [&>ul>li>a]:px-6 [&>ul>li>a]:py-1.5 [&>ul>li>a]:font-medium [&>ul>li>a]:transition-colors [&>ul>li>a]:duration-300',
        '[&>ul>li>a:after]:bg-primary [&>ul>li>a:after]:absolute [&>ul>li>a:after]:bottom-1 [&>ul>li>a:after]:left-1/2 [&>ul>li>a:after]:h-px [&>ul>li>a:after]:w-3/4 [&>ul>li>a:after]:origin-bottom-right [&>ul>li>a:after]:-translate-x-1/2 [&>ul>li>a:after]:scale-x-0 [&>ul>li>a:after]:rounded-xl [&>ul>li>a:after]:transition-transform [&>ul>li>a:after]:duration-300 [&>ul>li>a:after]:ease-out [&>ul>li>a:after]:content-[""] [&>ul>li>a:hover:after]:origin-bottom-left [&>ul>li>a:hover:after]:scale-x-100',
        '[&>ul>li:focus-visible]:bg-accent/50',
        '[&>ul>li>a:focus-visible]:text-primary [&>ul>li>a:focus-visible:after]:origin-bottom-left [&>ul>li>a:focus-visible:after]:scale-x-100'
      )}
    >
      <ul>
        <li>
          <Link href='/'>Datorer</Link>
        </li>
        <li>
          <Link href='/'>Telefoner</Link>
        </li>
        <li>
          <Link href='/'>Surfplattor</Link>
        </li>
        <li>
          <Link href='/'>TV</Link>
        </li>
        <li>
          <Link href='/'>Tillbehör</Link>
        </li>
      </ul>
    </nav>
  );
}
