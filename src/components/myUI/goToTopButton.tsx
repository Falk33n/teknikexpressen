'use client';

import { Button } from '@/components';
import { cn } from '@/helpers';
import { type ButtonHTMLAttributes, useEffect, useState } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

type GoToTopButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const GoToTopButton = ({ className, ...props }: GoToTopButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    if (window.scrollY < 500 && !isVisible) return;
    else if (window.scrollY < 500) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    }; // eslint-disable-next-line
  }, [isVisible]); // IGNORES REACT HOOKS WARNING BEACUSE ONLY NEED TO BE CALLED AT INIT AND CHANGES TO THE STATE

  return (
    <>
      {isVisible && (
        <Button
          size='icon'
          variant='outline'
          aria-label='Gå tillbaka till toppen'
          title='Gå tillbaka till toppen'
          onClick={scrollToTop}
          className={cn(
            'fixed bottom-7 right-7 hover:text-primary focus-visible:text-primary',
            className
          )}
          {...props}
        >
          <MdOutlineKeyboardDoubleArrowUp className={cn('text-xl')} />
        </Button>
      )}
    </>
  );
};

GoToTopButton.displayName = 'GoToTopButton';
