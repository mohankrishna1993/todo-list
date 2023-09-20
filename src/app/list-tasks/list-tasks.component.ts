import { Component, OnInit } from '@angular/core';
// import { TodoService } from '../create-task/services/todo.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {
  tasks: any[] | undefined; // Assuming tasks are stored as an array

  constructor() {}

  ngOnInit() {
    // Fetch to-do tasks from your service

  }

  editTask(task: any) {
    // Set the selected task for editing
  }
  deleteTask(task: any) {
    
  }


}
