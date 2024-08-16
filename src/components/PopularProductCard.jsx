import starIcon from "../assets/icons/star.svg";

/**
 *
 * @param {Object} imgUrl
 * @param {string} name
 * @param {string} price
 * @param {string} star - Product star ranking (score)
 * @return {JSX.Element}
 * @constructor
 */
export default function PopularProductCard({imgURL, name, price, star}) {


  return (
    <div className='flex flex-col flex-1 w-full justify-start'>
      <img src={imgURL} alt={name}/>

      <div className='flex w-full justify-start gap-2.5 mt-8'>
        <img src={starIcon} alt="start-icon" width={24} height={24}/>
        <p className='text-xl font-montserrat leading-normal text-slate-gray'>
          ({star})
        </p>
      </div>

      <h1 className='text-2xl mt-2 leading-normal font-semibold font-palanquin'>
        {name}
      </h1>
      <p className='text-2xl mt-2 font-semibold text-coral-red leading-normal'>
        {price}
      </p>

    </div>
  );
}