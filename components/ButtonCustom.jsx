'use client';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ButtonCustom = ({ text }) => {
  return (
    <button
      className={cn(
        'relative flex items-center justify-center overflow-hidden shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56',
        buttonVariants({ size: 'default' }), // Ajusta el tamaño con el tamaño del segundo botón
        'bg-gray-800 text-white',
      )}>
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default ButtonCustom;
