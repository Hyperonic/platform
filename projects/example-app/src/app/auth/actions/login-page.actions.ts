import { createAction, props } from '../../../../../../modules/store';
import { Credentials } from '../../auth/models';

export const login = createAction(
  '[Login Page] Login',
  props<{ credentials: Credentials }>()
);
