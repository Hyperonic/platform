import { createAction, props } from '../../../../../../modules/store';

import { Book } from '../../books/models';

/**
 * Add Book to Collection Action
 */
export const addBook = createAction(
  '[Selected Book Page] Add Book',
  props<{ book: Book }>()
);

/**
 * Remove Book from Collection Action
 */
export const removeBook = createAction(
  '[Selected Book Page] Remove Book',
  props<{ book: Book }>()
);
