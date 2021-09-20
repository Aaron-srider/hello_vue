import axios from "axios"
export default function (config) {

  const instance = axios.create({
    baseURL:"http://localhost:8081"
  })

  // Add a request interceptor
  instance.interceptors.request.use(function (config) {
    config.headers["token"]="234123421"
    console.log(config)
    return config;
  }, function (error) {
    console.log("request error")
    return Promise.reject(error);
  });

// Add a response interceptor
  instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  return instance(config)
}
