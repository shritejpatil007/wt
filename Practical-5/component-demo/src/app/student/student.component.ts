import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentName: string = 'ABC';
  @Input() parentMessage: string = '';
}
