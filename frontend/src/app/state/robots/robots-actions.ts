import { createAction, props } from '@ngrx/store';
import { iRobot } from '../../interfaces/robot';

export const addRobot = createAction(
  '[Robot Page] Add Robot',
  props<{ robot: iRobot }>()
);

export const removeRobot = createAction(
  '[Robot Page] Remove Robot',
  props<{ robotId: string }>()
);

export const updateRobot = createAction(
  '[Robot Item] Update Robot',
  props<{ robotId: string}>
)

export const loadRobotListSuccess = createAction(
  '[Robot List/API] Retrieve Robots Success',
  props<{ robots: Array<iRobot> }>()
);
export const loadRobotListFailure = createAction(
  '[Robot List/API] Retrieve Robots Success',
  props<{ error: string }>()
);
