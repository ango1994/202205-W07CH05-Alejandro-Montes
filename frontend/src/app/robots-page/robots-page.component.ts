import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadRobots } from '../state/robots/robots-actions';
import { selectAllRobots, selectRobots } from '../state/robots/robots-selector';

@Component({
  selector: 'app-robots-page',
  templateUrl: './robots-page.component.html',
  styleUrls: ['./robots-page.component.scss'],
})
export class RobotsPageComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(loadRobots());
  }
}
