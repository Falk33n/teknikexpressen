import { cn } from '@/helpers';
import type { HTMLAttributes } from 'react';

type FooterUnorderedListProps = HTMLAttributes<HTMLUListElement>;

export const FooterUnorderedList = ({
  className,
  children,
  ...props
}: FooterUnorderedListProps) => {
  return (
    <ul className={cn('flex flex-col gap-1.5', className)} {...props}>
      {children}
    </ul>
  );
};

FooterUnorderedList.displayName = 'FooterUnorderedList';
