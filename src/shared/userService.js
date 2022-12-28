import axios from "axios";

export const httpAuth = () => {
  const baseURL = "https://portalsvr.proleanfinancials.biz/api/";

  const instance = axios.create({
    baseURL,
  });

  // instance.defaults.headers.common["countryCode"] = CountryCode;
  // instance.defaults.headers.common["language"] = lang;
  // instance.defaults.headers.common["version"] = version;
  // instance.defaults.headers.common["token"] = token;

  return instance;
};
