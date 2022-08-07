import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateResponded, deleteQuery, getQueries } from '../features/query/querySlice'

function Query({ query }) {
  const { awaitingGet, isLoading } = useSelector(state => state.query)
  const dispatch = useDispatch()


  useEffect(() => {
    if (awaitingGet && !isLoading) {
      dispatch(getQueries())
    }
  }, [awaitingGet, isLoading])


  const handleChange = () => {
    dispatch(updateResponded(query._id))
  }

  const handleClick = () => {
    alert('This will permanently delete this message. The effects are irreversible. Are you sure?')

    dispatch(deleteQuery(query._id))
  }

  return (
    <div className={`my-8 border-solid border-2 p-2 rounded-lg max-w-lg mx-auto relative ${query.responded ? 'text-slate-300 bg-slate-100 border-slate-300' : 'border-indigo-600'}`}>
      <input type="checkbox" checked={query.responded === true && 'checked'} onChange={handleChange} className="checkbox absolute top-2 right-2" />
      <div>Query from {query.firstName} {query.lastName}</div>
      <div>{query.email}</div>
      <div>{query.phone && query.phone}</div>
      <div className="pt-2">Message:</div>
      <div>{query.message}</div>
      <div>at {query.createdAt.split('T')[0]} {query.createdAt.split('T')[1].split('Z')[0]}</div>
      <div className="text-right italic text-xs pt-1">{query._id}</div>
      <button className="btn btn-xs btn-error" onClick={handleClick}>PERMANENTLY DELETE</button>
    </div>
  )
}

export default Query