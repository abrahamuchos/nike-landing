/**
 *
 * @callback changeImageCb
 * @param {Object} state - Big shoe image
 */

/**
 *
 * @param {{thumbnail: {}, bigShoe: {}}} img
 * @param {changeImageCb} changeBigShoeImage
 * @param {Object} bigShoeImg
 * @return {JSX.Element}
 * @constructor
 */
export default function ShoeCard({img, changeBigShoeImage, bigShoeImg}) {

  const handleClick = () => {
    if(bigShoeImg !== img.bigShoe){
      changeBigShoeImage(img.bigShoe)
    }
  }

  return (
    <div className={`border-2 rounded-xl cursor-pointer ${bigShoeImg === img.bigShoe ? 'border-coral-red' : 'border-transparent'}
      max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover rounded-xl
        sm:w-40 sm:h-40
        max-sm:p-4'
      >
        <img
          src={img.thumbnail}
          alt="show-hero"
          width={127}
          height={103}
          className='object-contain'
        />
      </div>
    </div>
  );
}