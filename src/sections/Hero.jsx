import { useState } from "react";
import Button from "../components/Button.jsx";
import ShoeCard from "../components/ShoeCard.jsx";
import { shoes, statistics } from "../constants/index.js";

import { arrowRight } from "../assets/icons/index.js";
// import {bigShoe1} from "../assets/images"

export default function Hero() {
  const [bigShowImg, setBigShowImg] = useState(/**@typedef {Object} bigShowImg **/ shoes[0].bigShoe )

  return (
    <section id="home" className='w-full flex flex-col justify-center min-h-screen gap-10
      xl:flex-row'
    >
      {/*Left Hero*/}
      <div className='relative flex flex-col justify-center items-start w-full pt-28
        xl:w-2/5
        max-xl:padding-x'
      >
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer Collection
        </p>
        <h1 className='mt-10 font-palanquin font-bold text-8xl
          max-sm:text-[72px] max-sm:leading-[82px]'
        >
          <span className='relative z-10 pr-10
            xl:bg-white xl:whitespace-nowrap'
          >
            The New Arrival
          </span>
          <br/>
          <span className='text-coral-red inline-block mt-3 mr-4'>Nike</span>
          Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14
          sm:max-w-sm'
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label='Shop Now' srcIcon={arrowRight}/>

        <div className='flex justify-start items-start w-full mt-10 gap-6
          md:flex-wrap md:gap-16 md:mt-20'
        >
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className='text-4xl font-palanquin font-bold max-sm:text-[40px]'>{statistic.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{statistic.label}</p>
            </div>
          ))
          }
        </div>
      </div>
      {/*End Left Hero*/}

      {/*Right Hero*/}
      <div className='relative flex flex-1 justify-center items-center bg-primary bg-hero bg-cover bg-center
        max-xl:py-40
        xl:min-h-screen'
      >
        <img
          src={bigShowImg}
          alt="hero-shoes"
          width={610}
          height={500}
          className='object-contain relative'
        />

        <div className='flex gap-4 absolute -bottom-[5%]
          max-sm:px-6
          sm:gap-6 sm:left-[10%]'
        >
          {shoes.map((shoe, i)=>(
            <div key={i}>
              <ShoeCard
                img={shoe}
                changeBigShoeImage={setBigShowImg}
                bigShoeImg={bigShowImg}
              />
            </div>
          ))}
        </div>
      </div>
      {/*End Right Hero*/}

    </section>
  );
}