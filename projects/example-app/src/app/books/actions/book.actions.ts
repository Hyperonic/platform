import { createAction, props } from '../../../../../../modules/store';

import { Book } from '../../books/models';

export const loadBook = createAction(
  '[Book Exists Guard] Load Book',
  props<{ book: Book }>()
);
