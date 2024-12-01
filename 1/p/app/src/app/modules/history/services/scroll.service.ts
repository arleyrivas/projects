import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private loadMoreSubject = new Subject<void>();

  loadMore$ = this.loadMoreSubject.asObservable();

  loadMore() {
    this.loadMoreSubject.next();
  }


}
