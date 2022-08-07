import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { sendQuery, reset } from '../features/query/querySlice'
import island from '../assets/imgs/island.jpg'

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  const { firstName, lastName, email, phone, message } = formData

  const { isSuccess, currentId, isError } = useSelector(state => state.query)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset())
      navigate(`/${currentId}`)
    }

    if (isError) {
      toast.error('Some fields are missing')
      dispatch(reset())
    }

  }, [isSuccess, isError])


  const handleChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(sendQuery(formData))
  }

  return (
    <div className='mb-8'>
      <img src={island} alt="Miyakejima island" className='rounded-lg' />
      <div className='md:border-double md:border-4 border-indigo-600 rounded-md mt-4 md:pt-4 md:pb-6 md:px-16 md:w-max mx-auto'>
        <div className='text-center text-lg md:text-2xl pb-4'>Contact Us</div>
        <div>
          <form className='grid md:w-96 mx-auto' onSubmit={handleSubmit}>
            <label htmlFor="firstname" className='pl-1' >First name</label>
            <input type="text" id='firstName' value={firstName} onChange={handleChange} required className='mt-1 input input-bordered input-sm md:input-md' />
            <label htmlFor="lastName" className='pl-1 pt-2'>Last name</label>
            <input type="text" id='lastName' value={lastName} onChange={handleChange} required className='mt-1 input input-bordered input-sm md:input-md' />
            <label htmlFor="email" className='pl-1 pt-2'>Email</label>
            <input type="email" id='email' value={email} onChange={handleChange} required className='mt-1 input input-bordered input-sm md:input-md' />
            <label htmlFor="phone" className='pl-1 pt-2'>Phone number</label>
            <input type="tel" id='phone' value={phone} onChange={handleChange} className='mt-1 input input-bordered input-sm md:input-md' />
            <label htmlFor="message" className='pl-1 pt-2'>Message</label>
            <textarea type="text" id='message' value={message} onChange={handleChange} required className='mt-1 textarea textarea-bordered' />
            <button className="btn mt-4">Submit</button>
          </form>
        </div>
      </div>



    </div>
  )
}

export default ContactPage