import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAdmin, reset } from '../features/admin/adminSlice'
import { getQueries } from '../features/query/querySlice'
import Query from '../components/Query'



function Admin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { admin, isSuccess, isError } = useSelector(state => state.admin)
  const { queries } = useSelector(state => state.query)

  const dispatch = useDispatch()

  useEffect(() => {
    if (isSuccess) {
      dispatch(getQueries())
    }

    if (isError) {
      dispatch(reset())
    }
  }, [isSuccess, isError])

  const handleSubmit = e => {
    e.preventDefault()
    if (username && password) {
      const login = {
        username,
        password
      }
      dispatch(loginAdmin(login))
    }
  }


  if (isSuccess && queries) {
    return (
      <div>
        <div className='text-right'>Logged in as {admin.username}</div>
        {queries.length > 1 && [...queries.filter(query => query.responded === false), ...queries.filter(query => query.responded === true)].map(query => <Query query={query} key={query._id} />)}
        {queries.length === 1 && (
          <Query query={queries[0]} />
        )}
      </div>
    )
  }

  return (
    <div className='text-center'>
      <div>Welcome to the Admin Page</div>
      <div>Leaving this page will automatically log you out.</div>
      <form onSubmit={handleSubmit} className='grid'>
        <label htmlFor="username" className='mt-4'>Username</label>
        <input type="text" id='username' value={username} onChange={e => setUsername(e.target.value)} className='text-center p-1 mb-4' />
        <label htmlFor="password">Password</label>
        <input type="password" id='password' value={password} onChange={e => setPassword(e.target.value)} className='text-center p-1' />
        <button className="btn my-8" type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default Admin