import React from 'react';

function Recipe() {
  return (
    <div className='col-span-10'>
      <div className='flex justify-around w-full gap-4'>
        <div>
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qw9XK13CoQ4?si=4zacQTSFx57wnDHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className='my-4 p-4 shadow-lg'>
            <h2 className='text-xl font-semibold'>Fluffy Pancakes</h2>
            <p>
              Yummy pancakes for a great morning 🥞
            </p>
          </div>

          <div className='my-4 p-4 shadow-lg'>
            <h2 className='text-xl font-semibold'>Ingredients</h2>
            <ul className='list-disc list-inside flex flex-col gap-2'>
              <li>1 cup self-raising flour</li>
              <li>1/4 teaspoon salt</li>
              <li>1 1/2 cups milk</li>
              <li>3 tablespoons white sugar</li>
              <li>1 lemon roughly crushed</li>
              <li>1 egg</li>
              <li>3 tablespoons cardamoms</li> 
            </ul>
          </div>
        </div>

        <div className=''>
          <div className='flex flex-col justify-center  gap-4'>
            <button className='text-white bg-green-500 hover:bg-green-400 font-bold py-2 px-4 rounded'>Save Recipe</button>
            <button className='text-white bg-green-500 hover:bg-green-400 font-bold py-2 px-4 rounded'> Place Your Order</button>
            <button className='text-white bg-green-500 hover:bg-green-400 font-bold py-2 px-4 rounded'>Share</button>
          </div>
        </div>
      </div>
		</div>
  )
};

export default Recipe;