export type MenuItem = {
    title: string
    link?: string
    children?: MenuItem[]
}

export const menuItems: MenuItem[] = [
    {
        title: 'Morning Delights',
        link: '/',
    },
    {
        title: 'Buttery Croissants',
        children: [
            {title: 'Golden Honey-Butter', link: '/'},
            {title: 'Crunchy Almond Frangipane', link: '/'},
            {title: 'Dark Chocolate Swirl', link: '/'},
            {title: 'Raspberry Cream Cheese', link: '/'},
            {title: 'Salted Caramel Pecan', link: '/'},
        ],
    },
    {
        title: 'Decadent Cakes',
        children: [
            {
                title: 'Chocolate Heaven',
                children: [
                    {title: 'Molten Lava Cake', link: '/'},
                    {title: 'Triple-Layer Fudge', link: '/'},
                    {title: 'Chocolate-Raspberry Truffle', link: '/'},
                ],
            },
            {
                title: 'Fruit Fantasies',
                children: [
                    {title: 'Strawberry Shortcake', link: '/'},
                    {title: 'Mango Passion fruit Mousse', link: '/'},
                ],
            },
            {title: 'Red Velvet Cheesecake Swirl', link: '/'},
        ],
    },
    {
        title: 'French Patisserie',
        children: [
            {title: 'Paris-Brest (Hazelnut Praline)', link: '/'},
            {title: 'Tarte au Citron Meringuée', link: '/'},
            {title: 'Opera Cake (Layers of Coffee & Ganache)', link: '/'},
            {title: 'Kouign-Amann (Caramelized Butter Cake)', link: '/'},
        ],
    },
    {
        title: 'Cookie Collection',
        children: [
            {
                title: 'Gourmet Cookies',
                children: [
                    {title: 'Sea Salt Dark Chocolate Chunk', link: '/'},
                    {title: 'White Chocolate & Cranberry', link: '/'},
                    {title: 'Lavender Shortbread', link: '/'},
                ],
            },
            {
                title: 'European Classics',
                children: [
                    {title: 'Viennese Whirls', link: '/'},
                    {title: 'Italian Cantucci', link: '/'},
                ],
            },
        ],
    },
    {
        title: 'Seasonal Sensations',
        children: [
            {title: 'Pumpkin Spice Cake', link: '/'},
            {title: 'Eggnog Chiffon Pie', link: '/'},
            {title: 'Summer Berry Pavlova', link: '/'},
        ],
    },
    {
        title: 'Guilt-Free Pleasures',
        children: [
            {title: 'Vegan Chocolate Avocado Mousse Cake', link: '/'},
            {title: 'Gluten-Free Almond Financiers', link: '/'},
            {title: 'Sugar-Free Lemon Blueberry Tart', link: '/'},
        ],
    },
    {
        title: 'Specialty Desserts',
        children: [
            {title: 'Crème Brûlée Donuts', link: '/'},
            {title: 'Matcha White Chocolate Éclairs', link: '/'},
            {
                title: 'Mini Indulgences',
                children: [
                    {title: 'Salted Caramel Macarons', link: '/'},
                    {title: 'Pistachio Rose Madeleines', link: '/'},
                ],
            },
        ],
    },
]
