import { cn } from '@/helpers';
import type { HTMLAttributes } from 'react';

type FooterListItemHeadingProps = HTMLAttributes<HTMLLIElement> & {
  text: string;
};

export const FooterListItemHeading = ({
  className,
  text,
  ...props
}: FooterListItemHeadingProps) => {
  return (
    <li
      className={cn('mb-1.5 font-semibold text-foreground', className)}
      {...props}
    >
      {text}
    </li>
  );
};

FooterListItemHeading.displayName = 'FooterListItemHeading';
