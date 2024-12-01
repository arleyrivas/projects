import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IRequestByChangeStatus, IRequestDetailSAC } from 'src/app/core/interfaces/sac-request-management';



@Component({
  selector: 'app-sac-request-update-modal',
  templateUrl: './sac-request-update-modal.component.html',
  styleUrls: ['./sac-request-update-modal.component.css']
})
export class SacRequestUpdateModalComponent implements OnInit{
  formulario!: FormGroup;
  justification: string = '';
  emailToNotification: string = '';

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogData: IRequestByChangeStatus,
    public dialogRef: MatDialogRef<SacRequestUpdateModalComponent>,
  ) {}


  ngOnInit(): void {
    this.formulario = this.fb.group({
      justification: [this.dialogData.messageTojustification || '', [Validators.required, Validators.maxLength(250)]]
    });
    this.emailToNotification = this.dialogData.request.contactEmail ? this.dialogData.request.contactEmail : '';
    this.dialogData.showLinkForSendEmail;
  }

  
  onCancel(): void {
    if (this.dialogRef) {
      this.dialogRef.close(null);
    }
  }
  
  onAccept(): void {
    if (this.formulario.valid) {
      this.formulario.get('justification')?.value
      this.dialogRef.close(this.formulario.get('justification')?.value);
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  
  getErrorMessage(): string {
    const justificationControl = this.formulario.get('justification');
    if (justificationControl?.hasError('required')) {
      return 'La justificación es requerida';
    }
    if (justificationControl?.hasError('maxlength')) {
      return 'La justificación no puede exceder los 250 caracteres';
    }
    return '';
  }

  sendEmail(event: Event): void {
    event.preventDefault();
    const subject = encodeURIComponent('Solicitud ' + this.dialogData.request.requestNumber);
    window.location.href = `mailto:${this.emailToNotification}?subject=${subject}`;
  }


}
