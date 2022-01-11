import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const signIn = (formData) => API.post("/api/user/sign-in", formData);
export const signUp = (formData) => API.post("/api/user/sign-up", formData);
