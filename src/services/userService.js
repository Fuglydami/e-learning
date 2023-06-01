import axios from 'axios';


export const httpAuth = (contentType = 'application/json',responseType) => {
  const baseURL = 'https://portalsvr.proleanfinancials.biz/api/';

  const instance = axios.create({
    baseURL,
    responseType: responseType === "download" ? 'arraybuffer' : '',
    headers: {
      accept:"application/json",
      'Content-Type': contentType,
    },
  });

  // instance.defaults.headers.common["content-type"] = contentType;
  // instance.defaults.headers.common["language"] = lang;
  // instance.defaults.headers.common["version"] = version;
  // instance.defaults.headers.common['token'] = token;
  // const intersectedInstance = instance.interceptors.request.use(
  //   (response) => {
  //     return response;
  //   },
  //   (error) => {
  //     console.log(error.response);
  //     if (error.response.status === 404) {
  //       toast.error('An error occur, please try again later', toastData);
  //     } else if (error.response.status === 401) {
  //       return (window.location = '/');
  //     } else if (error.response.status === 500) {
  //       toast.error('Server Error', toastData);
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  return instance;
};
