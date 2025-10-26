import axios from 'axios'

// Tạo axios instance với baseURL từ biến môi trường
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interface cho dữ liệu đăng ký
export interface RegisterUserData {
  email: string
  password: string
}

// Interface cho response từ API
export interface ApiResponse {
  message: string
  data?: any
}

// Hàm đăng ký người dùng
export const registerUser = async (data: RegisterUserData): Promise<ApiResponse> => {
  const response = await api.post('/user/register', data)
  return response.data
}

export default api
