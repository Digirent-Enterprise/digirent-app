import axios from "axios";

const devURL = "http://localhost:8000/v1/api/";

export default (contentType: string) =>
  axios.create({
    baseURL: devURL,
    headers: {
      "Content-type": contentType,
    },
  });
