import { cn } from '@/helpers';
import type { ElementType, HTMLAttributes, SVGProps } from 'react';

type IconWithTextProps = HTMLAttributes<HTMLParagraphElement> & {
  Icon: ElementType<SVGProps<SVGSVGElement>>;
  text: string;
};

export const IconWithText = ({
  className,
  text,
  Icon,
  ...props
}: IconWithTextProps) => {
  return (
    <p
      className={cn(
        'flex gap-1.5 font-medium uppercase text-foreground [&>p]:items-center',
        className
      )}
      {...props}
    >
      <Icon className={cn('text-xl text-primary')} />
      {text}
    </p>
  );
};

IconWithText.displayName = 'IconWithText';
