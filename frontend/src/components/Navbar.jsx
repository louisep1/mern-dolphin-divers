import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'


function Navbar() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="relative md:m-4">
      <div className='border-4 border-cyan-500/50 py-4 px-8 m-2 rounded-full md:flex md:justify-between'>
        <Link to='/'><h1 className="text-xl lg:text-3xl font-bold md:mt-3">Dolphin Divers</h1></Link>

        <nav className='hidden md:block lg:text-lg lg:font-bold'>
          <ul className="flex gap-4 lg:gap-8 p-4">
            <li className='hover:text-cyan-500/50'><Link to='/'>Home</Link></li>
            <li className='hover:text-cyan-500/50'><Link to='/dolphin'>Dolphin swim</Link></li>
            <li className='hover:text-cyan-500/50'><Link to='/scuba'>Scuba diving</Link></li>
            <li className='hover:text-cyan-500/50'><Link to='/price'>Price list</Link></li>
            <li className='hover:text-cyan-500/50'><Link to='/contact'>Contact us</Link></li>
          </ul>
        </nav>
      </div>


      {/* Mobile nav: */}
      <nav className='absolute right-12 top-6 md:hidden'>
        <button onClick={() => setNavOpen(!navOpen)}><HiOutlineMenuAlt3 className='text-xl' /></button>
        <ul className={`${navOpen ? 'block' : 'hidden'} absolute flex flex-col gap-2 bg-white border-4 rounded-lg p-4 top-7 -right-10 w-40 text-center z-50`}>
          <li className='hover:text-cyan-500/50 hover:font-bold'><Link to='/'>Home</Link></li>
          <li className='hover:text-cyan-500/50 hover:font-bold'><Link to='/dolphin'>Dolphin swim</Link></li>
          <li className='hover:text-cyan-500/50 hover:font-bold'><Link to='/scuba'>Scuba diving</Link></li>
          <li className='hover:text-cyan-500/50 hover:font-bold'><Link to='/price'>Price list</Link></li>
          <li className='hover:text-cyan-500/50 hover:font-bold'><Link to='/contact'>Contact us</Link></li>
        </ul>
      </nav>
    </div >
  )
}

export default Navbar