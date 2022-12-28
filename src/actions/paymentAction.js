import { httpLegacy, httpService } from "../shared/userService";

export const getPaymentTypes = async () => {
  const baseURL = httpService();
  try {
    const { data } = await baseURL.get("Administration/get-payment-types");
    return data;
  } catch (error) {
    return error.response;
  }
};
export const getPaymentTypesId = async (id) => {
  const baseURL = httpService();
  try {
    const { data } = await baseURL.get(
      `Administration/getsuccessfulpaymentconfigtransactions/${id}`
    );
    return data;
  } catch (error) {
    return error.response;
  }
};
export const getPaymentCategoryId = async (id) => {
  const baseURL = httpLegacy();
  try {
    const { data } = await baseURL.get(`getpaymentinfo/${id}`);
    return data;
  } catch (error) {
    return error.response;
  }
};
export const getPaymentCategory = async () => {
  const baseURL = httpLegacy();
  try {
    const { data } = await baseURL.get(`getpaymentsummary`);
    return data;
  } catch (error) {
    return error.response;
  }
};
