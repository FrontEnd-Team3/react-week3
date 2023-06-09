export const getToken = () => {
  return localStorage.getItem("accessToken");
};

export const setToken = (data) => {
  return localStorage.getItem("accessToken", data);
};
