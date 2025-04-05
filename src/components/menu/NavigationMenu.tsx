import {MenuItem} from "./MenuItem.tsx";
import {SubMenu} from "./SubMenu.tsx";
import {useMenuItems} from "../../utils/items.ts";

export const NavigationMenu = () => {
    const menuItems = useMenuItems()
    return (
        <nav className={'container hidden md:block'}>
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