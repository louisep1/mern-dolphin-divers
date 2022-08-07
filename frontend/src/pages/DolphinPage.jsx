import freedive1 from '../assets/imgs/freedive1.jpg'
import dolphins5 from '../assets/imgs/dolphins5.jpeg'
import dolphins6 from '../assets/imgs/dolphins6.jpeg'

function DolphinPage() {
  return (
    <div>
      <div className='text-center text-2xl pb-6'>Swim with dolphins</div>
      <div className='grid grid-cols-3'>
        <img src={dolphins5} alt="freediving" className='mx-auto' />
        <img src={freedive1} alt="freediving" className='mx-auto' />
        <img src={dolphins6} alt="freediving" className='mx-auto' />
      </div>

      <div className='grid gap-16'>
        <div>
          <p className='mt-8 mb-2 font-bold grid'>Day outline</p>
          <div className='grid grid-cols-3 gap-8'>
            <div>
              <p>~ 5:00 am</p>
              <p>(Pre-start to the schedule)</p>
            </div>
            <p className='col-span-2'> For those travelling and arriving on the day by large passenger ship from Tokyo, the boat arrives at around 5am. From here, arrangements are made with your chosen accomodation. Rest until starting time.</p>

            <p>Morning / AM</p>
            <div className='col-span-2'>
              <p>The day typically starts with freedive training/practice from the morning.</p>
              <p>This is to enable your safety and smooth diving, which increases your chances of swimming in close range of dolphins (if you cannot freedive confidently, they will be less likely to want to swim near you)</p>
            </div>

            <p>Afternoon / PM</p>
            <div className='col-span-2'>
              <p>Then from days where we train in the mornings, the actually boat trip to near Mikurajima is in the afternoon.</p>
              <p>Of course, for those days where training is not held in the morning (e.g. repeat dive trips), we can also accomodate trips in the morning too.</p>
            </div>
            <p className='col-span-3'>*** All trips are subject to weather conditions</p>
          </div>
        </div>


        <div>
          <p className='font-bold'>Dolphin swim costs</p>
          <p>Dolphin swim training</p>
          <p>￥ 4,500</p>
          <p>Dolphin swim watching</p>
          <p>￥ 15,400</p>
          <p>Dolphin Swim Repeat Discount</p>
          <p>￥ 13,000</p>
          <p>*** Those who have take a dolphin training course before may not be required to do so again, but of course you are welcome to do so to refresh your knowledge, or if you are not feeling so confident about your skills.</p>
        </div>

        <div className="grid grid-cols-2 lg:w-10/12">
          <p className='col-span-2 font-bold'>Rental equipment prices</p>
          <p>Full rental for dolphin swim<br />(wet suit, mask, snorkel, fins, boots)</p>
          <p className='pt-6 pb-4'>¥ 4,400</p>
          <p>Wetsuits</p>
          <p className='pb-4'>¥ 2,000</p>
          <p>Mask / fin</p>
          <p className='pb-4'>900 yen each</p>
          <p>Snorkel / boots</p>
          <p>¥ 500 each</p>
          <p className='col-span-2 my-6'>*** Prices are discounted by 50% from the 2nd day, rounded down to the nearest 10 yen</p>
        </div>

      </div>

    </div>
  )
}

export default DolphinPage