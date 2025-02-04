import { createReducer, on } from '../../../../../../modules/store';

import { LayoutActions } from '../../core/actions';

export const layoutFeatureKey = 'layout';

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export const reducer = createReducer(
  initialState,
  // Even thought the `state` is unused, it helps infer the return type
  on(LayoutActions.closeSidenav, state => ({ showSidenav: false })),
  on(LayoutActions.openSidenav, state => ({ showSidenav: true }))
);

export const getShowSidenav = (state: State) => state.showSidenav;
