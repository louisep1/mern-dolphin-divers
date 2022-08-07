import axios from 'axios'
const API_URL = '/api/admin/'

const loginAdmin = async (adminData) => {
  const response = await axios.post(API_URL, adminData)
  return response.data
}





const adminService = {
  loginAdmin
}

export default adminService