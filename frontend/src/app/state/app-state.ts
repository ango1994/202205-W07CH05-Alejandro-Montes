import { iRobot } from '../interfaces/robot';
import { iRobotsState } from './robots/robots-reducer';

export interface AppState {
  robots: Array<iRobot>;
}
