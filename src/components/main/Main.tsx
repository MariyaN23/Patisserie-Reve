import { paths } from "../../utils/paths.ts";
import { MenuItemsMobile } from "./MenuItemsMobile.tsx";
import { Card } from "./Card.tsx";

export const Main = () => {
    return (
        <main className={'container my-8'}>
            <div className={'w-full flex gap-2 flex-col md:flex-row justify-between'}>
                <div className={'text-balance'}>
                    <p>Discover our delicious desserts and refreshing drinks.</p>
                    <p>Perfect for any time of the day!</p>
                </div>
                <div className={'flex flex-col items-center md:absolute right-0 space-y-2 mr-8'}>
                    <span className={'typewriter'}>
                        <span className={'text-xl'}>
                            SALE
                        </span>
                    </span>
                    <Card
                        title={'50% OFF'}
                        subtitle={'After 8 pm'}
                        description={'on all desserts'}
                        image={'https://baketotheroots.de/wp-content/uploads/2017/10/FB_170528_SchwarzwaelderKirsch.jpg'}
                    />
                    <Card
                        title={'FREE DRINK'}
                        subtitle={'in open hours'}
                        description={'for our first guest'}
                        image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5t-_uEjytrF6j01F5n1DMU5b7Mah9mrrFw&s'}
                    />
                </div>
            </div>
            <h2>Our Menu:</h2>
            <nav>
                <ul className={'text-lg list-[circle] list-inside underline decoration-rose-quartz'}>
                    <li><a href={paths.desserts}>Desserts</a></li>
                    <li><a href={paths.drinks}>Drinks</a></li>
                </ul>
            </nav>
            <MenuItemsMobile />
        </main>
    )
}