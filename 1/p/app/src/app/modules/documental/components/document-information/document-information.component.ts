import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IDocumentHistory } from 'src/app/core/interfaces/document-history.interface';
import { IDocumentalStore } from 'src/app/core/interfaces/documental-store.interface';
import { IDocumentationInformation } from 'src/app/core/interfaces/documentation-information.interface';
import { IDocumentationRequestInformation } from 'src/app/core/interfaces/documentation-request-information.interface';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { RejectWarningDialogComponent } from 'src/app/shared/components/reject-warning-dialog/reject-warning-dialog.component';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { addCancelRequestTime, addComment, addRequestTime, approveDocumentation, approveInformation, changeFileStatus, clearComment, clearRequestTime, closeDocumentationInformation, disapproveDocumentation, disapproveInformation, rejectNoChecked, saveDateEnd, SaveRejectedWarning, saveRequestTime, setUpdateAt, unlockInformation } from 'src/app/state/documental/documental.actions';
import { documentalSelector } from 'src/app/state/documental/documental.selectors';
import { userFeatureSelector } from 'src/app/state/user/user.selectors';
import * as moment from 'moment-timezone';
import { DocumentalService } from '../../services/documental.service';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';

@Component({
  selector: 'app-document-information',
  templateUrl: './document-information.component.html',
  styleUrls: ['./document-information.component.css']
})
export class DocumentInformationComponent implements OnInit, OnDestroy {
  public dialogSubscription: Subscription = new Subscription();
  public documentalStore: Observable<IDocumentalStore> = new Observable();
  public userInfo: { user: string, name: string } = { user: "", name: "" };
  public resetForm: () => void = () => {};

  constructor(
    private readonly store: Store,
    private readonly matDialog: MatDialog,
    private readonly aesService: AESEncryptionUtilService,
    private readonly router: Router,
    private readonly documentalService: DocumentalService
  ) { }

  ngOnInit(): void {
    this.documentalStore = this.store.select(documentalSelector);

    const userSubscription = this.store.select(apiGatewayFeatureSelector).pipe(
      map((user: IAPIGatewayStore) => ({ user: user.userName, name: `${user.nombres} ${user.apellidos}` }))
    ).subscribe({
      next: (user: { user: string, name: string }) => {
        this.userInfo = user;
      },
      error: error => console.error(error)
    });

    userSubscription.unsubscribe();

    this.updateRejectedWarning();
  }

  ngOnDestroy(): void {
    if(this.dialogSubscription) this.dialogSubscription.unsubscribe();
  }

  public closeInformation(information: IDocumentationInformation): void {
    this.store.dispatch(addCancelRequestTime());
    this.store.dispatch(unlockInformation({ information }));
    this.store.dispatch(closeDocumentationInformation());

    this.documentalService.getExecSearch().next(null);
  }

  public updateRejectedWarning(): void {
    this.store.dispatch(SaveRejectedWarning());
  }

  public matCheckboxChange(
    event: MatCheckboxChange,
    documentID: number,
    id: number,
    mode: boolean,
    state: string,
  ): void {
    if(mode) this.store.dispatch(changeFileStatus({ id, mode: false, checked: false }));
    else this.store.dispatch(changeFileStatus({ id, mode: true, checked: false }));

    this.store.dispatch(setUpdateAt({ documentID, fileID: id, updateAt: Date.now(), state }));
    this.store.dispatch(changeFileStatus({ id, mode, checked: event.checked }));
    this.updateRejectedWarning();
  }

  public notify(
      information: IDocumentationInformation,
      approve: boolean,
      history: IDocumentHistory | null,
      requestTime: IDocumentationRequestInformation | null,
      rejectedWarning: boolean
  ): void {
    if(!approve) this.store.dispatch(rejectNoChecked());

    if(rejectedWarning && !approve) {
      this.dialogSubscription = this.matDialog.open(RejectWarningDialogComponent).afterClosed()
      .subscribe((ok: boolean) => {
        if(ok) this.submit(information, approve, history, requestTime, rejectedWarning);
      });
    } else this.submit(information, approve, history, requestTime, rejectedWarning);
  }

  public submit(
    information: IDocumentationInformation,
    approve: boolean,
    history: IDocumentHistory | null,
    requestTime: IDocumentationRequestInformation | null,
    rejectedWarning: boolean
  ): void {
    this.store.dispatch(addComment({ history, approve }));
      this.store.dispatch(addRequestTime({ requestTime, approve }));

      if(!approve) {
        this.store.dispatch(approveInformation());
        this.store.dispatch(approveDocumentation({ information }))
      } else {
        this.store.dispatch(disapproveInformation());
        this.store.dispatch(disapproveDocumentation({ information }));
      }

      this.resetForm();
      this.store.dispatch(closeDocumentationInformation());
      this.store.dispatch(clearRequestTime());
  }

  public notifyButtonState(approved: boolean, checked: boolean): boolean {
    if(checked) return false;

    return approved;
  }

  public openFile(informationID: number, fileID: number): void {
    const w = window.open(`${location.origin}/portal/api/documentation/file/${informationID}/${fileID}`, "_blank");

    if(w) w.onload = () => {
      w.document.title = "" + informationID + "-" + fileID + ".pdf";
    }
  }

  public clearComment(event: () => void): void {
    this.resetForm = event;
    this.store.dispatch(clearComment());
  }

  public goToModule(module: string): void {
    this.router.navigate(["/", module]).then(() => {
      const currentRoute = this.router.url;

      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() =>
      this.router.navigate([currentRoute])
    );
    });
  }
}
