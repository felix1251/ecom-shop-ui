import axios from 'axios'
import store from '@/store'
import router from "@/router";
import secureStorage from '@/secureStorage'

const API_URL = store.state.serverUrl

const securedAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
})

const plainAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
})

securedAxiosInstance.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
  }
  return config
})

const unsetUser = () => {
  let prevLocation = window.location
  secureStorage.setItem("prevPathOnRefresh", prevLocation.pathname + prevLocation.search)
  store.commit('unsetCurrentUser')
  router.replace('/login')
}

securedAxiosInstance.interceptors.response.use(null, async error => {
  if (error.response && error.response.config && error.response.status == 401) {
      unsetUser()
      return Promise.reject(err)
  } else {
    return Promise.reject(error)
  }
})

export {securedAxiosInstance, plainAxiosInstance}
