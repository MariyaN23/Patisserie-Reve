import {MenuItem} from "./menuItems.ts";

type Props = {
    items: MenuItem[]
}

export const SubMenu = ({ items }: Props) => {
    return (
        <>
            {items.map((item, index) => (
                <li key={index} className={item.children && 'has-submenu'}>
                    {item.link ? (
                        <a href={item.link}>
                            {item.title}
                        </a>
                    ) : (
                        <button className={'relative'}>
                            {item.title}
                        </button>
                    )}
                    {item.children && (
                        <ul className={'submenu'}>
                            <SubMenu items={item.children} />
                        </ul>
                    )}
                </li>
            ))}
        </>
    )
}