import { useParams } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function Success() {
  const { currentId } = useSelector(state => state.query)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (params.id !== currentId) {
      navigate('/')
    }
  })

  if (params.id === currentId) {
    return (
      <div className='text-center'>
        <div className='text-2xl'>Success!</div>
        <div className='py-2 font-bold'>Your query has been submitted.</div>
        <div>Someone will be in contact with you soon.</div>

        <div className='italic pt-12 pb-4'>
          <div>Reference number:</div>
          <div>{params.id}</div>
        </div>

        <div className='py-4'>Click below to return home:</div>

        <button className='btn' onClick={() => navigate('/')}><FaHome /></button>
      </div>
    )
  }
}

export default Success