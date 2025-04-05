import {MenuItem} from "../../utils/types.ts";
import {
    AustrianEinspanner,
    BrazilianLemonade,
    EarlGrey,
    FrenchCafeauLait,
    Glintwine,
    GreekFrappe,
    HongKongMilkTea,
    IndianLassi,
    ItalianEspresso,
    ItalianLimonata,
    JasminePearl,
    Masala,
    Matcha,
    MexicanCafedeOlla,
    MexicanHorchata,
    MintTea,
    Mojito,
    ShirleyTemple,
    SpanishHotChocolate,
    TeaWithJam,
    ThaiIcedTea,
    TropicalPunch,
    TurkishCoffee,
    VienneseMelange
} from "../../assets/images";

export const drinkMenuItems: MenuItem[] = [
    {
        title: 'World Coffees',
        children: [
            {title: 'Italian Espresso', image: ItalianEspresso},
            {title: 'Viennese Melange (with whipped cream)', image: VienneseMelange},
            {title: 'French Café au Lait', image: FrenchCafeauLait},
            {title: 'Greek Frappé (iced whipped coffee)', image: GreekFrappe},
            {title: 'Turkish Coffee with Cardamom', image: TurkishCoffee},
            {title: 'Mexican Café de Olla (cinnamon-infused)', image: MexicanCafedeOlla},
        ],
    },
    {
        title: 'Traditional Teas',
        children: [
            {title: 'British Earl Grey', image: EarlGrey},
            {title: 'Japanese Matcha', image: Matcha},
            {title: 'Russian Caravan Tea (with jam)', image: TeaWithJam},
            {title: 'Indian Masala Chai (spiced)', image: Masala},
            {title: 'Moroccan Mint Tea', image: MintTea},
            {title: 'Chinese Jasmine Pearl Tea', image: JasminePearl},
        ],
    },
    {
        title: 'Refreshing Lemonades',
        children: [
            {title: 'Brazilian Lemonade (with condensed milk)', image: BrazilianLemonade},
            {title: 'Mexican Horchata (rice-cinnamon drink)', image: MexicanHorchata},
            {title: 'Italian Limonata', image: ItalianLimonata},
        ],
    },
    {
        title: 'Winter Warmers',
        children: [
            {title: 'Glintwine (non-alcoholic)', image: Glintwine},
            {title: 'Spanish Hot Chocolate (with churros)', image: SpanishHotChocolate},
            {title: 'Austrian Einspänner (coffee with cream)', image: AustrianEinspanner},
        ],
    },
    {
        title: 'Milk-Based Drinks',
        children: [
            {title: 'Hong Kong Milk Tea', image: HongKongMilkTea},
            {title: 'Indian Lassi (mango or mint)', image: IndianLassi},
            {title: 'Thai Iced Tea (orange-spiced)', image: ThaiIcedTea},
        ],
    },
    {
        title: 'Signature Mocktails',
        children: [
            {title: 'Mojito', image: Mojito},
            {title: 'Shirley Temple (grenadine + ginger ale)', image: ShirleyTemple},
            {title: 'Tropical Punch (pineapple + passionfruit)', image: TropicalPunch},
        ],
    },
]