"use client";

import { useState } from 'react';
import { ShoppingBag, Heart, Eye } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Minimalist Print Collection",
    price: "$45.00",
    image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Prints"
  },
  {
    id: 2,
    name: "Creative Workbook",
    price: "$28.00",
    image: "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Books"
  },
  {
    id: 3,
    name: "Design Templates Pack",
    price: "$65.00",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Digital"
  },
  {
    id: 4,
    name: "Brand Identity Kit",
    price: "$120.00",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Digital"
  },
  {
    id: 5,
    name: "Photography Presets",
    price: "$35.00",
    image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Digital"
  },
  {
    id: 6,
    name: "Inspirational Poster Set",
    price: "$55.00",
    image: "https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Prints"
  }
];

const categories = ["All", "Prints", "Books", "Digital"];

export default function Store() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-6xl font-light text-black tracking-wide">
          Creative Store
        </h1>
        <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover curated design resources, templates, and creative tools 
          to enhance your projects and inspire your work.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                selectedCategory === category 
                  ? 'text-black border-b-2 border-black pb-1' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                  title="Add to Favorites"
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors duration-300 ${
                      favorites.includes(product.id) 
                        ? 'text-red-500 fill-current' 
                        : 'text-gray-600'
                    }`} 
                  />
                </button>
                
                <button
                  className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                  title="Quick View"
                >
                  <Eye className="w-5 h-5 text-gray-600" />
                </button>
                
                <button
                  className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                  title="Add to Cart"
                >
                  <ShoppingBag className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  {product.category}
                </span>
                <span className="text-sm font-medium text-black">
                  {product.price}
                </span>
              </div>
              
              <h3 className="text-lg font-light text-black group-hover:text-gray-600 transition-colors duration-300">
                {product.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
        <h2 className="text-2xl lg:text-3xl font-light text-black mb-4">
          Stay Updated
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Get notified about new products, exclusive discounts, and creative resources.
          Join our community of creatives.
        </p>
        
        <div className="max-w-md mx-auto flex space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-300 whitespace-nowrap">
            Subscribe
          </button>
        </div>
        
        <p className="text-xs text-gray-500 mt-4">
          No spam, unsubscribe at any time.
        </p>
      </div>

      {/* Featured Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        <div className="text-center space-y-4">
          <div className="w-full h-32 bg-gray-100 rounded flex items-center justify-center">
            <ShoppingBag className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-light text-black">Digital Downloads</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Instant access to high-quality design templates and resources.
          </p>
        </div>
        
        <div className="text-center space-y-4">
          <div className="w-full h-32 bg-gray-100 rounded flex items-center justify-center">
            <Heart className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-light text-black">Curated Collection</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Handpicked items that inspire creativity and enhance your workflow.
          </p>
        </div>
        
        <div className="text-center space-y-4">
          <div className="w-full h-32 bg-gray-100 rounded flex items-center justify-center">
            <Eye className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-light text-black">Commercial License</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Use our products in your commercial projects with full licensing.
          </p>
        </div>
      </div>
    </div>
  );
}