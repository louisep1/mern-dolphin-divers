import icon from '../assets/imgs/dolphin-icon.jpg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='text-center mx-6 my-8 md:my-8 py-2 md:py-8 px-8 border-4 rounded-lg'>
      <div className='hidden md:block text-xl'>Miyakejima</div>
      <div className='hidden md:block text-2xl'>Dolphin Divers</div>
      <img src={icon} alt="" className='h-24 md:h-44 mx-auto rounded-lg mb-6 mt-4' />
      <ul className="flex flex-wrap gap-4 justify-center lg:gap-8 pb-4 md:p-4 md:text-lg text-xs">
        <li className='hover:text-cyan-500/50'><Link to='/dolphin'>Dolphin swim</Link></li>
        <li className='hover:text-cyan-500/50'><Link to='/scuba'>Scuba diving</Link></li>
        <li className='hover:text-cyan-500/50'><Link to='/price'>Price list</Link></li>
        <li className='hover:text-cyan-500/50'><Link to='/contact'>Contact us</Link></li>
      </ul>
      <p className="text-right text-xs md:text-sm text-slate-600 pt-4">Tokyo Miyakejima Dolphin Divers © 2022</p>
    </div>
  )
}

export default Footer