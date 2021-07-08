import apiHelper from "./apiHelper";

export const getAccountList = async () => {
  try {
    const { data } = await apiHelper.get("/account/accounts");
    
    return data;
  } catch (error) {
    return [];
  }
};

export const getTypeProduct = async () => {
  try {
    const { data } = await apiHelper.get("/type-product/all");
    return data;
  } catch (error) {
    return [];
  }
};

export const getProduct = async (name = null) => {
  try {
    const { data } = await apiHelper.get(
      `/product${name ? "?&name=" + name : "/all"}`
    );
    return data;
  } catch (error) {
    return [];
  }
};
export const getDanhGia = async () => {
  try {
    const { data } = await apiHelper.get("/review/all");
    return data;
  } catch (error) {
    return [];
  }
};
export const createAcc = async (dataBody) => {
  try {
    const { data } = await apiHelper.post("/account/create", dataBody);
    return data;
  } catch (error) {
    return null;
  }
}