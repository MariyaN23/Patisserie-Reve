import {
    AlmondFinanciers, BerryChiaPudding,
    ChocolateAvocadoMousseFigs,
    ChocolateRaspberryTruffle, CremeBruleeDonuts,
    CrunchyAlmondFrangipane,
    DarkChocolateSwirl, EggnogChiffonPie,
    GoldenHoneyButter, ItalianCantucci,
    KouignAmann, LavenderShortbread, LemonBlueberryTart,
    MangoPassionfruitMousse, MatchaWhiteChocolateEclairs,
    MoltenLavaCake,
    OperaCake,
    ParisBrestHazelnutPraline, PistachioRoseMadeleines, PumpkinSpiceCake,
    RaspberryCreamCheese,
    RedVelvetCheesecakeSwirl, SaltedCaramelMacarons,
    SaltedCaramelPecan,
    SeaSaltDarkChocolateChunk,
    StrawberryShortcake, SummerBerryPavlova,
    TarteauCitronMeringuee,
    TripleLayerFudge, VeganChocolateAvocadoMousseCake, VienneseWhirls,
    WhiteChocolateCranberry
} from "../assets/images"

export type MenuItem = {
    title: string
    link?: string
    image?: string
    children?: MenuItem[]
}

export const menuItems: MenuItem[] = [
    {
        title: 'Morning Delights',
        children: [
            {title: 'Berry Chia Pudding', link: '/', image: BerryChiaPudding},
        ],
    },
    {
        title: 'Buttery Croissants',
        children: [
            {title: 'Golden Honey-Butter', link: '/', image: GoldenHoneyButter},
            {title: 'Crunchy Almond Frangipane', link: '/', image: CrunchyAlmondFrangipane},
            {title: 'Dark Chocolate Swirl', link: '/', image: DarkChocolateSwirl},
            {title: 'Raspberry Cream Cheese', link: '/', image: RaspberryCreamCheese},
            {title: 'Salted Caramel Pecan', link: '/', image: SaltedCaramelPecan},
        ],
    },
    {
        title: 'Decadent Cakes',
        children: [
            {
                title: 'Chocolate Heaven',
                children: [
                    {title: 'Molten Lava Cake', link: '/', image: MoltenLavaCake},
                    {title: 'Triple-Layer Fudge', link: '/', image: TripleLayerFudge},
                    {title: 'Chocolate-Raspberry Truffle', link: '/', image: ChocolateRaspberryTruffle},
                    {title: 'Chocolate Avocado Mousse Tart with Figs', link: '/', image: ChocolateAvocadoMousseFigs},
                ],
            },
            {
                title: 'Fruit Fantasies',
                children: [
                    {title: 'Strawberry Shortcake', link: '/', image: StrawberryShortcake},
                    {title: 'Mango Passion fruit Mousse', link: '/', image: MangoPassionfruitMousse},
                ],
            },
            {title: 'Red Velvet Cheesecake Swirl', link: '/', image: RedVelvetCheesecakeSwirl},
        ],
    },
    {
        title: 'French Patisserie',
        children: [
            {title: 'Paris-Brest (Hazelnut Praline)', link: '/', image: ParisBrestHazelnutPraline},
            {title: 'Tarte au Citron Meringuée', link: '/', image: TarteauCitronMeringuee},
            {title: 'Opera Cake (Layers of Coffee & Ganache)', link: '/', image: OperaCake},
            {title: 'Kouign-Amann (Caramelized Butter Cake)', link: '/', image: KouignAmann},
        ],
    },
    {
        title: 'Cookie Collection',
        children: [
            {
                title: 'Gourmet Cookies',
                children: [
                    {title: 'Sea Salt Dark Chocolate Chunk', link: '/', image: SeaSaltDarkChocolateChunk},
                    {title: 'White Chocolate & Cranberry', link: '/', image: WhiteChocolateCranberry},
                    {title: 'Lavender Shortbread', link: '/', image: LavenderShortbread},
                ],
            },
            {
                title: 'European Classics',
                children: [
                    {title: 'Viennese Whirls', link: '/', image: VienneseWhirls},
                    {title: 'Italian Cantucci', link: '/', image: ItalianCantucci},
                ],
            },
        ],
    },
    {
        title: 'Seasonal Sensations',
        children: [
            {title: 'Pumpkin Spice Cake', link: '/', image: PumpkinSpiceCake},
            {title: 'Eggnog Chiffon Pie', link: '/', image: EggnogChiffonPie},
            {title: 'Summer Berry Pavlova', link: '/', image: SummerBerryPavlova},
        ],
    },
    {
        title: 'Guilt-Free Pleasures',
        children: [
            {title: 'Vegan Chocolate Avocado Mousse Cake', link: '/', image: VeganChocolateAvocadoMousseCake},
            {title: 'Gluten-Free Almond Financiers', link: '/', image: AlmondFinanciers},
            {title: 'Sugar-Free Lemon Blueberry Curd Tart', link: '/', image: LemonBlueberryTart},
        ],
    },
    {
        title: 'Specialty Desserts',
        children: [
            {title: 'Crème Brûlée Donuts', link: '/', image: CremeBruleeDonuts},
            {title: 'Matcha White Chocolate Éclairs', link: '/', image: MatchaWhiteChocolateEclairs},
            {
                title: 'Mini Indulgences',
                children: [
                    {title: 'Salted Caramel Macarons', link: '/', image: SaltedCaramelMacarons},
                    {title: 'Pistachio Rose Madeleines', link: '/', image: PistachioRoseMadeleines},
                ],
            },
        ],
    },
]
