'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

//axios routes;
import { Controllers } from '@/app/controllers/index';

export default function Home() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleclick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    (async () => {
      const characters = await Controllers.allCharacter();
      setData(characters);
    })();
  }, []);
  console.log(data?.items);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-center xl:pt-8 xl:pb-24">
          {/*image*/}
          <div className="flex flex-col items-center text-center ">
            <Image
              src={`/assets/${isOpen ? 'dragon.png' : '7esferas.png'}`}
              alt="esferas"
              width={400}
              height={400}
              className="p-10 xl:p-4 transition-transform duration-200 ease-in-out hover:scale-110"
              onClick={handleclick}
            />
            {!isOpen && (
              <>
                <h1 className="h1 p-10 xl:p-4">¿Ya pediste tu deseo?</h1>
                <span className="text-2xl">¡¡¡Sal de ahi Shenlong!!! </span>
              </>
            )}
          </div>
          {/*button*/}
          <div>button</div>
        </div>
      </div>
    </section>
  );
}
