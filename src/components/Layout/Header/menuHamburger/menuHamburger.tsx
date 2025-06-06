"use client";

import Image from "next/image";
import LinkNav from "@/components/Link/link";
import ImageLink from "@/components/Image/imageLink/imageLink";
import cn from "classnames";
import { useMenu } from "@/context/MenuContext";
const MenuHamburger = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
      <div
        className={cn("bg-zinc-900  w-72 h-full transition-all duration-300 ease-in-out fixed left-0 top-0" , {
          "opacity-100 flex translate-x-0 z-50 ": isMenuOpen,
          "opacity-0 pointer-events-none -translate-x-full z-0": !isMenuOpen
        })}
      >
        <label
          htmlFor="menu-hamburger"
          className="text-white text-2xl absolute mt-4 mr-4 right-4 cursor-pointer"
          onClick={toggleMenu}
        >
          <Image
            src="/img/menu/cerrar.png"
            alt="close"
            width={24}
            height={24}
          />
        </label>
        <div className="text-white font-bold absolute top-20 w-full">
          <ul className="flex flex-col gap-6 px-6 leading-10">
            <div className="flex border-b border-[var(--botonPrimary)] w-full relative">
               <input type="text" placeholder="Ej: shampo..." className='px-2 py-1 w-3/4 bg-transparent outline-none text-[16px]'/>
               <Image src="/img/menu/search.png" alt="lupa" width={50} height={40}/>
            </div>
            <LinkNav href="/">LINEA DE PRODUCTOS</LinkNav>
            <LinkNav href="/">PRODUCTOS</LinkNav>
            <LinkNav href="/">NOSOTROS</LinkNav>
            <LinkNav href="/">CONTACTO</LinkNav>
            <div className="flex gap-4 w-full justify-start">
              <div className="relative w-4 h-4">
                <ImageLink
                  href="/"
                  src="/img/logoRedes/instagramlogo.png"
                  alt="instagram"
                  classNameimg="w-full h-full"
                  classNameLink=""
                />
              </div>
              <div className="relative w-4 h-4">
                <ImageLink
                  href="/"
                  src="/img/logoRedes/tiktoklogo.png"
                  alt="tiktok"
                  classNameimg="w-full h-full"
                  classNameLink=""
                />
              </div>
              <div className="relative w-4 h-4">
                <ImageLink
                  href="/"
                  src="/img/logoRedes/whatsapplogo.png"
                  alt="whatsapp"   
                  classNameimg="w-full h-full"
                  classNameLink=""
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
  );
};

export default MenuHamburger;