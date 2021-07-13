import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import {UserService} from "../users/services/user.service";
import {environment} from "../../environments/environment";
import { AuthService } from './services/auth.service';
import { PasswordService } from './services/password.service';
import {AuthResolvers} from "./resolvers/auth.resolvers";
import { JwtStrategy } from './services/jwt.strategy';

@Module({
  imports: [
    UserService,
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      privateKey: environment.jwt.secrete,
      signOptions: {
        expiresIn: environment.jwt.expiresIn
      }
    })
  ],
  providers: [AuthService, PasswordService, JwtStrategy, AuthResolvers ],
  exports: [ AuthService, PassportModule ]
})
export class AuthModule {}
