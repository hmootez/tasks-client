import axios from "axios";
import { ITask } from "../ts/interfaces";

function getAxiosInstance() {
  return axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const TasksAPI = getAxiosInstance();

class Service {
  private axios;
  constructor() {
    this.axios = TasksAPI;
  }

  async updateTask(taskId: string, data: ITask) {
    return await this.axios
      .put(`/tasks/${taskId}`, data)
      .then((response) => response.data);
  }

  async createTask(data: ITask) {
    return await this.axios
      .post(`/tasks`, data)
      .then((response) => response.data);
  }

  async getAllTasks() {
    return await this.axios.get(`/tasks`).then((response) => response.data);
  }
  async deleteTask(taskId: string) {
    return await this.axios
      .delete(`/tasks/${taskId}`)
      .then((response) => response.data);
  }
}

const TaskServices = new Service();

export default TaskServices;
