import axios from "axios";
const UPLOAD_ENDPOINT = "http://localhost:8000/api/upload";
export const uploadFile = (data: FormData) => axios.post(UPLOAD_ENDPOINT, data);
