import {
  IconAndTextButton,
  IconWithText,
  LoginDialog,
  Logo,
  NavBarListItem,
  NavBarSearchBar,
  RegisterDialog,
  Separator,
  ShoppingCartDialog
} from '@/components';
import { cn } from '@/helpers';
import Link from 'next/link';
import { FaShopify } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';
import { MdOutlineKeyboardReturn, MdSupportAgent } from 'react-icons/md';

function TopNavBar() {
  return (
    <aside
      className={cn(
        'mb-1.5 flex items-center justify-center gap-6 bg-muted py-2'
      )}
    >
      <IconWithText
        text='Sveriges billigaste teknik e-handel'
        Icon={FaShopify}
      />
      <IconWithText text='Fri retur' Icon={MdOutlineKeyboardReturn} />
      <IconWithText text='Fri frakt över 500kr' Icon={FaTruckFast} />
    </aside>
  );
}

function MiddleNavBar() {
  return (
    <div className={cn('flex items-center justify-between overflow-visible')}>
      <nav className={cn('relative flex flex-1 items-center')}>
        <Logo className={cn('-ml-3.5')} width={365} height={235} />
        <NavBarSearchBar />
        <div
          className={cn('flex items-center justify-between gap-1.5 pl-2 pr-5')}
        >
          <Link href='/'>
            <IconAndTextButton heading='Kundtjänst' Icon={MdSupportAgent} />
          </Link>
          <RegisterDialog />
          <LoginDialog />
          <ShoppingCartDialog />
        </div>
      </nav>
    </div>
  );
}

function BottomNavBar() {
  return (
    <nav>
      <ul className={cn('flex items-center justify-center')}>
        <NavBarListItem text='Datorer' href='/' />
        <NavBarListItem text='Telefoner' href='/' />
        <NavBarListItem text='Surfplattor' href='/' />
        <NavBarListItem text='TV' href='/' />
        <NavBarListItem text='Tillbehör' href='/' />
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
