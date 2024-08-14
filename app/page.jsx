'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//axios routes;
import { Controllers } from '@/app/controllers/index';
//components
import ButtonCustom from '@/components/ButtonCustom';

const links = [
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
    path: '/Transformation',
  },
];

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
                <h1 className="h1 p-10 xl:p-4 uppercase">
                  ¿Ya pediste tu deseo?
                </h1>
                <span className="text-2xl uppercase">
                  ¡¡¡Sal de ahi Shenlong!!!{' '}
                </span>
              </>
            )}
          </div>
          {/*button*/}
          {isOpen && (
            <div className="flex flex-col xl:flex-row items-center xl:justify-between">
              {links.map((link, index) => {
                return (
                  <Link key={index} href={link.path} className="p-6">
                    <ButtonCustom text={link.name} />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
