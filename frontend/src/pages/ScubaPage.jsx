import divingMap from '../assets/imgs/divingMapEng.jpg'
import seaMap from '../assets/imgs/seaMap.png'
import diving from '../assets/imgs/diving.webp'
import okubo from '../assets/imgs/okubo.jpg'
import abeshita from '../assets/imgs/abeshita.jpg'
import turtle from '../assets/imgs/turtle.jpg'
import triggerfish from '../assets/imgs/triggerfish.jpg'

function ScubaPage() {
  return (
    <div>
      <div className='text-center text-2xl pb-4'>Scuba Diving</div>

      <div className='grid md:grid-cols-2 justify-center pb-8 pt-4 gap-6'>
        <img src={seaMap} alt="map of the sea" />
        <div>
          <p>The izu islands is known for it's diving. Here are some of the services we offer:</p>
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
        </div>
        <div className='pt-8'>
          <p>As shown on the map, Miyakejima is home to many dive spots, such as</p>
          <p>(from right to left on the map) Kamanoshiri, Okubo, Igaya, Gakkoushita, Meganeiwa, Onsenshita, Togahama and Abeshita, all of which are accessible as beach dives.</p>
        </div>
        <img src={divingMap} alt="diving map" className='py-8' />

        <div className='grid grid-cols-2 gap-2 mb-8 md:text-base text-xs'>
          <img src={okubo} alt="" />
          <div>
            <p className='font-bold'>Okubo beach</p>
            <p>Great place for fish watching - you can spot both big fish and macro marine life</p>
          </div>

          <img src={turtle} alt="" />
          <div>
            <p className='font-bold'>Kamanoshiri</p>
            <p>High encounter rate for turtles</p>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-2 mb-8 md:text-base text-xs'>
          <div>
            <p className='font-bold'>Abeshita</p>
            <p>Accessible by both beach and boat, this dive spot was created by lava flow in 1983.</p>
          </div>
          <img src={abeshita} alt="" />

          <div>
            <p className='font-bold'>Gakkoushita</p>
            <p>There is a small possiblity of seeing triggerfish.</p>
          </div>
          <img src={triggerfish} alt="" />
        </div>


        <img src={diving} alt="scuba diving" />
        <div>
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
          <p className='text-center my-6'>(half price on the 2nd day, rounded down to the nearest 10 yen)</p>
        </div>
      </div>


    </div>
  )
}

export default ScubaPage