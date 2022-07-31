export const storeUserSession = (accessToken: string) => {
  return localStorage.setItem("currentUser", accessToken);
};

export const getUserLogged = () => localStorage.getItem("currentUser");

export const clearUserSession = () => {
  return localStorage.removeItem("currentUser");
};
