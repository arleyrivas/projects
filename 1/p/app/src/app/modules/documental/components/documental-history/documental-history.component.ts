import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { mergeMap, Observable, of } from 'rxjs';
import { IDocumentHistory } from 'src/app/core/interfaces/document-history.interface';
import { IDocumentObservations } from 'src/app/core/interfaces/document-observations.interface';
import { IDocumentalStore } from 'src/app/core/interfaces/documental-store.interface';
import { IDocumentation } from 'src/app/core/interfaces/documentation.interface';
import { documentalSelector } from 'src/app/state/documental/documental.selectors';

@Component({
  selector: 'app-documental-history',
  templateUrl: './documental-history.component.html',
  styleUrls: ['./documental-history.component.css']
})
export class DocumentalHistoryComponent implements OnInit {

  public history: Observable<IDocumentHistory[]> = new Observable();

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.history = this.store.select(documentalSelector).pipe(
      mergeMap((documentalStore: IDocumentalStore) => {
        if(documentalStore.information) {
          const observations = JSON.parse(documentalStore.information?.observations) as IDocumentObservations;

          if(observations) return of(observations.revision);

          return [];
        }
        else return [];
      })
    );
  }
}
