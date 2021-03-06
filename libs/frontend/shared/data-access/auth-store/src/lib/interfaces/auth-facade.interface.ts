import { Observable } from 'rxjs';
import { ApolloError } from '@apollo/client';

import { ISignAuthPayload, Nullable } from '@mean/shared/utils/interfaces';

/**
 * Auth facade interface
 */
export abstract class IAuthFacade {
  /**
   * SignIn observer
   */
  public signIn$!: Observable<Nullable<ISignAuthPayload>>;

  /**
   * SignInRun status observer
   */
  public signInRun$!: Observable<boolean>;

  /**
   * SignInError observer
   */
  public signInError$!: Observable<Nullable<ApolloError>>;

  /**
   * SignOut status observer
   */
  public signOutRun$!: Observable<boolean>;

  /**
   * SignOut error observer
   */
  public signOutError$!: Observable<Nullable<ApolloError>>;

  /**
   * Sign in
   * @param force
   */
  public abstract signIn(force?: boolean): void

  /**
   * Set sign in payload
   * @param payload
   */
  public abstract signInSet(payload: ISignAuthPayload): void

  /**
   * Clear sign in payload
   */
  public abstract signInClear(): void

  /**
   * Sign out
   * @param force
   */
  public abstract signOut(force?: boolean): void
}
