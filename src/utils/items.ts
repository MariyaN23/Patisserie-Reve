import {paths} from "./paths.ts";
import {drinkMenuItems} from "../components/menu/drinksMenuItems.ts";
import {dessertMenuItems} from "../components/menu/dessertMenuItems.ts";

export const menuItems = window.location.pathname.startsWith(paths.drinks) ? drinkMenuItems
    : location.pathname.startsWith(paths.desserts) ? dessertMenuItems
        : []