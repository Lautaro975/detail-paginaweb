import ImageLink from "@/components/Image/imageLink/imageLink"
import MenuHamburger from "./menuHamburger/menuHamburger"


const Header = () => {
  return (
    <header className="h-16 sticky bg-zinc-900 top-0 w-full z-50 flex items-center justify-between shadow-ms shadow-black ">
        <div className="ml-4 relative">
            <MenuHamburger/>
        </div>

        <div className="w-20 h-full relative">
            <ImageLink href="/" alt="logo" src="/img/menu/logoWF.png" className="object-contain"/>
        </div>
        <div className="w-16 h-full flex items-center gap-5 mr-4">
            <div className="w-8 h-8 relative">
                <ImageLink href="/cart" alt="cart" src="/img/menu/cart.png" className="object-contain"/>
            </div>
            <div className="w-8 h-8 relative">
                <ImageLink href="/login" alt="user" src="/img/menu/nueva-cuenta.png" className="object-contain"/>
            </div>
        </div>
    </header>
  )
}

export default Header
