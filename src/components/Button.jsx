/**
 *
 * @param {string} label
 * @param {Object|string|null} srcIcon
 * @param {string} [variant=primary] - Variant can be "primary" or "secondary"
 * @return {JSX.Element}
 * @constructor
 */
export default function Button({label = 'Click Me', srcIcon, variant = 'primary'}) {

  const buttonStyles = {
    primary: 'bg-coral-red border-coral-red text-white',
    secondary: 'bg-white border-slate-gray text-slate-gray'
  }

  return (
    <button className={`flex justify-center items-center px-7 py-4 gap-2 font-montserrat text-lg border
      rounded-full leading-none ${buttonStyles[variant] ?? buttonStyles['primary']}`}
    >
      {label}
      {srcIcon && <img src={srcIcon} alt="icon-button" className='ml-2 rounded-full w-5 h-5 bg-white'/>}
    </button>
  );
}