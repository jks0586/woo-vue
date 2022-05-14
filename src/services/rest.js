import axios from "axios";
export default axios.create({
  baseURL: "https://fmw.vxinfosystem.com/wp-json/letscms/v1/",
  headers: {
    "Content-type": "application/json"
  }
});
