import { createReducer, on } from '@ngrx/store';
import { iRobot } from 'src/app/interfaces/robot';
import {
  addRobot,
  loadRobotListFailure,
  loadRobotListSuccess,
  loadRobots,
  removeRobot,
  updateRobot,
} from './robots-actions';

export interface iRobotsState {
  robots: iRobot[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: iRobotsState = {
  robots: [],
  error: '',
  status: 'pending',
};

export const robotsReducer = createReducer(
  initialState,
  on(addRobot, (state, { robot }) => ({
    ...state,
    robots: [...state.robots, robot],
  })),
  on(removeRobot, (state, { robotId }) => ({
    ...state,
    robots: state.robots.filter((robot) => robot._id !== robotId),
  })),
  on(updateRobot, (state, { robot }) => ({
    ...state,
    robots: state.robots.map((robotArray) =>
      robotArray._id === robot._id ? robot : robotArray
    ),
  })),
  on(loadRobots, (state) => ({ ...state, status: 'loading' })),
  on(loadRobotListSuccess, (state, { robots }) => ({
    ...state,
    robots: robots,
    error: '',
    status: 'success',
  })),
  on(loadRobotListFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
