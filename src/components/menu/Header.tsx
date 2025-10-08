import {NavigationMenu} from "./NavigationMenu.tsx";
import {Switch} from "./Switch.tsx";
import { paths } from "../../utils/paths.ts";

export const Header = () => {
    return (
        <header className={'relative z-50 w-full bg-background shadow-sm select-none'}>
            <div className={'flex flex-col items-center'}>
                <div className={'w-full flex items-center container'}>
                    <h1 className={'flex-1 text-center'}>
                        <a href={paths.main}>
                            Pâtisserie Rêve
                        </a>
                    </h1>
                    <Switch/>
                </div>
                <NavigationMenu/>
            </div>
        </header>
    )
}