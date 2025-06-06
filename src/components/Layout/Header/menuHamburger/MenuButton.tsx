'use client'

import { useMenu } from '@/context/MenuContext';

const MenuButton = () => {
  const { toggleMenu } = useMenu();

  return (
    <div className="w-16 relative">
      <button 
        onClick={toggleMenu}
        className="text-white text-xl cursor-pointer ml-4"
      >
        ☰
      </button>
    </div>
  );
};

export default MenuButton; 