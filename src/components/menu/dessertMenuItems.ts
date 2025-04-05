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
} from "../../assets/images"
import {MenuItem} from "../../utils/types.ts";

export const dessertMenuItems: MenuItem[] = [
    {
        title: 'Morning Delights',
        children: [
            {title: 'Berry Chia Pudding', image: BerryChiaPudding},
        ],
    },
    {
        title: 'Buttery Croissants',
        children: [
            {title: 'Golden Honey-Butter', image: GoldenHoneyButter},
            {title: 'Crunchy Almond Frangipane', image: CrunchyAlmondFrangipane},
            {title: 'Dark Chocolate Swirl', image: DarkChocolateSwirl},
            {title: 'Raspberry Cream Cheese', image: RaspberryCreamCheese},
            {title: 'Salted Caramel Pecan', image: SaltedCaramelPecan},
        ],
    },
    {
        title: 'Decadent Cakes',
        children: [
            {
                title: 'Chocolate Heaven',
                children: [
                    {title: 'Molten Lava Cake', image: MoltenLavaCake},
                    {title: 'Triple-Layer Fudge', image: TripleLayerFudge},
                    {title: 'Chocolate-Raspberry Truffle', image: ChocolateRaspberryTruffle},
                    {title: 'Chocolate Avocado Mousse Tart with Figs', image: ChocolateAvocadoMousseFigs},
                ],
            },
            {
                title: 'Fruit Fantasies',
                children: [
                    {title: 'Strawberry Shortcake', image: StrawberryShortcake},
                    {title: 'Mango Passion fruit Mousse', image: MangoPassionfruitMousse},
                ],
            },
            {title: 'Red Velvet Cheesecake Swirl', image: RedVelvetCheesecakeSwirl},
        ],
    },
    {
        title: 'French Patisserie',
        children: [
            {title: 'Paris-Brest (Hazelnut Praline)', image: ParisBrestHazelnutPraline},
            {title: 'Tarte au Citron Meringuée', image: TarteauCitronMeringuee},
            {title: 'Opera Cake (Layers of Coffee & Ganache)', image: OperaCake},
            {title: 'Kouign-Amann (Caramelized Butter Cake)', image: KouignAmann},
        ],
    },
    {
        title: 'Cookie Collection',
        children: [
            {
                title: 'Gourmet Cookies',
                children: [
                    {title: 'Sea Salt Dark Chocolate Chunk', image: SeaSaltDarkChocolateChunk},
                    {title: 'White Chocolate & Cranberry', image: WhiteChocolateCranberry},
                    {title: 'Lavender Shortbread', image: LavenderShortbread},
                ],
            },
            {
                title: 'European Classics',
                children: [
                    {title: 'Viennese Whirls', image: VienneseWhirls},
                    {title: 'Italian Cantucci', image: ItalianCantucci},
                ],
            },
        ],
    },
    {
        title: 'Seasonal Sensations',
        children: [
            {title: 'Pumpkin Spice Cake', image: PumpkinSpiceCake},
            {title: 'Eggnog Chiffon Pie', image: EggnogChiffonPie},
            {title: 'Summer Berry Pavlova', image: SummerBerryPavlova},
        ],
    },
    {
        title: 'Guilt-Free Pleasures',
        children: [
            {title: 'Vegan Chocolate Avocado Mousse Cake', image: VeganChocolateAvocadoMousseCake},
            {title: 'Gluten-Free Almond Financiers', image: AlmondFinanciers},
            {title: 'Sugar-Free Lemon Blueberry Curd Tart', image: LemonBlueberryTart},
        ],
    },
    {
        title: 'Specialty Desserts',
        children: [
            {title: 'Crème Brûlée Donuts', image: CremeBruleeDonuts},
            {title: 'Matcha White Chocolate Éclairs', image: MatchaWhiteChocolateEclairs},
            {
                title: 'Mini Indulgences',
                children: [
                    {title: 'Salted Caramel Macarons', image: SaltedCaramelMacarons},
                    {title: 'Pistachio Rose Madeleines', image: PistachioRoseMadeleines},
                ],
            },
        ],
    },
]
