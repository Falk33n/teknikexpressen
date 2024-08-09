import { NavBarSearchBar } from '@/components';
import { cn } from '@/helpers/cn';
import Link from 'next/link';
import { FaShopify } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';
import { MdOutlineKeyboardReturn } from 'react-icons/md';

export function NavBar() {
  return (
    <>
      <TopBar />
      <div className={cn('bg-background')}>
        <MiddleBar />
        <nav
          className={cn(
            '[&>ul]:flex [&>ul]:items-center [&>ul]:justify-center',
            '[&>ul>li:hover]:bg-accent/50 [&>ul>li]:py-1.5 [&>ul>li]:transition-colors [&>ul>li]:duration-300',
            '[&>ul>li>a:hover]:text-primary [&>ul>li>a]:relative [&>ul>li>a]:inline-block [&>ul>li>a]:px-6 [&>ul>li>a]:py-1.5 [&>ul>li>a]:font-medium [&>ul>li>a]:transition-colors [&>ul>li>a]:duration-300',
            '[&>ul>li>a:after]:absolute [&>ul>li>a:after]:bottom-1 [&>ul>li>a:after]:left-1/2 [&>ul>li>a:after]:h-px [&>ul>li>a:after]:w-3/4 [&>ul>li>a:after]:origin-bottom-right [&>ul>li>a:after]:-translate-x-1/2 [&>ul>li>a:after]:scale-x-0 [&>ul>li>a:after]:rounded-xl [&>ul>li>a:after]:bg-primary [&>ul>li>a:after]:transition-transform [&>ul>li>a:after]:duration-300 [&>ul>li>a:after]:ease-out [&>ul>li>a:after]:content-[""] [&>ul>li>a:hover:after]:origin-bottom-left [&>ul>li>a:hover:after]:scale-x-100',
            '[&>ul>li:focus-visible]:bg-accent/50',
            '[&>ul>li>a:focus-visible:after]:origin-bottom-left [&>ul>li>a:focus-visible:after]:scale-x-100 [&>ul>li>a:focus-visible]:text-primary'
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
      </div>
    </>
  );
}

export function TopBar() {
  return (
    <aside
      className={cn(
        'flex items-center justify-center gap-6 bg-muted py-2',
        '[&>p]:flex [&>p]:items-center [&>p]:gap-1.5 [&>p]:font-medium [&>p]:uppercase [&>p]:text-foreground',
        '[&>p>svg]:text-xl [&>p>svg]:text-primary'
      )}
    >
      <p>
        <FaShopify />
        Sveriges billigaste teknik e-handel
      </p>
      <p>
        <MdOutlineKeyboardReturn /> Fri retur
      </p>
      <p>
        <FaTruckFast /> Fri frakt över 500kr
      </p>
    </aside>
  );
}

export function MiddleBar() {
  return (
    <div>
      <NavBarSearchBar />
    </div>
  );
}
