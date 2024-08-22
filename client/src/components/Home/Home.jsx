import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Header Section */}
      <header className="w-full py-6 bg-green-600 text-white">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">Bobo's Recipes</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/recipes" className="hover:underline">Recipes</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-cover bg-center h-96" style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}>
        <div className="w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h2 className="text-4xl font-bold">Discover Delicious Recipes</h2>
          <p className="text-lg mt-4">Explore, Cook, and Share Your Favorite Dishes!</p>
          <a href="/recipes" className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500">Browse Recipes</a>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="container mx-auto my-12 px-4">
        <h3 className="text-2xl font-bold mb-6">Featured Recipes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Recipe Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://i.pinimg.com/474x/90/b7/52/90b75225875c22e1693138935e00cc77.jpg" alt="Recipe" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-bold">Recipe Name</h4>
              <p className="mt-2 text-gray-600">Short description of the recipe.</p>
              <a href="/recipe/1" className="mt-4 inline-block text-green-600 hover:underline">View Recipe</a>
            </div>
          </div>
          {/* Repeat Recipe Card for other recipes */}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              <img src="https://i.pinimg.com/564x/87/08/a8/8708a83b2cc9b314c040f1e8f21a8329.jpg" alt="Step 1" className="w-16 mx-auto mb-4" />
              <h4 className="text-xl font-bold">Step 1: Browse Recipes</h4>
              <p className="mt-2 text-gray-600">Explore a wide variety of recipes from different cuisines and dietary preferences.</p>
            </div>
            <div className="p-4">
              <img src="https://i.pinimg.com/474x/a0/04/3e/a0043e49da863a0d0e75e72194f7942d.jpg" alt="Step 2" className="w-16 mx-auto mb-4" />
              <h4 className="text-xl font-bold">Step 2: Cook and Enjoy</h4>
              <p className="mt-2 text-gray-600">Follow easy-to-understand instructions to prepare delicious meals at home.</p>
            </div>
            <div className="p-4">
              <img src="https://i.pinimg.com/474x/79/9c/25/799c25ee0f46f6dd328ebb9ea8396bd4.jpg" alt="Step 3" className="w-16 mx-auto mb-4" />
              <h4 className="text-xl font-bold">Step 3: Share Your Experience</h4>
              <p className="mt-2 text-gray-600">Share your culinary creations with the community and inspire others.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Recipes Section */}
      <section className="container mx-auto my-12 px-4">
        <h3 className="text-2xl font-bold mb-6">Latest Recipes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recipe Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://i.pinimg.com/474x/55/fe/d0/55fed072ead198753045ca62b83b0baa.jpg" alt="Latest Recipe" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-bold">Latest Recipe Name</h4>
              <p className="mt-2 text-gray-600">A brief description of the latest recipe.</p>
              <a href="/recipe/2" className="mt-4 inline-block text-green-600 hover:underline">View Recipe</a>
            </div>
          </div>
          {/* Repeat for more latest recipes */}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">Recipe Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-4">
              <img src="https://i.pinimg.com/474x/76/88/f1/7688f1eb07ea5899adda0d5cf5cd6a22.jpg" alt="Category 1" className="w-full h-48 object-cover mb-4" />
              <h4 className="text-xl font-bold">Category 1</h4>
            </div>
            <div className="p-4">
              <img src="https://i.pinimg.com/474x/ba/ef/0e/baef0e7184cf12a082fbad862349774f.jpg" alt="Category 2" className="w-full h-48 object-cover mb-4" />
              <h4 className="text-xl font-bold">Category 2</h4>
            </div>
            <div className="p-4">
              <img src="https://i.pinimg.com/474x/30/bc/71/30bc71c9271956a93857254e90e49bb1.jpg" alt="Category 3" className="w-full h-48 object-cover mb-4" />
              <h4 className="text-xl font-bold">Category 3</h4>
            </div>
            <div className="p-4">
              <img src="https://i.pinimg.com/474x/87/3b/90/873b900a1f0c98200d4e6d0c0775322a.jpg" alt="Category 4" className="w-full h-48 object-cover mb-4" />
              <h4 className="text-xl font-bold">Category 4</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto my-12 px-4">
        <h3 className="text-2xl font-bold mb-6">What Our Users Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-gray-600">"Bobo's Recipes has completely changed the way I cook at home. The recipes are so easy to follow and the results are always delicious!"</p>
            <p className="mt-4 text-green-600 font-bold">- Jane Doe</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-gray-600">"I love how I can find recipes that suit my dietary needs. Bobo's Recipes is a lifesaver!"</p>
            <p className="mt-4 text-green-600 font-bold">- John Smith</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-600 py-12 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
        <p className="text-lg mb-6">Sign up to receive the latest recipes and cooking tips straight to your inbox!</p>
        <a href="/signup" className="px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100">Sign Up Now</a>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Bobo's Recipes. All rights reserved.</p>
          <p className="mt-2">Follow us on 
            <a href="#" className="ml-2 text-green-400 hover:underline">Facebook</a>, 
            <a href="#" className="ml-2 text-green-400 hover:underline">Instagram</a>, and 
            <a href="#" className="ml-2 text-green-400 hover:underline">Twitter</a>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;