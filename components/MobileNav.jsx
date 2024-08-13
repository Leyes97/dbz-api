'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuKebab } from 'react-icons/ci';
import Image from 'next/image';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Characters',
    path: '/characters',
  },
  {
    name: 'Planets',
    path: '/planets',
  },
  {
    name: 'Transformations',
    path: '/transformations',
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el Sheet cuando se selecciona un enlace
  };

  return (
    <nav>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="flex justify-center items-center">
          <Image
            src="/assets/esfera4estrellas.png"
            width={40}
            height={40}
            alt="close"
            className="transition-transform duration-200 ease-in-out hover:scale-150"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          {/*logo */}
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/" onClick={handleLinkClick}>
              <h1 className="text-4xl font-semibold bg-primary hover:bg-primary/90 border rounded-md text-white/80 ">
                DBZ<span className="text-accent">-</span>API
              </h1>
            </Link>
          </div>
          {/*nav */}
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.path}
                  key={index}
                  onClick={handleLinkClick}
                  className={`${
                    link.path === pathname &&
                    'text-accent border-b-2 border-accent'
                  } text-xl capitalize hover:text-accent transition-all`}>
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
