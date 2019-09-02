import { createAction, props } from '../../../../../../modules/store';

export const searchBooks = createAction(
  '[Find Book Page] Search Books',
  props<{ query: string }>()
);
