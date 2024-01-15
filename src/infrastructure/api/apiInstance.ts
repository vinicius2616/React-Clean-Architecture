import axios, { AxiosInstance } from 'axios'

export default class Api {
  axiosInstance(): AxiosInstance {
    const axiosInstance = axios.create({
      baseURL: '',
      responseType: 'json',
    })

    return axiosInstance
  }
}
