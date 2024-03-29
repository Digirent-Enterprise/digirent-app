import axios from "axios";

const devURL = "https://backend-digirent-rmit-app.herokuapp.com/v1/api/";

export const customAxios = (
  contentType: string = "application/x-www-form-urlencoded",
) => {
  return axios.create({
    baseURL: devURL,
    headers: {
      "Content-Type": contentType,
      Authorization: `Bearer ${localStorage.getItem("currentUser")}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
};
