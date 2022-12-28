// import { CacheEnums } from "../utils";

export class CacheService {
  expireTime = 20 * 60 * 1000;
  // save important and large data that is not likely to change frequently to cache
  // expiry is set to 24 hours by default but can be changed if specifed
  static setToCache(key, value, expiringTime = 20 * 60 * 1000) {
    const currentDate = new Date().getTime();

    const cacheValue = {
      value,
      expiryTime: currentDate + expiringTime,
    };

    localStorage.setItem(key, JSON.stringify(cacheValue));
  }

  static getFromCache(key) {
    // attempt to get data from cache, if data exists read it and return else return null
    // if data exists, ensure it is not stale, if it's stale return null else return data

    const cacheData = localStorage.getItem(key);

    if (!cacheData) {
      return null;
    }

    const data = JSON.parse(cacheData);

    if (new Date().getTime() > data.expiryTime) {
      localStorage.removeItem(key);
      return null;
    } else {
      return data;
    }
  }

  static removeFromCache(key) {
    Array.isArray(key)
      ? key.forEach((cache) => localStorage.removeItem(cache))
      : localStorage.removeItem(key);
  }
}
