import axios from "axios";
interface Data {
  file: File;
}
interface Response {
  data: { path: string };
}
const UPLOAD_ENDPOINT = "http://localhost:8000/api/upload";
export const uploadFile = (data: FormData) =>
  axios.post<Data, Response>(UPLOAD_ENDPOINT, data);
