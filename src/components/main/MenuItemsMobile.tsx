import {MenuItem} from "../../utils/types.ts";
import {useState} from "react";
import {paths} from "../../utils/paths.ts";
import {menuItems} from "../../utils/items.ts";
import {ArrowIcon} from "../../assets/icons/arrow-icon.tsx";

export const MenuItemsMobile = () => {
    const menuTitles = {
        [paths.drinks]: 'Drinks Menu',
        [paths.desserts]: 'Desserts Menu',
    }
    const currentPath = Object.keys(menuTitles).find(path => window.location.pathname.startsWith(path))
    const title = currentPath && menuTitles[currentPath]

    return (
        <section className={'block md:hidden'}>
            <h2>{title}</h2>
            <ul className={'space-y-2'}>
                {menuItems.map((item, index) => (
                    <MenuItemComponent key={index} item={item}/>
                ))}
            </ul>
        </section>
    )
}

const MenuItemComponent = ({item, depth = 0}: { item: MenuItem, depth?: number }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <li className={`${depth > 0 && 'pl-4 border-l-2 border-cream'}`}>
            <div className={`flex items-center ${depth === 0 ? 'font-bold text-xl' : 'font-medium'}`}
                 onClick={() => item.children && setIsOpen(!isOpen)}>
                {item.children && (
                    <span className={`mr-2 inline-block transition-transform duration-300 ${isOpen && 'rotate-90'}`}>
                        <ArrowIcon/>
                    </span>)}
                {item.title}
            </div>
            {item.image && (
                <img
                    src={item.image}
                    alt={item.title}
                    className={`menu-image w-48 h-48 object-cover my-2 ${depth > 0 && 'ml-6'}`}
                />
            )}
            {item.children && (
                <div
                    className={`opacity-0 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-full' : 'max-h-0'}`}>
                    <ul className={'mt-2 space-y-2'}>
                        {item.children.map((child, index) => (
                            <MenuItemComponent
                                key={index}
                                item={child}
                                depth={depth + 1}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </li>
    )
}