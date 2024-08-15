'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

//routes
import { Controllers } from '../controllers';

const Planets = () => {
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    (async () => {
      const data = await Controllers.allPlanets();
      setPlanets(data);
    })();
  }, []);
  console.log(planets);

  return (
    <div className="h-full">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 xl:gap-16 items-center justify-between pt-10 xl:pt-8 xl:pb-24">
          {planets?.items?.map((planet, index) => {
            return (
              <div key={index}>
                <article className="bg-black/20 border rounded-md overflow-hidden cursor-pointer h-auto">
                  <div className="flex justify-center items-center h-48 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      src={planet.image}
                      alt={planet.name}
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="bg-primary rounded-sm text-white p-4 flex flex-col justify-between max-h-32 overflow-y-auto">
                    <div className="text-center">
                      <h2 className="text-2sm font-bold">{planet.name}</h2>
                      <p className="text-sm text-white/80">
                        {planet.description}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Planets;
