import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://your-api-url'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Create a new to-do task
  createTask(taskData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/tasks`, taskData);
  }

  // Retrieve a list of to-do tasks
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/tasks`);
  }

  // Retrieve a single to-do task by ID
  getTaskById(taskId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tasks/${taskId}`);
  }

  // Update an existing to-do task
  updateTask(taskId: string, taskData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/tasks/${taskId}`, taskData);
  }

  // Delete a to-do task by ID
  deleteTask(taskId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/tasks/${taskId}`);
  }
}

