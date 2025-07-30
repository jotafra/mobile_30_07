import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    accept: 'application/json',
  },
});

const sheets = {
    posts: () => api.get("posts"),
    todos: () => api.get("todos"),
    users: () => api.get("users"),
}
export default sheets;