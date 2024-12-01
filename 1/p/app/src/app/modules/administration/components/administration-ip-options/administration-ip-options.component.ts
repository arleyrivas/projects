import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAdministrationIpAddressDTO } from 'src/app/core/dto/administration-ip-address.dto';
import { CustomValidators } from 'src/app/shared/custom-validators';
import { createIpAddress } from 'src/app/state/administration/administration.actions';
import { UtilService } from "../../../../shared/services/util.service";

@Component({
  selector: 'app-administration-ip-options',
  templateUrl: './administration-ip-options.component.html',
  styleUrls: ['./administration-ip-options.component.css']
})
export class AdministrationIpOptionsComponent implements OnInit {

  public staticFormGroup: FormGroup = new FormGroup({});
  public rangeFormGroup: FormGroup = new FormGroup({});

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.staticFormGroup = new FormGroup({
      description: new FormControl("", [Validators.required]),
      ip: new FormControl("", [Validators.required, Validators.pattern('(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'), CustomValidators.ip])
    });

    this.rangeFormGroup = new FormGroup({
      description: new FormControl("", [Validators.required]),
      ipFrom: new FormControl("", [Validators.required, Validators.pattern('(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'), CustomValidators.ip]),
      ipTo: new FormControl("", [Validators.required, Validators.pattern('(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'), CustomValidators.ip])
    })
  }

  public get staticDescriptionControl(): AbstractControl {
    return this.staticFormGroup.controls["description"];
  }

  public get staticIpControl(): AbstractControl {
    return this.staticFormGroup.controls["ip"];
  }

  public get rangeDescriptionControl(): AbstractControl {
    return this.rangeFormGroup.controls["description"];
  }

  public get rangeIpFromControl(): AbstractControl {
    return this.rangeFormGroup.controls["ipFrom"];
  }

  public get rangeIpToControl(): AbstractControl {
    return this.rangeFormGroup.controls["ipTo"];
  }

  public staticSubmit(): void {
    const ip: string[] = this.staticIpControl.value.split(".");

    const payload: IAdministrationIpAddressDTO = {
      companyId: null,
      action: "INSERT",
      ips: [
        {
          address: `(${ip[0]})\\.(${ip[1]})\\.(${ip[2]})\\.(${ip[3]})$`,
          description: this.staticDescriptionControl.value,
          type: null
        }
      ]
    };

    this.store.dispatch(createIpAddress({
      payload
    }));

    this.staticFormGroup.reset();
  }

  public rangeSubmit(): void {
    const ipFrom: string[] = this.rangeIpFromControl.value.split(".");
    const ipTo: string[] = this.rangeIpToControl.value.split(".");

    if(parseInt(ipFrom[ipFrom.length - 1]) < parseInt(ipTo[ipTo.length - 1])) {
      const payload: IAdministrationIpAddressDTO = {
        companyId: null,
        action: "INSERT",
        ips: [
          {
            address: `(${ipFrom[0]})\\.(${ipFrom[1]})\\.(${ipFrom[2]})\\.(${this.utilService.getRegularExpression(ipFrom[3], ipTo[3])})$`,
            description: this.rangeDescriptionControl.value,
            type: `(${ipFrom[3]}|${ipTo[3]})`
          }
        ]
      };

      this.store.dispatch(createIpAddress({ payload }));

      this.rangeFormGroup.reset();
    } else {
      this.rangeFormGroup.setErrors({ initialValueGreaterThanDestination: "El rango de IPs ingresadas está mal registrado, la IP Inicio, debe ser menor a la IP final" });
    }
  }

  public goToModule(module: string): void {
    this.router.navigate(["/", module]).then(() => {
      const currentRoute = this.router.url;

      this.router.navigateByUrl("/administration", { skipLocationChange: true }).then(() =>
        this.router.navigate([currentRoute])
      );
    });
  }

  public cancel(): void {
    this.goToModule("administracion");
  }
}
