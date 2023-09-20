

import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { TodoService } from './services/todo.service';



@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  task = {
    date: '',
    taskName: '',
    status: 'active'
  };


  constructor(private router: Router) {}

  onSubmit() {

    // this.todoService.createTask(this.task).subscribe(
    //   (response: any) => {

    //     console.log('Task created successfully!', response);
    //   },
    //   (error: any) => {

    //     console.error('Error creating task:', error);
    //   }
    // );
  }


}




