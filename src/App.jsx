import {
  Nav,
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer
} from './sections/index.js'

import './App.css'

function App() {

  return (
    <main className="relative">
      <Nav/>
      <section className="padding-b
        xl:padding-1
        wide:padding-r "
      >
        <Hero/>
      </section>

      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffers/>
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews/>
      </section>
      <section className='padding-x py-16 w-full
        sm:py-32'
      >
        <Subscribe/>
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>

    </main>
  )
}

export default App
