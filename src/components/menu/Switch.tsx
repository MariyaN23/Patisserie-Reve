import {useState} from "react";
import {SunIcon} from "../../assets/icons/sun-icon.tsx";
import {MoonIcon} from "../../assets/icons/moon-icon.tsx";

export const Switch = () => {
    const [isSelected, setIsSelected] = useState(false)

    return (
        <div className={'flex gap-2'}>
            {isSelected ? <MoonIcon/> : <SunIcon/>}
            <div
                className={`flex w-10 h-5 rounded-full transition-all duration-300 ${isSelected ? 'bg-coral' : 'bg-rose-quartz'}`}
                onClick={() => setIsSelected(!isSelected)}>
                <span
                    className={`w-5 h-5 border-2 bg-petal-pink rounded-full transition-all duration-300 ${isSelected ? 'ml-5 border-coral' : 'border-rose-quartz'}`}/>
            </div>
        </div>
    )
}