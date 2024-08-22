import {navLinks} from '../constants/index.js'

import imagotype from '../assets/images/header-logo.svg';
import {hamburger} from '../assets/icons/'

export default function Nav() {


  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={imagotype} alt="nike-imagotype" width={130} height={29}/>
        </a>
        {/*Links*/}
        <ul className='flex-1 flex justify-center items-center gap-16
          max-lg:hidden'
        >
          {navLinks.map((nav) => (
            <li key={nav.label}>
              <a href={nav.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {nav.label}
              </a>
            </li>
          ))}
        </ul>
        {/*End Links*/}
        <div className='hidden
          max-lg:block'
        >
          <img src={hamburger} alt="hamburger-icon" width={25} height={25}/>
        </div>
      </nav>
    </header>
  );
}