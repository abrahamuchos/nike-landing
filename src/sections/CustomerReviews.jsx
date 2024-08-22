import ReviewCard from "../components/ReviewCard.jsx";
import { reviews } from "../constants";

export default function CustomerReviews() {


  return (
    <section className='max-container '>
        <h2 className='font-palanquin font-bold text-4xl text-center capitalize'>
          What Our <span className="text-coral-red">Customers</span> Say?
        </h2>
        <p className='info-text mt-6 mx-auto max-w-lg text-center'>
          Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center gap-14
        max-lg:flex-col'
      >
        {reviews.map(review => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>


    </section>
  );
}