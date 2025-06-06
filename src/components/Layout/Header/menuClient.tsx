import { MenuProvider, useMenu } from "@/context/MenuContext";
import Header from "./header";
import MenuHamburger from "./menuHamburger/menuHamburger";

const MenuClient = () => {

    return (
        <MenuProvider>
            <Header/>
            <MenuHamburger />
        </MenuProvider>
    )
}

export default MenuClient;