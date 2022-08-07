import training1 from '../assets/imgs/training1.jpg'

function PricePage() {
  return (
    <div>
      <div className='text-2xl text-center'>Price List</div>

      <div className='grid sm:grid-cols-2 lg:w-7/12 mt-16'>
        <div>
          <p className='font-bold'>Dolphin swim</p>
          <p>Dolphin swim training</p>
          <p>￥ 4,500</p>
          <p>Dolphin swim watching</p>
          <p>￥ 15,400</p>
          <p>Dolphin Swim Repeat Discount</p>
          <p>￥ 13,000</p>
        </div>
        <img src={training1} className='pt-4 sm:pt-0' />
      </div>

      <p className='text-center mt-16 m-8 font-bold'>Fun diving </p>
      <div className="grid grid-cols-2 mb-8 text-center gap-4 text-sm md:text-md">
        <div className='grid grid-cols-2'>
          <p>1 beach</p>
          <p>¥ 6,500</p>
          <p>2 beach</p>
          <p>¥ 11,500 *</p>
          <p>3 beaches</p>
          <p>¥ 17,500 *</p>
        </div>
        <div className='grid grid-cols-2'>
          <p>1 boat</p>
          <p>¥ 10,000</p>
          <p>2 boats</p>
          <p>¥ 17,500 *</p>
        </div>
        <div className='text-center col-span-2'>
          <p>Night diving	¥ 8,000</p>
          <p>(* In the case of 2 or 3 dives, a lunch box will be attached.)</p>
        </div>
      </div>

      <p className='text-center'>Experience diving ￥ 14,000</p>


      <p className='mt-24 mb-2 font-bold'>Equipment rental</p>
      <div className="grid grid-cols-2">
        <div className=''>
          <p>Full rental for dolphin swim<br />(wet suit, mask, snorkel, fins, boots)</p>
          <p className='pb-4'>¥ 4,400</p>
          <p>Wetsuits</p>
          <p className='pb-4'>¥ 2,000</p>
          <p>Mask / fin</p>
          <p className='pb-4'>900 yen each</p>
          <p>Snorkel / boots</p>
          <p>¥ 500 each</p>
        </div>
        <div className='pt-4'>
          <p>Full rental for diving</p>
          <p className='pb-4'>¥ 6,000</p>
          <p>BCD / Regulator</p>
          <p className='pb-4'>¥ 1,500 each</p>
          <p>Diving computer / underwater light</p>
          <p className='pb-4'>1,000 yen each</p>
          <p>Underwater camera (TG4)</p>
          <p>¥ 2,000</p>
        </div>
        <p className='col-span-2 text-center my-6'>(half price on the 2nd day, rounded down to the nearest 10 yen)</p>
      </div>

    </div>
  )
}

export default PricePage