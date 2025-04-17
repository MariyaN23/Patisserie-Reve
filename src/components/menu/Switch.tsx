import {useContext} from "react";
import {SunIcon} from "../../assets/icons/sun-icon.tsx";
import {MoonIcon} from "../../assets/icons/moon-icon.tsx";
import {DarkThemeContext} from "../../context/dark-theme-context.tsx";

export const Switch = () => {
    const {darkTheme, toggleDarkTheme} = useContext(DarkThemeContext)

    return (
        <div className={'flex gap-2'}>
            {darkTheme ? <SunIcon/> : <MoonIcon/>}
            <div className={`flex w-9 h-5 rounded-full transition-all duration-300 cursor-pointer
            ${darkTheme ? 'bg-coral' : 'bg-rose-quartz'}`}
                 onClick={() => toggleDarkTheme()}>
                <span className={`w-5 h-5 border-2 bg-petal-pink rounded-full transition-all duration-300 
                ${darkTheme ? 'ml-4 border-coral' : 'border-rose-quartz'}`}/>
            </div>
        </div>
    )
}