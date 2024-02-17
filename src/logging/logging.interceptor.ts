import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        const delay = Date.now() - now;
        const log = {
          delay,
          method: context.getHandler().name, // pega o nome do método
          className: context.getClass().name, // pega o nome da classe
        };
        console.log(log);
      }),
    );
  }
}
