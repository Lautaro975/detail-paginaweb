"use client"
import ImageLink from "@/components/Image/imageLink/imageLink"
import MenuHamburger from "./menuHamburger/menuHamburger"
import { useState, useEffect } from "react"
import cn from "classnames"
import { useMenu } from "@/context/MenuContext";

const Header = () => {
  const { toggleMenu } = useMenu();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "h-16 sticky z-40 top-0 w-full flex items-center justify-between transition-all duration-300",
      {
        "bg-zinc-900": !isScrolled,
        "w-[70%] fixed bg-transparent backdrop-blur-xl drop-shadow-lg mx-auto inset-x-0 top-10 rounded-3xl": isScrolled
      }
    )}>
        <div className="w-16 relative">
            <label htmlFor="menu-hamburger" className="text-white text-xl cursor-pointer ml-4" onClick={toggleMenu}>
            ☰
            </label>
        </div>
        <div className={cn("w-20 h-full relative transition-all duration-300", {
          "scale-90": isScrolled
        })}>
            <ImageLink href="/" alt="logo" src="/img/menu/logoWF.png" classNameimg="object-contain" classNameLink="w-full h-full"/>
        </div>
        <div className="w-16 h-full flex items-center gap-5 mr-4">
            <div className={cn("w-8 h-8 relative transition-all duration-300", {
              "scale-90": isScrolled
            })}>
                <ImageLink href="/cart" alt="cart" src="/img/menu/cart.png" classNameimg="object-contain" classNameLink="w-full h-full"/>
            </div>
            <div className={cn("w-8 h-8 relative transition-all duration-300", {
              "scale-90": isScrolled
            })}>
                <ImageLink href="/login" alt="user" src="/img/menu/nueva-cuenta.png" classNameimg="object-contain" classNameLink="w-full h-full"/>
            </div>
        </div>
    </header>
  )
}
export default Header

