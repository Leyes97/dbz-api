'use client';
import { useEffect, useState } from 'react';
import { Controllers } from '@/app/controllers/index';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const characters = await Controllers.allCharacter();
      setData(characters);
    })();
  }, []);
  console.log(data?.items);

  return <main>homepage</main>;
}
