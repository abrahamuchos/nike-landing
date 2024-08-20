/**
 *
 * @param {Object} imgURL
 * @param {string} subtext
 * @param {string} label
 * @return {JSX.Element}
 * @constructor
 */
export default function ServiceCard({ imgURL, subtext, label}) {


  return (
    <div className='flex-1 w-full rounded-[20px] shadow-3xl px-10 py-16
      sm:min-w-[350px]'
    >
      <div className='flex justify-center items-center rounded-full bg-coral-red w-11 h-11'>
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl font-bold leading-normal'>{label}</h3>
      <p className='mt-3 break-words text-lg font-montserrat leading-normal text-slate-gray'>{subtext}</p>
    </div>
  );
}