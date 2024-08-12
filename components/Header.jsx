import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import Navbar from './navbar';

// components

const Header = () => {
  return (
    <header className="py-6 xl:py-10 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/*Logo */}
        <Link href="/">
         { /*<Image src="/assets/dbzapi.webp" width="50" height="50" alt="Logo" />*/}
         <h3 className='text-4xl'>DBZAPI <span className='text-accent'>.</span></h3>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/">
            <Button>Home</Button>
          </Link>
        </div>

        {/*mobile nav */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
