import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'null'
const instance = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'ngrok-skip-browser-warning': true,
  },
})

export default instance
