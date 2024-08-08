import { cn } from '@/helpers/cn';
import { FaShopify } from 'react-icons/fa';
import { FaTruckFast } from 'react-icons/fa6';
import { MdOutlineKeyboardReturn } from 'react-icons/md';

export function TopBar() {
  return (
    <aside
      className={cn(
        'bg-muted flex items-center justify-center gap-6 py-2',
        '[&>p]:text-foreground [&>p]:flex [&>p]:items-center [&>p]:gap-1.5 [&>p]:font-medium [&>p]:uppercase',
        '[&>p>svg]:text-primary [&>p>svg]:text-xl'
      )}
    >
      <p>
        <FaShopify />
        Sveriges billigaste teknik e-handel
      </p>
      <p>
        <MdOutlineKeyboardReturn /> Fri retur
      </p>
      <p>
        <FaTruckFast /> Fri frakt över 500kr
      </p>
    </aside>
  );
}
