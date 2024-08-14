'use client';

import { Button } from '@/components';
import { cn } from '@/helpers';
import { useTheme } from 'next-themes';
import { useEffect, useState, type ElementType, type SVGProps } from 'react';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';

const ThemeIcon = ({
  Icon
}: {
  Icon: ElementType<SVGProps<SVGSVGElement>>;
}) => {
  return <Icon aria-hidden className={cn('h-[1.2rem] w-[1.2rem]')} />;
};

ThemeIcon.displayName = 'ThemeIcon';

export const ThemeToggleButton = () => {
  const { theme, systemTheme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);

  function toggleVisibility() {
    if (window.scrollY > 200 && !isVisible) return;
    else if (window.scrollY > 200) {
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
          className={cn(
            'fixed bottom-7 left-7 opacity-35 transition-all duration-300 hover:text-primary hover:opacity-100 focus-visible:text-primary focus-visible:opacity-100'
          )}
          variant='outline'
          size='icon'
          onClick={() =>
            setTheme(
              theme === 'system'
                ? systemTheme === 'dark'
                  ? 'light'
                  : 'dark'
                : theme === 'dark'
                  ? 'light'
                  : 'dark'
            )
          }
          aria-label={
            theme === 'system'
              ? systemTheme === 'dark'
                ? 'Ändra temat till ljust'
                : 'Ändra temat till mörkt'
              : theme === 'dark'
                ? 'Ändra temat till ljust'
                : 'Ändra temat till mörkt'
          }
          title={
            theme === 'system'
              ? systemTheme === 'dark'
                ? 'Ändra temat till ljust'
                : 'Ändra temat till mörkt'
              : theme === 'dark'
                ? 'Ändra temat till ljust'
                : 'Ändra temat till mörkt'
          }
        >
          {theme === 'system' ? (
            systemTheme === 'dark' ? (
              <ThemeIcon Icon={IoMoonSharp} />
            ) : (
              <ThemeIcon Icon={IoSunnySharp} />
            )
          ) : theme === 'dark' ? (
            <ThemeIcon Icon={IoMoonSharp} />
          ) : (
            <ThemeIcon Icon={IoSunnySharp} />
          )}
        </Button>
      )}
    </>
  );
};

ThemeToggleButton.displayName = 'ThemeToggleButton';
