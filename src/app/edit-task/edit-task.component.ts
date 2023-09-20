
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { TodoService } from '../create-task/services/todo.service';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  editedTask = {
    _id: '', // Add a hidden input for task ID if needed
    date: '',
    taskName: '',
    status: 'active'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,

  ) {}

  ngOnInit() {
    // Retrieve the task ID from the route parameters
    // this.route.params.subscribe(params => {
    //   const taskId = params['id']; // Assuming you've defined a route parameter 'id'

    //   // Fetch the task data by ID using your service
    //   this.todoService.getTaskById(taskId).subscribe(
    //     (task) => {
    //       this.editedTask = task;
    //     },
    //     (error) => {
    //       console.error('Error fetching task:', error);
    //     }
    //   );
    // });
  }

  onSubmit() {
    // Call your service to update the task
    // this.todoService.updateTask(this.editedTask._id, this.editedTask).subscribe(
    //   (response) => {
    //     // Handle successful update, e.g., show a success message
    //     console.log('Task updated successfully!', response);
    //     // Redirect to the task list or another appropriate page
    //     this.router.navigate(['/task-list']);
    //   },
    //   (error) => {
    //     // Handle error, e.g., display an error message
    //     console.error('Error updating task:', error);
    //   }
    // );
  }
}

