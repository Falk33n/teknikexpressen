'use client';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components';
import { cn } from '@/helpers';
import { type FormEvent, type HTMLAttributes, useState } from 'react';

type NavBarSearchBarProps = HTMLAttributes<HTMLDivElement>;

export const NavBarSearchBar = ({ className }: NavBarSearchBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  function handleInputValue(e: FormEvent<HTMLInputElement>) {
    if (e.currentTarget.value !== '' && !isVisible) {
      setIsVisible(true);
    } else if (e.currentTarget.value === '' && isVisible) {
      setIsVisible(false);
    }
  }

  return (
    <Command
      className={cn('relative -ml-9 mr-4 flex-1', className)}
      onBlur={() => setIsVisible(false)}
    >
      <CommandInput
        className={cn(isVisible && 'shadow-md')}
        placeholder='Sök bland våra produkter...'
        onInput={e => handleInputValue(e)}
      />
      <CommandList
        className={cn(
          'absolute left-0 top-[2.8rem] z-[2] w-full rounded-b-lg rounded-t-none border border-t-0 bg-background shadow-md',
          isVisible && 'border-t'
        )}
      >
        {isVisible && (
          <>
            <CommandEmpty>Inga produkter hittades.</CommandEmpty>
            <CommandGroup heading='Träffar'>
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
          </>
        )}
      </CommandList>
    </Command>
  );
};

NavBarSearchBar.displayName = 'NavBarSearchBar';
