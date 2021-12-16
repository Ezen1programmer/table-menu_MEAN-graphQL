import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { EitherInterceptor } from 'libs/backend/web/shared/utils/interceptors/src/lib/either.interceptor';


/**
 * Bootstrap backend-api app
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.API_PORT || 3333;
  app.useGlobalInterceptors(new EitherInterceptor());
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix, globalPrefix),
      Logger.log('Go to graphql  http://localhost:' + port + '/' + 'graphql');
  });
}

bootstrap();
