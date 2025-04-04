import {MenuItem} from "../utils/types.ts";

export const drinkMenuItems: MenuItem[] = [
    {
        title: 'World Coffees',
        children: [
            { title: 'Italian Espresso', link: '/' },
            { title: 'Viennese Melange (with whipped cream)', link: '/' },
            { title: 'French Café au Lait', link: '/' },
            { title: 'Greek Frappé (iced whipped coffee)', link: '/' },
            { title: 'Turkish Coffee with Cardamom', link: '/' },
            { title: 'Mexican Café de Olla (cinnamon-infused)', link: '/' },
        ],
    },
    {
        title: 'Traditional Teas',
        children: [
            { title: 'British Earl Grey', link: '/' },
            { title: 'Japanese Matcha', link: '/' },
            { title: 'Russian Caravan Tea (with jam)', link: '/' },
            { title: 'Indian Masala Chai (spiced)', link: '/' },
            { title: 'Moroccan Mint Tea', link: '/' },
            { title: 'Chinese Jasmine Pearl Tea', link: '/' },
        ],
    },
    {
        title: 'Refreshing Lemonades',
        children: [
            { title: 'Brazilian Lemonade (with condensed milk)', link: '/' },
            { title: 'Mexican Horchata (rice-cinnamon drink)', link: '/' },
            { title: 'Italian Limonata Soda', link: '/' },
            { title: 'American Classic Lemonade', link: '/' },
        ],
    },
    {
        title: 'Winter Warmers',
        children: [
            { title: 'German Mulled Cider (non-alcoholic)', link: '/' },
            { title: 'Spanish Hot Chocolate (thick and rich)', link: '/' },
            { title: 'Austrian Einspänner (coffee with cream)', link: '/' },
        ],
    },
    {
        title: 'Milk-Based Drinks',
        children: [
            { title: 'Argentinian Submarino (chocolate in milk)', link: '/' },
            { title: 'Hong Kong Milk Tea', link: '/' },
            { title: 'Indian Lassi (mango or mint)', link: '/' },
            { title: 'Thai Iced Tea (orange-spiced)', link: '/' },
        ],
    },
    {
        title: 'Signature Mocktails',
        children: [
            { title: 'Virgin Mojito (lime + mint)', link: '/' },
            { title: 'Shirley Temple (grenadine + ginger ale)', link: '/' },
            { title: 'Nojito (alcohol-free mojito)', link: '/' },
            { title: 'Tropical Punch (pineapple + passionfruit)', link: '/' },
        ],
    },
]