import {MenuItem} from "./MenuItem.tsx";
import {SubMenu} from "./SubMenu.tsx";
import {dessertMenuItems} from "./dessertMenuItems.ts";
import {useLocation} from "react-router";
import {paths} from "../utils/paths.ts";
import {drinkMenuItems} from "./drinksMenuItems.ts";

export const NavigationMenu = () => {
    const location = useLocation()
    const menuItems = location.pathname.startsWith(paths.drinks)
        ? drinkMenuItems
        : dessertMenuItems

    return (
        <nav className={'container'}>
            <ul className={'menu flex justify-between w-full'}>
                {menuItems.map((item, index) => (
                    <MenuItem key={index} title={item.title}>
                        {item.children && <SubMenu items={item.children} />}
                    </MenuItem>
                ))}
            </ul>
        </nav>
    )
}