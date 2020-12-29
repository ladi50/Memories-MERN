import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;

export const fetchPosts = async () => await axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (postId, postData) =>
  axios.patch(`${url}/${postId}`, postData);
export const deletePost = (postId) => axios.delete(`${url}/${postId}`);
export const likePost = (postId) => axios.patch(`${url}/${postId}/likePost`);
