import {MenuItem} from "./menuItems.ts";

type Props = {
    items: MenuItem[]
}

export const SubMenu = ({ items }: Props) => {
    return (
        <>
            {items.map((item, index) => (
                <li key={index} className={item.children ? 'has-submenu' : 'group'}>
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
                    {item.image && (
                        <div className='menu-image hidden group-hover:block absolute left-full top-0 w-64 h-48'>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                </li>
            ))}
        </>
    )
}