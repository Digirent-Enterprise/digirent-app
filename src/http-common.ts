/* eslint-disable no-param-reassign */
import axios from "axios";

const devURL = "http://localhost:8000/v1/api/";

export const customAxios = (
  contentType: string = "application/x-www-form-urlencoded",
) => {
  console.log(localStorage.getItem("currentUser"));
  return axios.create({
    baseURL: devURL,
    headers: {
      "Content-Type": contentType,
      Authorization: `Bearer ${localStorage.getItem("currentUser")}`,
    },
  });
};
