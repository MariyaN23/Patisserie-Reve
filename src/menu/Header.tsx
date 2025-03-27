import {NavigationMenu} from "./NavigationMenu.tsx";

export const Header = () => {
    return (
        <header className={'relative z-50 w-full bg-background shadow-sm select-none'}>
            <div className={'mx-auto flex flex-col items-center'}>
                <h1 className={'font-primary'}>Pâtisserie Rêve</h1>
                <NavigationMenu/>
            </div>
        </header>
    )
}