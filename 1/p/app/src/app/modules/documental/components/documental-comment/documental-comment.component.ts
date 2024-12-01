import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Store } from '@ngrx/store';
import { startWith, combineLatest, Subscription } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IDocumentationInformation } from 'src/app/core/interfaces/documentation-information.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { changeComment, changeNotifyState } from 'src/app/state/documental/documental.actions';
import { documentalSelector } from 'src/app/state/documental/documental.selectors';

@Component({
  selector: 'app-documental-comment',
  templateUrl: './documental-comment.component.html',
  styleUrls: ['./documental-comment.component.css']
})
export class DocumentalCommentComponent implements OnInit, OnDestroy {

  public disabled: boolean = false;
  public comment: FormControl = new FormControl({ value: "", disabled: true });
  public information!: IDocumentationInformation;
  public userInfo!: IAPIGatewayStore;
  public combineSubscription: Subscription = new Subscription();
  public commentSubscription: Subscription = new Subscription();
  @Output() public clearEmmiter: EventEmitter<() => void> = new EventEmitter();

  constructor(private readonly store: Store) { }

  public checkboxChange(event: MatCheckboxChange): void {
    event.checked ? this.comment.enable() : this.comment.disable();

    this.store.dispatch(changeNotifyState({ state: event.checked }));
  }

  ngOnInit(): void {
    this.clearEmmiter.emit(this.clear.bind(this));

    this.combineSubscription = combineLatest([this.store.select(documentalSelector),this.store.select(apiGatewayFeatureSelector)]).subscribe({
      next: (result) => {
        if(result[0].information) this.information = result[0].information;

        if(result[1]) this.userInfo = result[1];
      }
    });

    this.combineSubscription.unsubscribe();

    this.commentSubscription = this.comment.valueChanges.pipe(
      startWith("")
    ).subscribe({
      next: (value: string) => {
        this.store.dispatch(changeComment({
          history: {
            user: this.userInfo.nombres,
            date: "",
            note: value
          }
        }));
      },
      error: error => console.error(error)
    })
  }

  ngOnDestroy(): void {
    this.combineSubscription.unsubscribe();
  }

  public clear(): void {
    this.disabled = false;
    this.store.dispatch(changeNotifyState({ state: false }));
    this.comment.reset();
  }
}
