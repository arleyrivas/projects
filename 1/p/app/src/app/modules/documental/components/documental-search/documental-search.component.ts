import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { cleanDocumentations, closeDocumentationInformation, getAllDocumentation, requestListScrollToTop, resetDocumentations, searchDocumentation } from 'src/app/state/documental/documental.actions';
import { reset } from 'src/app/state/pagination/pagination.actions';
import { DocumentalService } from '../../services/documental.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-documental-search',
  templateUrl: './documental-search.component.html',
  styleUrls: ['./documental-search.component.css']
})
export class DocumentalSearchComponent implements OnInit, OnDestroy {

  public search: FormControl = new FormControl("");
  public searchSubscription: Subscription = new Subscription();

  constructor(
    private readonly store: Store,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly documentalService: DocumentalService
    ) { }

    ngOnInit(): void {
      this.searchSubscription = this.documentalService.getExecSearch().subscribe({
        next: () => {
          this.submit();
        },
        error: error => console.error(error)
      });
    }

    ngOnDestroy(): void {
      this.searchSubscription.unsubscribe();
    }

  @HostListener("document:keydown.enter")
  public submit(): void {
    const value = this.search.value as string;

    this.store.dispatch(closeDocumentationInformation());

    if(value.length)
      this.store.dispatch(searchDocumentation({ nbr: this.base64EncryptionUtilService.encrypt(value) }));
    else {
      this.store.dispatch(cleanDocumentations());
      this.store.dispatch(reset());
    }
  }
}
