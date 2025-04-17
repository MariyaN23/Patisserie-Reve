import {NavigationMenu} from "./NavigationMenu.tsx";
import {Switch} from "./Switch.tsx";

export const Header = () => {
    return (
        <header className={'relative z-50 w-full bg-background shadow-sm select-none'}>
            <div className={'container flex flex-col items-center'}>
                <div className={'w-full flex items-center'}>
                    <h1 className={'flex-1 text-center'}>
                        <a href={'/'}>
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