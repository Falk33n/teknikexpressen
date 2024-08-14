import {
  FooterListItem,
  FooterListItemHeading,
  FooterUnorderedList,
  Logo,
  SocialMediaLink
} from '@/components';
import { cn } from '@/helpers';
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquareYoutube
} from 'react-icons/fa6';

function TopFooter() {
  return (
    <div className={cn('flex pb-16 pr-44 pt-9')}>
      <figure
        className={'flex flex-1 flex-col items-center justify-center gap-4'}
      >
        <Logo width={315} height={200} />
        <nav className={cn('flex gap-3.5 pl-4')}>
          <SocialMediaLink
            title='Gå till vår Facebook sida'
            className='text-primary'
            Icon={FaSquareFacebook}
            href='https://facebook.com/'
          />
          <SocialMediaLink
            title='Gå till vår X sida'
            className='text-black'
            Icon={FaSquareXTwitter}
            href='https://x.com/'
          />
          <SocialMediaLink
            title='Gå till vår Instagram sida'
            className='text-orange-400 dark:text-[#C43B8A]'
            Icon={FaSquareInstagram}
            href='https://instagram.com/'
          />
          <SocialMediaLink
            title='Gå till vår YouTube kanal'
            className='text-red-600'
            Icon={FaSquareYoutube}
            href='https://youtube.com/'
          />
        </nav>
      </figure>
      <nav className={cn('flex justify-end gap-24')}>
        <FooterUnorderedList>
          <FooterListItemHeading text='Genvägar' />
          <FooterListItem text='Konto' href='/' />
          <FooterListItem text='Besökshistorik' href='/' />
          <FooterListItem text='Orderhistorik' href='/' />
          <FooterListItem text='Kundvagn' href='/' />
        </FooterUnorderedList>
        <FooterUnorderedList>
          <FooterListItemHeading text='Support och hjälp' />
          <FooterListItem text='Kontakta oss' href='/' />
          <FooterListItem text='Kundtjänst' href='/' />
          <FooterListItem text='Frakt och leverans' href='/' />
        </FooterUnorderedList>
        <FooterUnorderedList>
          <FooterListItemHeading text='Information' />
          <FooterListItem text='Nya produkter' href='/' />
          <FooterListItem text='Märke/Producent' href='/' />
        </FooterUnorderedList>
        <FooterUnorderedList>
          <FooterListItemHeading text='Om Teknikexpressen' />
          <FooterListItem text='Om oss' href='/' />
          <FooterListItem text='Miljöarbete' href='/' />
        </FooterUnorderedList>
      </nav>
    </div>
  );
}

function BottomFooter() {
  return (
    <aside className={cn('border-t border-border dark:border-background/20')}>
      <p className={cn('py-3 text-center text-xs text-muted-foreground')}>
        © 2024 Teknikexpressen AB. All rights reserved.
      </p>
    </aside>
  );
}

export function Footer() {
  return (
    <footer
      className={cn(
        'border-t border-border bg-secondary dark:border-background/20'
      )}
    >
      <TopFooter />
      <BottomFooter />
    </footer>
  );
}
