import { Directive, EventEmitter, Output, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appAfterIf]'
})
export class AfterIfDirective implements AfterContentInit {
  @Output('appAfterIf')
  public after: EventEmitter<void> = new EventEmitter<void>();

  ngAfterContentInit(): void {
     setTimeout(()=> this.after.next());
  }
}
