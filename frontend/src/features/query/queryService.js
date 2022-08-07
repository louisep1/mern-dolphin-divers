import axios from 'axios'

const API_URL = '/api/query/'

const sendQuery = async queryData => {
  const response = await axios.post(API_URL, queryData)
  return response.data
}

const getQueries = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL, config)
  return response.data
}

const updateResponded = async (queryId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL, { _id: queryId }, config)
  return response.data
}

const deleteQuery = async (queryId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + queryId, config)
  return response.data
}

const queryService = {
  sendQuery,
  getQueries,
  updateResponded,
  deleteQuery,
}

export default queryService
