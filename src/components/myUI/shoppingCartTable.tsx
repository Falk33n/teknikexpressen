import {
  Button,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components';
import { cn } from '@/helpers';
import { forwardRef, type HTMLAttributes } from 'react';

type ShoppingCartTableProps = HTMLAttributes<HTMLTableRowElement>;

export const ShoppingCartTable = forwardRef<
  HTMLTableRowElement,
  ShoppingCartTableProps
>(({ className, ...props }, ref) => {
  return (
    <>
      <Button variant='link' size='sm' className={cn('!-mb-1 !mt-0 ml-auto')}>
        Töm kundkorgen
      </Button>
      <Table>
        <TableCaption className='sr-only'>
          Här kan du se och redigera din kundkorg, när du är redo att betala kan
          du trycka på betala.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[120px] justify-center'>Antal</TableHead>
            <TableHead className='flex-1'>Artikel</TableHead>
            <TableHead className='pr-10'>Pris</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {invoices.map((invoice) => ( */}
          <TableRow
            className={cn(className)}
            {...props}
            ref={ref} /* key={invoice.invoice} */
          >
            <TableCell className='flex w-[120px] items-center justify-center font-medium'>
              {/* {invoice.invoice} */}
              <Button
                aria-label='Minska ett antal'
                title='Minska ett antal'
                variant='ghost'
                size='minusOrPlus'
                className={cn(
                  'mr-2 opacity-75 transition-all hover:text-primary hover:opacity-100 focus-visible:text-primary focus-visible:opacity-100'
                )}
              >
                -
              </Button>
              {'1'}
              <Button
                aria-label='Öka ett antal'
                title='Öka ett antal'
                variant='ghost'
                size='minusOrPlus'
                className={cn(
                  'ml-2 opacity-75 transition-all hover:text-primary hover:opacity-100 focus-visible:text-primary focus-visible:opacity-100'
                )}
              >
                +
              </Button>
            </TableCell>
            <TableCell className='flex-1'>
              {/* {invoice.paymentStatus} */}Yo man man
            </TableCell>
            <TableCell className='pr-8 text-right'>
              {/* {invoice.totalAmount} */}
              {'200'}kr
            </TableCell>
          </TableRow>
          {/* ))} */}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className={cn('w-[120px] text-center')}>
              Totalt
            </TableCell>
            <TableCell className='flex-1 pr-8 text-right'>{'200'}kr</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
});

ShoppingCartTable.displayName = 'ShoppingCartTable';
