import { createFeatureSelector, createSelector } from '@ngrx/store';
import { iRobot } from 'src/app/interfaces/robot';
import { AppState } from '../app-state';
import { iRobotsState } from './robots-reducer';

export const selectRobots = (state: AppState) => state.robots;
export const selectAllRobots = createFeatureSelector<Array<iRobot>>('robots');
