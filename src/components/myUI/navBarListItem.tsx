import { cn } from '@/helpers';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';

type NavBarListItemProps = HTMLAttributes<HTMLLIElement> & {
  text: string;
  href: string;
};

export const NavBarListItem = ({
  className,
  text,
  href,
  ...props
}: NavBarListItemProps) => {
  return (
    <li className={cn('transition-colors duration-300', className)} {...props}>
      <Link
        className={cn(
          'relative inline-block px-6 py-1.5 font-medium transition-colors duration-300',
          'hover:text-primary',
          'focus-visible:text-primary',
          'after:absolute after:bottom-1 after:left-1/2 after:h-px after:w-3/4 after:origin-bottom-right after:-translate-x-1/2 after:scale-x-0 after:rounded-xl after:bg-primary after:transition-transform after:duration-300 after:ease-out after:content-[""]',
          'hover:after:origin-bottom-left hover:after:scale-x-100',
          'focus-visible:after:origin-bottom-left focus-visible:after:scale-x-100'
        )}
        href={href}
      >
        {text}
      </Link>
    </li>
  );
};

NavBarListItem.displayName = 'NavBarListItem';
