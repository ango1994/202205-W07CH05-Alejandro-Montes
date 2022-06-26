import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-robots-page',
  templateUrl: './robots-page.component.html',
  styleUrls: ['./robots-page.component.scss'],
})
export class RobotsPageComponent implements OnInit {
  // public allRobots$ = this.store.select(selectAllRobots);
  public robot = '';
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
