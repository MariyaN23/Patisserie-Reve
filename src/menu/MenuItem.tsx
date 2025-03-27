import {ReactNode} from "react";

type Props = {
    title: string
    children?: ReactNode
}

export const MenuItem = ({ title, children }: Props) => {
    return (
        <li>
            <button className={'main-menu w-full py-3.5 relative xl:text-nowrap text-sm'}>{title}</button>
            {children && (
                <div className={'submenu border-t border-rose-quartz shadow-sm pt-1'}>
                    <div className={'w-screen-container mx-auto pb-8'}>
                        <ul className={'max-w-96 relative'}>
                            {children}
                        </ul>
                    </div>
                </div>
            )}
        </li>
    )
}