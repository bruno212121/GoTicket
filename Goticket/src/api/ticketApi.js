import axios from "axios";

//base url para la api de tickets

const ticketApi = axios.create({
  baseURL: "http://localhost:4000",
});

export default ticketApi;
