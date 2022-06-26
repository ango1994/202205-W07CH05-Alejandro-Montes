import { createSelector } from '@ngrx/store';
import { AppState } from '../app-state';
import { RobotsState } from './robots-reducer';

export const selectRobots = (state: AppState) => state.robots;
export const selectAllRobots = createSelector(
  selectRobots,
  (state: RobotsState) => state.robots
);
