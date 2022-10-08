import { useState } from 'react'
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri'
import dolphins2 from '../assets/imgs/dolphins1.jpg'
import dolphins3 from '../assets/imgs/dolphins2.jpg'
import dolphins1 from '../assets/imgs/dolphins3.jpg'
import hiking1 from '../assets/imgs/hiking1.jpg'
import hiking2 from '../assets/imgs/hiking2.jpg'
import map from '../assets/imgs/miyakejima-map.jpg'


function Home() {
  const [photo, setPhoto] = useState(1)

  const next = () => {
    if (photo === 1 || photo === 2) {
      setPhoto(prevState => prevState + 1)
    }
    if (photo === 3) {
      setPhoto(1)
    }
  }

  const prev = () => {
    if (photo === 2 || photo === 3) {
      setPhoto(prevState => prevState - 1)
    }
    if (photo === 1) {
      setPhoto(3)
    }
  }

  return (
    <div className='relative pb-4'>
      <div className='pt-1 pb-6 md:text-2xl text-center'>Enjoy the experience of a lifetime. Dive with real, wild dolphins.</div>
      <div className="w-full relative" id='imageSlider'>
        <button className='absolute top-1/3 xl:bottom-2/4 text-4xl' onClick={prev}><RiArrowDropLeftLine /></button>
        <button className='absolute top-1/3 xl:bottom-2/4 right-0 text-4xl' onClick={next}><RiArrowDropRightLine /></button>
        <div className='max-w-2xl mx-auto pb-4'>
          <img src={dolphins1} alt="dolphins" id='1' className={`${photo !== 1 && 'hidden'} rounded-lg`} />
          <img src={dolphins2} alt="dolphins" id='2' className={`${photo !== 2 && 'hidden'} rounded-lg`} />
          <img src={dolphins3} alt="dolphins" id='3' className={`${photo !== 3 && 'hidden'} rounded-lg`} />
        </div>
      </div>

      <div className='pt-4'>

        <div className="card w-11/12 m-auto bg-info text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Miyakejima is but a short boat ride away from diving with these naturally free dolphins.</h2>
            <p>With encounter rates highest in July through September, this is a once in a lifetime experience that any ocean lover shouldn't miss.</p>
          </div>
        </div>

        <div className="card w-11/12 mt-6 mx-auto bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <p>Here at Dolphin Dive, we specialize in trips to go and swim with the wild dolphins (including training), as well as scuba diving off the coast of Miyakejima (both beach and boat). If you have an questions or want to make a reservation, please get in touch. Whilst our services do not include the use of stay at a guest house, we are able to connect you with our partner services.</p>
          </div>
        </div>




        <p className="pt-16 pb-4 text-center md:text-xl">A small history of the island</p>

        <div className="grid grid-cols-2 gap-6">
          <img src={map} alt="map" />

          <p className='py-8'>Technically part of Tokyo, the Izu Islands, including Miyakejima are worlds apart from the Tokyo we know. Miyakejima is home to Mt Oyama, an active volcano which last erupted in the summer of 2000. Whilst it's currently safe to visit, hiking around the area, you'll see the rugged landscape of the remains of the volcanic rock.</p>
          <img src={hiking2} alt="hiking" className='order-last' />

          <p className='py-8'>Aside from it's unique marine life, Miyakejima is also renowned for its hiking and indigenous wildlife.</p>

          <img src={hiking1} alt="hiking" />
        </div>

      </div>


    </div>
  )
}

export default Home