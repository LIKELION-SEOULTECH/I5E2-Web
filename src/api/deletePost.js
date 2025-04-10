// src/api/postApi.js
import axios from 'axios';

export const deletePost = async (postId, password) => {
  try {
    const response = await axios.delete(`/api/v1/post/${postId}`, {
      data: { password: password },
    });

    return response;
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};