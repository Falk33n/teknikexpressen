import { Button } from '@/components';
import { cn } from '@/helpers';
import type { ButtonHTMLAttributes, ElementType, SVGProps } from 'react';

type IconAndTextButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon: ElementType<SVGProps<SVGSVGElement>>;
  heading: string;
};

export const IconAndTextButton = ({
  className,
  heading,
  Icon,
  ...props
}: IconAndTextButtonProps) => {
  return (
    <Button
      size={'textAndIcon'}
      className={cn(
        'flex-col bg-background text-xs text-accent-foreground',
        'hover:bg-accent/25 hover:text-primary',
        'focus-visible:bg-accent/25 focus-visible:text-primary',
        className
      )}
      {...props}
    >
      <Icon className={cn('mb-0.5 size-[1.1rem]')} />
      {heading}
    </Button>
  );
};

IconAndTextButton.displayName = 'IconAndTextButton';
