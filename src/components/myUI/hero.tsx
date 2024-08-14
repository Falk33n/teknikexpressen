import { cn } from '@/helpers';
import Image from 'next/image';
import { type HTMLAttributes } from 'react';

type HeroProps = HTMLAttributes<HTMLDivElement>;

export const Hero = ({ className, ...props }: HeroProps) => {
  return (
    <>
      <div
        className={cn(
          'flex items-center justify-center gap-10 px-48 py-24',
          className
        )}
        {...props}
      >
        <figure>
          <Image
            className={cn('relative z-[-1] opacity-35')}
            src='/hero.svg'
            aria-hidden
            priority
            layout='fill'
            alt='En blå och vit geometrisk bakgrund med en liten kvadrat i mitten, vilket skapar en modern och minimalistisk design.'
          />
          <Image
            draggable={false}
            src='/heroAnimatedMan.png'
            width={800}
            height={800}
            alt='En glad tecknad man som sitter vid en dator och visar ett glatt uttryck medan han interagerar med skärmen.'
            priority
          />
        </figure>
        <div className={cn('flex flex-col items-center gap-5')}>
          <h1 className={cn('text-center text-4xl font-bold uppercase')}>
            Där teknik möter passion
          </h1>
          <p className='px-24 leading-6 [text-shadow:1px_1px_0_#FFFFFF]'>
            <strong>Upptäck det senaste inom teknik och innovation.</strong> Vi
            erbjuder ett brett sortiment av högkvalitativa produkter, noggrant
            utvalda för att möta dina behov, oavsett om du är en hardcore gamer,
            en professionell kreatör, eller bara älskar den senaste tekniken.
            Hos oss hittar du allt du behöver för att ligga steget före - alltid
            till konkurrenskraftiga priser.
          </p>
        </div>
      </div>
    </>
  );
};

Hero.displayName = 'Hero';
