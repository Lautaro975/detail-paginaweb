"use client";

import Image from "next/image";
import LinkNav from "@/components/Link/link";
import ImageLink from "@/components/Image/imageLink/imageLink";
import { redesurl } from "@/components/Layout/Footer/redes";

const MenuHamburger = () => {
  return (
    <>
      <input type="checkbox" id="menu-hamburger" className="hidden peer" />
      <label htmlFor="menu-hamburger" className="text-white text-xl">
        ☰
      </label>
      <div
        className="peer-checked:flex opacity-0 ease-in-out bg-zinc-700 fixed -left-72 top-0 w-72 h-full 
         transition-all duration-300 peer-checked:translate-x-72 peer-checked:opacity-100 justify-end items-start z-20"
      >
        <label
          htmlFor="menu-hamburger"
          className="text-white text-2xl absolute transition-all duration-300 delay-300
            mt-4 mr-4 peer-checked:opacity-100 peer-checked:translate-x-5"
        >
          <Image
            src="/img/menu/cerrar.png"
            alt="close"
            width={24}
            height={24}
          />
        </label>
        <div className="z-20 text-[var(--text)] font-bold absolute top-20 w-full">
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
                href={redesurl[1]}
                src="/img/logoRedes/instagramlogo.png"
                alt="instagram"
                className="w-full h-full"
              />
            </div>
            <div className="relative w-4 h-4">
              <ImageLink
                href={redesurl[2]}
                src="/img/logoRedes/tiktoklogo.png"
                alt="tiktok"
                className="w-full h-full"
              />
              </div>
              <div className="relative w-4 h-4">
              <ImageLink
                href={redesurl[0]}
                src="/img/logoRedes/whatsapplogo.png"
                alt="whatsapp"   
                className="w-full h-full"
              />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuHamburger;