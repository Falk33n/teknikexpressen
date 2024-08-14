'use client';

import { cn } from '@/helpers';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { type ImgHTMLAttributes } from 'react';

type LogoProps = ImgHTMLAttributes<HTMLImageElement> & {
  width?: number | `${number}`;
  height?: number | `${number}`;
};

export const Logo = ({ className, width, height, ...props }: LogoProps) => {
  const { theme, systemTheme } = useTheme();

  return (
    <figure>
      <Link href='/'>
        <Image
          draggable={false}
          src={
            theme === 'system'
              ? systemTheme === 'dark'
                ? '/darkLogo.svg'
                : '/lightLogo.svg'
              : theme === 'dark'
                ? '/darkLogo.svg'
                : '/lightLogo.svg'
          }
          alt='En blå blixtikon till vänster, med ordet TEKNIKEXPRESSEN i versaler till höger, som representerar företagets logotyp'
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
