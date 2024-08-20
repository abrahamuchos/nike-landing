import Button from "../components/Button.jsx";

import { shoe8 } from "../assets/images";

export default function SuperQuality() {


  return (
    <section id="about-us" className='max-container flex justify-between items-center gap-10 w-full
        max-lg:flex-col'>

      {/*Left Info*/}
      <div className="flex-1 flex flex-col">
        <h2 className='font-palanquin font-bold text-4xl capitalize'>
          We Provide You <span className='text-coral-red'>Super Quality</span> Shoes
        </h2>
        <p className='info-text mt-4 lg:max-w-lg'>
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your
          experience,
          providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label='View details'/>
        </div>
      </div>
      {/*End Left Info*/}

      {/*Right Info*/}
      <div className="flex-1 flex justify-center items-center w-full">
        <img
          src={shoe8}
          alt="purple-shoes"
          className='object-contain'
          width={570}
          height={522}
        />
      </div>
      {/*End Right Info*/}

    </section>
  )
    ;
}