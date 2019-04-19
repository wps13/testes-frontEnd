import axios from "axios";

const instance = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://api.mathjs.org/v4/",
  crossDomain: true
});

export default instance;
