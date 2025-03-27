import {NavigationMenu} from "./NavigationMenu.tsx";

export const Header = () => {
    return (
        <header className={'relative z-50 w-full bg-background shadow-sm'}>
            <div className={'flex justify-between items-center'}>
                <NavigationMenu/>
            </div>
        </header>
    )
}