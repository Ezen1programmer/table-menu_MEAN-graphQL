import {Routes} from '@angular/router'
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ComponentType } from '@angular/cdk/overlay';

export const userProfileRoutes: Routes = [
  {
    path: '',
    component: UserProfileComponent
  }
]

export const userProfileContainers: ComponentType<UserProfileComponent>[] = [UserProfileComponent]
