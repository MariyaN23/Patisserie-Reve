import { useEffect, useState } from 'react';
import { paths } from "./paths.ts";
import { drinkMenuItems } from "../components/menu/drinksMenuItems.ts";
import { dessertMenuItems } from "../components/menu/dessertMenuItems.ts";
import {MenuItem} from "./types.ts";

export const useMenuItems = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]); // Указание типа

    useEffect(() => {
        const isDrinks = window.location.pathname.startsWith(paths.drinks);
        const isDesserts = window.location.pathname.startsWith(paths.desserts);

        setMenuItems(
            isDrinks ? drinkMenuItems :
                isDesserts ? dessertMenuItems :
                    []
        );
    }, []);

    return menuItems;
};