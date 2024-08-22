import Button from "../components/Button.jsx";

export default function Subscribe() {


  return (
    <section id='contact-us' className="max-container flex justify-between items-center gap-10 max-lg:flex-col">
      <h3 className='text-4xl leading-[68px] font-palanquin font-bold lg:max-w-md'>
        Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter
      </h3>

      <div className='flex items-center w-full rounded-full gap-5 p-2.5
        sm:border sm:border-slate-gray
        max-sm:flex-col
        lg:max-w-[40%]'
      >
        <input type="text" placeholder='subcribe@mail.com' className='input'/>
        <div className="flex  items-center
        max-sm:justify-end max-sm:w-full"
        >

          <Button label='Sign Up' className='w-full'/>
        </div>
      </div>


    </section>
  );
}