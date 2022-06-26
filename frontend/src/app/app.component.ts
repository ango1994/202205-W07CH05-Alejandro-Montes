import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadRobots } from './state/robots/robots-actions';
import { selectAllRobots } from './state/robots/robots-selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public allRobots$ = this.store.select(selectAllRobots);
  public robot = {};

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadRobots());
  }
}
