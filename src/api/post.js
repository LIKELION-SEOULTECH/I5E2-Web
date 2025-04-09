import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/post'; // Spring 서버 주소에 맞게 수정

export const fetchPagedPosts = async (page, size) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/list`, {
      page,
      size,
    });
    return response.data; 
  } catch (error) {
    console.error('게시글 불러오기 실패:', error);
    throw error;
  }
};