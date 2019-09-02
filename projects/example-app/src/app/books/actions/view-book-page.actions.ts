import { createAction, props } from '../../../../../../modules/store';

export const selectBook = createAction(
  '[View Book Page] Select Book',
  props<{ id: string }>()
);
