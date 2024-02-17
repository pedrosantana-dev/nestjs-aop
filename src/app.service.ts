import { Injectable } from '@nestjs/common';
import { Observable, delay, of } from 'rxjs';

type HttpApiResponse = {
  message: string;
};

@Injectable()
export class AppService {
  serviceOne(): Observable<HttpApiResponse> {
    return of<HttpApiResponse>({ message: 'resposta do serviço um' }).pipe(
      delay(1000),
    );
  }
  serviceTwo(): Observable<HttpApiResponse> {
    return of<HttpApiResponse>({ message: 'resposta do serviço dois' }).pipe(
      delay(2000),
    );
  }
  serviceThree(): Observable<HttpApiResponse> {
    return of<HttpApiResponse>({ message: 'resposta do serviço três' }).pipe(
      delay(3000),
    );
  }
  serviceFour(): Observable<HttpApiResponse> {
    return of<HttpApiResponse>({ message: 'resposta do serviço quatro' }).pipe(
      delay(4000),
    );
  }
}
