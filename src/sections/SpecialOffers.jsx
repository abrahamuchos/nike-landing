import Button from "../components/Button.jsx";
import { offer } from "../assets/images"

import { cheveronRight } from '../assets/icons'

export default function SpecialOffers() {


  return (
    <section className="max-container flex justify-between items-center gap-16
      max-sm:mt-12
      max-lg:flex-col"
    >

      <div className="flex-1 order-2
        lg:order-1"
      >
        <img src={offer} alt="offer-shoes" width={773} height={687} className='object-contain w-full'/>
      </div>

      <div className='flex-1 flex flex-col order-1
        lg:order-2'
      >
        <h2 className='text-4xl font-palanquin font-bold'><span className='text-coral-red'>Special</span> Offer</h2>

        <p className="info-text mt-4">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to
          incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6">
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest
          expectations. Your journey with us is nothing short of exceptional.
        </p>

        <div className='mt-10 flex flex-wrap gap-4'>
          <Button label='Shop now' srcIcon={cheveronRight}/>

          <Button label='Learn more' variant='secondary'/>
        </div>
      </div>


    </section>
  );
}