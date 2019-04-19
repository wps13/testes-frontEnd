import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.mathjs.org/v4/",
  crossDomain: true
});

export default instance;
