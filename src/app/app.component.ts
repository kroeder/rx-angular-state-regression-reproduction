import { Component } from '@angular/core';
import { RxState } from '@rx-angular/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rx-state-angular-regression';

  constructor(private state: RxState<{ id: string }>) {
    this.state.set({ id: '12345' });
  }
}
