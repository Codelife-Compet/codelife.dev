import axios from "axios";
import { parseCookies } from "nookies";
const apiUrl = process.env.API_HOST
const { "codelifeAuth-token": token } = parseCookies()
/* This create a axios client to api backend requests */
export const api = axios.create({
  baseURL: apiUrl
})
// This will intercept the request to show what is going on
api.interceptors.request.use(config => {
  console.log(config);
  return config
})
// This will update the Authorization Header from the api axios client if a the codelife token exists
if (token) api.defaults.headers["Authorization"] = `Bearer ${token}`