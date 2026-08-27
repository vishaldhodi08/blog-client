import axios from "axios";

const BASE_URL = "https://blog-api-m29k.onrender.com/api/posts";

export const getAllPosts = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const getPostById = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};

export const createPost = async (postData) => {
  const res = await axios.post(BASE_URL, postData);
  return res.data;
};

export const updatePost = async (id, postData) => {
  const res = await axios.put(`${BASE_URL}/${id}`, postData);
  return res.data;
};

export const deletePost = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
