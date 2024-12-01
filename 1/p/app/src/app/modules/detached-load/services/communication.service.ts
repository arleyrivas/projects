import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private verificacionSubject = new BehaviorSubject<number>(0);
  verificacion$ = this.verificacionSubject.asObservable();

  updateVerificacion(value: number) {
    this.verificacionSubject.next(value);
  }
}
