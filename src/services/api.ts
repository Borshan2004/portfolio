import axios from "axios";
import type { ContactPayload, Project } from "@/types";

// import.meta.env may not be typed in some TS configs; cast to any to avoid type error
const API_URL = (import.meta as any).env?.VITE_API_URL || "http://localhost:4000/api";

export const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const getProjects = async (): Promise<Project[]> => {
  const { data } = await api.get<Project[]>("/projects");
  return data;
};

export const sendContactMessage = async (payload: ContactPayload) => {
  const { data } = await api.post("/contact", payload);
  return data;
};
