import { ChangeDetectionStrategy, Component } from '@angular/core';

import { select, Store } from '../../../../../../modules/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { FindBookPageActions } from '../../books/actions';
import { Book } from '../../books/models';
import * as fromBooks from '../../books/reducers';

@Component({
  selector: 'bc-find-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-book-search
      [query]="searchQuery$ | async"
      [searching]="loading$ | async"
      [error]="error$ | async"
      (search)="search($event)"
    >
    </bc-book-search>
    <bc-book-preview-list [books]="books$ | async"> </bc-book-preview-list>
  `,
})
export class FindBookPageComponent {
  searchQuery$: Observable<string>;
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<fromBooks.State>) {
    this.searchQuery$ = store.pipe(
      select(fromBooks.getSearchQuery),
      take(1)
    );
    this.books$ = store.pipe(select(fromBooks.getSearchResults));
    this.loading$ = store.pipe(select(fromBooks.getSearchLoading));
    this.error$ = store.pipe(select(fromBooks.getSearchError));
  }

  search(query: string) {
    this.store.dispatch(FindBookPageActions.searchBooks({ query }));
  }
}
