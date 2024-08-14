import { cn } from '@/helpers';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';
import type { Url } from 'url';

type FooterListItemProps = HTMLAttributes<HTMLLIElement> & {
  text: string;
  href: string | Url;
};

export const FooterListItem = ({
  className,
  text,
  href,
  ...props
}: FooterListItemProps) => {
  return (
    <li
      className={cn(
        'text-foreground/80 transition-colors',
        'hover:text-foreground hover:underline hover:decoration-foreground/70 hover:underline-offset-1',
        'focus-visible:text-foreground focus-visible:underline focus-visible:decoration-foreground/70 focus-visible:underline-offset-1',
        className
      )}
      {...props}
    >
      <Link href={href}>{text}</Link>
    </li>
  );
};

FooterListItem.displayName = 'FooterListItem';
