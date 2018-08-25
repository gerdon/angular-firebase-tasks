import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { Observable } from 'rxjs';

// import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // tasks$: Observable<Task[]>;

  constructor (
    // private db: AngularFirestore
  ) {}

  // ngOnInit(): void {
  //   this.tasks$ = this.db.collection<Task>('/tasks').valueChanges();
  // }
}
