import {MenuItem} from "./MenuItem.tsx";
import {SubMenu} from "./SubMenu.tsx";
import {menuItems} from "./menuItems.ts";

export const NavigationMenu = () => {
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