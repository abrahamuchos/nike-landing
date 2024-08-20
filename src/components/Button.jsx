/**
 *
 * @param {string} label
 * @param {Object|string|null} srcIcon
 * @return {JSX.Element}
 * @constructor
 */
export default function Button({label = 'Click Me', srcIcon}) {


  return (
    <button className='bg-coral-red flex justify-center items-center px-7 py-4 gap-2 font-montserrat text-white text-lg
      rounded-full leading-none border-coral-red'
    >
      {label}
      {srcIcon && <img src={srcIcon} alt="icon-button" className='ml-2 rounded-full w-5 h-5 bg-white'/>}
    </button>
  );
}