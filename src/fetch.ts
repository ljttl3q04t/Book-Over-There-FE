import axios from "axios";
import { Book } from ".";

const api = axios.create({
  baseURL: "http://0.0.0.0:8000/services",
  headers: {
    "Access-Control-Allow-Origin": "*",
  }, // Replace with your API base URL
});

const fetchData = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export async function getBookList() {
  const data = await fetchData("/book/list");
  console.log(data);
  return data;
}
