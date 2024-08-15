import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

// components
import MobileNav from './MobileNav';
import Navbar from './navbar';

const Header = () => {
  return (
    <header className="py-2 xl:py-2 text-primary bg-transparent  border-primary/10 border-b-2">
      <div className="container mx-auto flex justify-between items-center">
        {/*Logo */}
        <Link href="/">
          {/*<Image src="/assets/dbzapi.webp" width="50" height="50" alt="Logo" />*/}
          <h3 className="text-4xl bg-primary hover:bg-primary/90 border rounded-md text-white/80">
            DBZ<span className="text-accent ">-</span>API
          </h3>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/transformations">
            <Button>Transformations</Button>
          </Link>
        </div>

        {/*mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
