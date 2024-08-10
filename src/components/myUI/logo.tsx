import { cn } from '@/helpers';
import Image from 'next/image';
import Link from 'next/link';
import { type ImgHTMLAttributes } from 'react';

type LogoProps = ImgHTMLAttributes<HTMLImageElement> & {
  width?: number | `${number}`;
  height?: number | `${number}`;
};

export const Logo = ({ className, width, height, ...props }: LogoProps) => {
  return (
    <figure>
      <Link href='/'>
        <Image
          draggable={false}
          src='/logo.svg'
          alt='A blue lightning bolt icon on the left, with the word TEKNIKEXPRESSEN in uppercase on the right, representing the company logo.'
          priority
          className={cn(className)}
          width={width}
          height={height}
          {...props}
        />
      </Link>
    </figure>
  );
};

Logo.displayName = 'Logo';
