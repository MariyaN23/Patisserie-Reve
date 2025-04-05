import {paths} from "../../utils/paths.ts";
import {MenuItemsMobile} from "./MenuItemsMobile.tsx";

export const Main = () => {
    return (
        <main className={'container my-8'}>
            <p>Discover our delicious desserts and refreshing drinks.</p>
            <p>Perfect for any time of the day!</p>
            <h2>Our Menu:</h2>
            <nav>
                <ul className={'text-lg list-[circle] list-inside underline decoration-rose-quartz'}>
                    <li><a href={paths.desserts}>Desserts</a></li>
                    <li><a href={paths.drinks}>Drinks</a></li>
                </ul>
            </nav>
            <MenuItemsMobile/>
        </main>
    )
}