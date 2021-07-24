import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers } from './+state/root-reduces';
import { rootInitialState } from './+state/root-initial-state';
import { StoreRouterStateSerializer } from './services/store-router-state-serializer';


@NgModule({
  imports: [
    RouterModule,
    StoreModule.forRoot(reducers, {
      initialState:rootInitialState
    }),
    StoreRouterConnectingModule.forRoot({
      serializer:StoreRouterStateSerializer
    })

  ],
})
export class RootStoreModule {}
