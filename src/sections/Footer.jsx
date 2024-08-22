import { socialMedia, footerLinks } from "../constants/index.js";

import { footerLogo } from "../assets/images"
import { copyrightSign } from "../assets/icons"

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="max-container">
      {/*Logo and Map Site*/}
      <div className="flex flex-wrap justify-between items-start gap-20
        max-lg:flex-col"
      >
        <div className="flex flex-col justify-between items-start">
          <a href="#">
            <img src={footerLogo} alt="nike-logo" width={150} height={46}/>
          </a>
          <p className='text-base text-white-400 font-montserrat mt-6 leading-7 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get
            Rewards
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map(media => (
              <div key={media.alt}
                   className='w-[48px] h-[48px] rounded-full bg-white flex justify-center items-center'>
                <img src={media.src} alt="media.alt" width={24} height={24}/>
              </div>
            ))}
          </div>
        </div>

        <div className='flex-1 flex flex-wrap justify-between gap-20 lg:gap-10'>
          {footerLinks.map(footer => (
            <div key={footer.title}>
              <h4 className='mb-6 text-2xl font-montserrat font-semibold text-white-400'>{footer.title}</h4>
              {footer.links.map(link => (
                <ul key={link.name}>
                  <li className='mt-4 text-white font-montserrat hover:text-slate-gray'>
                    <a href={link.link}>
                      {link.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>

      </div>
      {/*End Logo and Map Site*/}

      {/*Copyright*/}
      <div className="flex justify-between items-center mt-24 font-montserrat text-white-400 max-md:flex-col">

        <div className="flex justify-center items-center gap-2.5">
          <img src={copyrightSign} alt="copyright-logo" width={15} height={15}/>
          <p>{`${year} Copyright. All rights reserved.`} </p>
        </div>

        <div>
          <a href="#" className='hover:text-slate-gray'>Terms & Conditions</a>
        </div>
      </div>
      {/* End Copyright*/}
    </footer>
  );
}