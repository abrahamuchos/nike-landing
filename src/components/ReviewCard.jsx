import starIcon from "../assets/icons/star.svg";

/**
 *
 * @param {Object} imgURL
 * @param {string} customerName
 * @param {string} rating
 * @param {string} feedback
 * @return {JSX.Element}
 * @constructor
 */
export default function ReviewCard({imgURL, customerName, rating, feedback}) {

  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={imgURL} alt={customerName} width={120} height={120} className='rounded-full object-cover'/>

      <p className='info-text mt-4 max-w-sm text-center'>
        {feedback}
      </p>

      <div className='flex justify-center items-center gap-2.5 mt-3'>
        <img src={starIcon} alt="start-icon" width={24} height={24} className='object-contain m-0'/>
        <p className='text-xl font-montserrat text-slate-gray '>
          ({rating})
        </p>
      </div>

      <h3 className='font-palanquin font-bold text-3xl leading-normal mt-1'>{customerName}</h3>

    </div>
  );
}