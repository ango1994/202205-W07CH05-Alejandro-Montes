import { createReducer, on, State } from '@ngrx/store';
import { iRobot } from 'src/app/interfaces/robot';
import {
  addRobot,
  loadRobotListSuccess,
  loadRobots,
  removeRobot,
  updateRobot,
} from './robots-actions';

export interface RobotsState {
  robots: iRobot[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: RobotsState = {
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
  on(loadRobots, (state) => ({ ...state, status: 'loading' }))
);
