import { CoursesComponent } from './../courses/courses.component';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CoursesComponent

  ],
  template: `
    <h1>Hello, {{ title() }}</h1>
    <h3>Learning AngularJS!</h3>
    <courses>Courses</courses>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('angularjs-app');
}
