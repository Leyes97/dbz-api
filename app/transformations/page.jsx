'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// routes
import { Controllers } from '../controllers';

const Transformations = () => {
  const [transformations, setTransformations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransformations = async () => {
      try {
        const charactersData = await Controllers.allCharacter();
        const transformationPromises = charactersData.items.map(
          async (character) => {
            const data = await Controllers.character(character.id);
            return data.transformations.length > 0
              ? data.transformations
              : null;
          },
        );

        const transformationsArray = await Promise.all(transformationPromises);
        const flattenedTransformations = transformationsArray
          .flat()
          .filter(Boolean);
        setTransformations(flattenedTransformations);
      } catch (error) {
        console.error('Error fetching transformations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransformations();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 xl:gap-16 items-center justify-between pt-10 xl:pt-8 xl:pb-24">
          {transformations.map((character, index) => (
            <div key={index}>
              <article className="bg-white/60 border rounded-md overflow-hidden cursor-pointer">
                <div className="flex justify-center items-center h-96 transition-transform duration-200 ease-in-out hover:scale-105">
                  <Image
                    className="w-auto h-full object-contain"
                    src={character.image}
                    alt={character.name}
                    width={400}
                    height={400}
                  />
                </div>
                <div className="bg-primary rounded-md text-white p-4 pl-32 pr-32 xl:p-4 flex flex-col justify-between h-44">
                  <div className="text-center">
                    <h2 className="text-2sm font-bold">{character.name}</h2>
                    <p className="text-sm">{character.race}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <p className="text-sm">KI:</p>
                      <span className="text-sm">{character.ki}</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transformations;
