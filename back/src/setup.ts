import { INestApplication, ValidationPipe } from "@nestjs/common"
import { AllExceptionsFilter } from 'src/common/AllExceptionFilter'
import { HttpAdapterHost } from '@nestjs/core'

export const setup = async (app: INestApplication) => {
  app.setGlobalPrefix("/api")
  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  const httpAdapterHost = app.get(HttpAdapterHost);

  app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost))

  return app
}