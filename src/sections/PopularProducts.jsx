import PopularProductCard from "../components/PopularProductCard.jsx";
import {products} from '../constants/index.js'

export default function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      {/*Title*/}
      <div className="flex flex-col justify-start gap-5">
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'>Popular</span> Products
        </h2>
        <p className='mt-2 font-montserrat text-slate-gray
          lg:max-w-lg'
        >
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design,
          and value.
        </p>
      </div>
      {/*End Title*/}

      {/*Shoes Cards*/}
      <div className='mt-16 gap-14 grid grid-cols-1
        sm:grid-cols-2 sm:gap-4
        lg:grid-cols-4'
      >
        {products.map((product)=> (
          <PopularProductCard key={product.name} {...product}/>
        ))}

      </div>
      {/*End Shoes Cards*/}
    </section>
  );
}