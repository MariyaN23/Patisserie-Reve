import {MenuItem} from "./MenuItem.tsx";
import {SubMenu} from "./SubMenu.tsx";
import {dessertMenuItems} from "./dessertMenuItems.ts";
import {paths} from "../../utils/paths.ts";
import {drinkMenuItems} from "./drinksMenuItems.ts";

export const NavigationMenu = () => {
    const menuItems = window.location.pathname.startsWith(paths.drinks) ? drinkMenuItems
        : location.pathname.startsWith(paths.desserts) ? dessertMenuItems
            : []

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