import Link from 'next/link';
import { AlignLeft } from 'lucide-react';
import links from '@/utils/links';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="lg:hidden" asChild>
        <Button variant="outline" size="icon">
          <AlignLeft />
          <span className="sr-only">Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52 lg:hidden "
        align="start"
        sideOffset={25}
      >
        {links.map((link) => (
          <DropdownMenuItem key={link.href}>
            <Link href={link.href} className="flex items-center gap-x-2 ">
              {link.icon} <span className='capitalize'>{link.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
