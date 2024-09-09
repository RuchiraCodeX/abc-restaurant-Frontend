import React from 'react';

const Menu = () => {
    const menuItems = [
        {
            id: 1,
            name: 'Spaghetti Carbonara',
            description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It\'s simple, yet incredibly rich and satisfying.',
            price: 12.99,
            imageUrl: 'https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-snippet.jpg',
        },
        {
            id: 2,
            name: 'Margherita Pizza',
            description: 'A traditional pizza originating from Naples, topped with fresh tomatoes, mozzarella cheese, and basil leaves. It\'s the epitome of simple, yet delicious, Italian cuisine.',
            price: 10.99,
            imageUrl: 'https://www.foodandwine.com/thmb/7BpSJWDh1s-2M2ooRPHoy07apq4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mozzarella-pizza-margherita-FT-RECIPE0621-11fa41ceb1a5465d9036a23da87dd3d4.jpg',
        },
        {
            id: 3,
            name: 'Caesar Salad',
            description: 'Crisp romaine lettuce tossed in a creamy Caesar dressing, topped with crunchy croutons and shaved parmesan. A refreshing and classic salad perfect as a starter or side dish.',
            price: 8.99,
            imageUrl: 'https://lindseyeatsla.com/wp-content/uploads/2021/10/Lindseyeats_Classic_Caesar_Salad-2-500x500.jpg',
        },
        
    ];

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">Our Menu</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map(item => (
                    <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold">{item.name}</h2>
                            <p className="text-gray-700 mt-2 text-sm">{item.description}</p>
                            <p className="text-gray-900 font-bold mt-4">Rs{item.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
