import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

function RecipeCategories() {
  return (
			<Carousel
				swipeable={true}
				draggable={false}
				responsive={responsive}
				showDots={true}
				ssr={true}
				infinite={true}
				autoPlaySpeed={200}
				keyBoardControl={true}
				transitionDuration={200}
				containerClass="carousel-container"
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
				className='transition-all rounded-lg m-2 h-44 z-0'
			>
				<div>
					<img className='w-36 h-36 object-cover rounded-lg' src="https://i.pinimg.com/474x/eb/cb/c6/ebcbc6aaa9deca9d6efc1efc93b66945.jpg" alt="NA" />
				</div>

				<NavLink to={"/recipes/fluffy_pancakes"}>
					<img className='w-36 h-36 object-cover rounded-lg' src="https://i.pinimg.com/564x/0c/47/f4/0c47f44dd1921a7f9ee0661f83b05c1c.jpg" alt="NA" />
				</NavLink>

				<div>
					<img className='w-36 h-36 object-cover rounded-lg' src="https://i.pinimg.com/474x/79/9c/25/799c25ee0f46f6dd328ebb9ea8396bd4.jpg" alt="NA" />
				</div>

				<div>
					<img className='w-36 h-36 object-cover rounded-lg' src="https://i.pinimg.com/474x/b2/23/ec/b223eccad7addafcebfd7f85eb4674af.jpg" alt="NA" />
				</div>

				<div>
					<img className='w-36 h-36 object-cover rounded-lg' src="https://i.pinimg.com/474x/66/69/aa/6669aa09bc7baabaf050f80c86416806.jpg" alt="NA" />
				</div>

				<div>
					<img className='w-36 h-36 object-cover rounded-lg' src="https://i.pinimg.com/474x/7b/b8/e6/7bb8e65c8f07e794beae57c1b2b1f315.jpg" alt="NA" />
				</div>

				<div>
					<img className='w-36 h-36 object-cover rounded-lg' src="https://i.pinimg.com/474x/10/9c/d2/109cd288493a97b4232a0ee7565660ba.jpg" alt="NA" />
				</div>

				<div>
					<img className='w-36 h-36 object-cover rounded-lg' src="https://i.pinimg.com/474x/91/40/8b/91408b73ba74750df808cbe0fd8d4f80.jpg" alt="NA" />
				</div>
				
			</Carousel>
  )
}

export default RecipeCategories;