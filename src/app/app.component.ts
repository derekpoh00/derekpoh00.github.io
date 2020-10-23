import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'localize-sample';
  tasksCount = 3;

  localesList = [
    { code: 'en-US', label: 'English' },
    { code: 'fr', label: 'français' }
  ]
  
}
