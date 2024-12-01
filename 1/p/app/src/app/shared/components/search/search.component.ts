import { Component, HostListener, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() public indication: string = "(Introduce un valor y presione enter)";
  @Input() public hasCleanButton: boolean = false;
  @Input() public hasSearchButton: boolean = true;
  @Input() public inputPlaceholder: string = "Buscar por un valor";
  @Input() public regex!: RegExp;
  @Input() public searchPlate = false;
  @Output() public submitSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() public cleanEmmiter: EventEmitter<void> = new EventEmitter<void>();
  @Output() public cleanFormControlEmmiter: EventEmitter<() => void> = new EventEmitter<() => void>();

  public searchControl: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    const validators = this.searchPlate ? [Validators.pattern(this.regex), this.customValidator()] : [Validators.pattern(this.regex)];
    this.searchControl = new FormControl("", validators);
    this.evaluarFormulario();
    this.cleanFormControlEmmiter.emit(this.cleanFormControl.bind(this));
  }

  @HostListener("document:keydown.enter")
  public submit(): void {
    this.submitSearch.emit(this.searchControl.value.trim());
  }

  public clean(): void {
    this.searchControl.reset();
    this.cleanEmmiter.emit();
  }

  public cleanFormControl(): void {
    this.searchControl.reset();
  }

  public customValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const regex = /^[a-zA-Z]{3}[0-9]{3}$/;
      const valid = regex.test(value);
      return valid ? null : { customValidator: true };
    };
  }

  public evaluarFormulario(){
    if (this.searchPlate){
      this.searchControl.valueChanges.subscribe({
        next: (value: string) => {
          
          if(!value) this.searchControl.setErrors({ searchFormatInvalid: "searchFormatInvalid" });
          else this.searchControl.setErrors(null);
          
        },
        error: error => console.error(error)
      });
    }
  }
}
