import { cn } from '@/helpers';
import Link from 'next/link';
import type { ElementType, LinkHTMLAttributes, SVGProps } from 'react';
import type { Url } from 'url';

type SocialMediaLinkProps = LinkHTMLAttributes<HTMLAnchorElement> & {
  Icon: ElementType<SVGProps<SVGSVGElement>>;
  href: Url | string;
};

export const SocialMediaLink = ({
  className,
  Icon,
  href,
  title,
  ...props
}: SocialMediaLinkProps) => {
  return (
    <Link
      href={href}
      aria-label={title}
      title={title}
      className={cn(
        'text-2xl transition-transform hover:scale-125 focus-visible:scale-125',
        className
      )}
      {...props}
    >
      <Icon />
    </Link>
  );
};

SocialMediaLink.displayName = 'SocialMediaLink';
