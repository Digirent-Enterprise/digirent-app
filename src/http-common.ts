/* eslint-disable no-param-reassign */
import axios from "axios";

const devURL = "http://localhost:8000/v1/api/";

export const customAxios = axios.create({
  baseURL: devURL,
  headers: {
    "Content-type": "application/x-www-form-urlencoded",
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJlNGZhNTZjMmU1YmQ0MTQwMTdlZThhIiwiZW1haWwiOiJ2b2dpYWJhbzIxMTE5MkBnbWFpbC5jb20iLCJuYW1lIjoidm9naWFiYW8iLCJyb2xlIjoidXNlciIsImlhdCI6MTY1OTE3NTk1MiwiZXhwIjoxNjYxNzY3OTUyfQ.1jMcJ9zrBH_WgYFnbywTDOdKrTYvYd34ddguODohYg8",
  },
});
