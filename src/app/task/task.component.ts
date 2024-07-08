import { Component, Input } from '@angular/core';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [TasksComponent]
})
export class TaskComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
}
