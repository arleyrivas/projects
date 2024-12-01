import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IContainerizedLoad } from 'src/app/core/interfaces/containerized-load.interface';

interface IContainerTruckSelected {
  unitNbr: string;
  BlData: IContainerizedLoad,
  trucker: string | null;
  selected: boolean;
  disabled: boolean;
  checkbox?: MatCheckbox;
  control?: FormControl;
  cleanControl?: () => void;
}

@Component({
  selector: 'app-generate-pin-truck-unit',
  templateUrl: './generate-pin-truck-unit.component.html',
  styleUrls: ['./generate-pin-truck-unit.component.css']
})
export class GeneratePinTruckUnitComponent implements AfterViewInit {
  @ViewChild("checkbox") public checkbox!: MatCheckbox;
  @Output() public changeUnit: EventEmitter<IContainerTruckSelected> = new EventEmitter<IContainerTruckSelected>();
  @Input() public unit!: IContainerTruckSelected;
  @Input("consigneeId") public customerId!: string;
  truckValid: boolean = true;

  constructor(
    private readonly matSnackBar: MatSnackBar,
  ) {}

  ngAfterViewInit(): void {
    const newUnit: IContainerTruckSelected = Object.assign({}, this.unit);

    newUnit.checkbox = this.checkbox;

    this.changeUnit.emit(newUnit);
  }

  public addTruckToContainer(value: string): void {
    const newUnit: IContainerTruckSelected = Object.assign({}, this.unit);

    newUnit.trucker = value;
    this.unit = newUnit;
  }

  public matChecboxUnitChange(event: MatCheckboxChange, element: MatCheckbox): void {
    const newUnit: IContainerTruckSelected = Object.assign({}, this.unit);

    if(newUnit.trucker && newUnit.trucker.split("/")[1]) {
        newUnit.selected = event.checked;
        if(this.truckValid){
          this.changeUnit.emit(newUnit);
        }
        
    } else {
      this.matSnackBar.open(
        "Error, no ha seleccionado contenedores o uno los seleccionados no tienen empresa de transporte asociada",
        "",
        {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        }
      );

      element.checked = false;
    }
  }

  public addTruckControl(value: FormControl): void {
    const newUnit: IContainerTruckSelected = Object.assign({}, this.unit);

    newUnit.control = value;
    newUnit.cleanControl = this.addTruckToContainer.bind(this, "");

    this.unit = newUnit;
    if (value.errors) {
      this.truckValid = false;
    } else{
      this.truckValid = true;
    }
  }
}
