import { Directive, ElementRef, Renderer2, AfterViewInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appCustomDay]'
})
export class CustomDayDirective implements AfterViewInit, OnChanges {
  private observer!: MutationObserver;
  @Input() public monthCalendar!: string;
  @Input() specialDay!: string[];
  @Input() selectedDate: Date | null = null;
  @Input() hourSelected: string = "";
  @Output() dateCleared: EventEmitter<void> = new EventEmitter<void>();

  private specialDaysArray: any[] = [];
  public monthRepresentado: number = 0;
  public text: string = 'Turnos disponibles';

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  

  ngOnChanges(): void {
    if (this.selectedDate) {
      const nativeElement = this.el.nativeElement;
      const cells = nativeElement.querySelectorAll('.mat-calendar-body-cell-content');
      
      cells.forEach((cell: HTMLElement) => {
        let dayText = cell?.innerText;
        const dayTextSelectedDate = this.selectedDate?.getDate().toString();
        //si dayText tiene la palabra Turnos disponibles, quitarsela y dejar solo el numero del dia
        if (dayText?.includes(this.text)) {
           dayText= dayText.replace(this.text, '');
        }
        
        if (dayText && !isNaN(Number(dayText)) && dayTextSelectedDate && !isNaN(Number(dayTextSelectedDate))) {
          const day = Number(dayText);
          const daySelectedDate = Number(dayTextSelectedDate);
          if (day === daySelectedDate) {
            const closeButton = this.renderer.createElement('button');
            this.renderer.addClass(closeButton, 'close-button');
            this.renderer.listen(closeButton, 'click', () => {
              this.clearSelectedDate();
            });
            const spanElement = cell.querySelector('span');
            if (spanElement &&  spanElement.innerText.includes(this.text)  && this.hourSelected) {
              const hourInitial = this.hourSelected.split('a')[0];
              const existingText = this.renderer.createText(hourInitial);
              this.renderer.appendChild(spanElement, this.renderer.createText(' ')); // Añadir un espacio
              this.renderer.appendChild(spanElement, existingText);
            }
            const closeIcon = this.renderer.createElement('mat-icon');
            this.renderer.appendChild(closeIcon, this.renderer.createText('X'));
            this.renderer.appendChild(closeButton, closeIcon);
            this.renderer.appendChild(cell, closeButton);
           
          }else{
            //si entra por aqui se debe quitar el boton de cerrar, si lo tiene
            const closeButton = cell.querySelector('.close-button');
            if (closeButton) {
              this.renderer.removeChild(cell, closeButton);
              const spanElement = cell.querySelector('span');
              if (spanElement && this.hourSelected) {
                const hourInitial = this.hourSelected.split('a')[0];
                const text = spanElement.innerText;
                if (text){
                  spanElement.innerText = this.text;
                  this.hourSelected = "";
                }
              }
            }
          }
        }else{
          const closeButton = cell.querySelector('.close-button');
          if (closeButton) {
            this.renderer.removeChild(cell, closeButton);
            const spanElement = cell.querySelector('span');
            if (spanElement && this.hourSelected) {
              const hourInitial = this.hourSelected.split('a')[0];
              const text = spanElement.innerText;
              if (text){
                spanElement.innerText = this.text;
                this.hourSelected = "";
              }
            }
          }
        }
      });
    }
    else{
      const nativeElement = this.el.nativeElement;
      const cells = nativeElement.querySelectorAll('.mat-calendar-body-cell-content');

      cells.forEach((cell: HTMLElement) => {
        const closeButton = cell.querySelector('.close-button');
          if (closeButton) {
            this.renderer.removeChild(cell, closeButton);
            const spanElement = cell.querySelector('span');
            if (spanElement && this.hourSelected) {
              const hourInitial = this.hourSelected.split('a')[0];
              const text = spanElement.innerText;
              if (text){
                spanElement.innerText = this.text;
                this.hourSelected = "";
              }
            }
          }
      });
    }
  }

  clearSelectedDate(): void {
    this.selectedDate = null;
    this.dateCleared.emit();
  }

  ngAfterViewInit() {
    this.observeChanges();
  }

  public observeChanges(): void {
    this.paintDayOfWeek();
    this.hideMonthName();
    this.addCustomText(); 
    this.observer = new MutationObserver(mutations => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          
          this.paintDayOfWeek();
          this.hideMonthName();
          this.addCustomText();
        }
      });
    });

    this.observer.observe(this.el.nativeElement, {
      childList: true,
      subtree: true
    });
  }

  public addCustomText(): void {
    const cells: NodeListOf<Element> = this.el.nativeElement.querySelectorAll('.mat-calendar-body-cell');
    cells.forEach((cell: Element) => {
      const cellContent = cell.querySelector('.mat-calendar-body-cell-content') as HTMLElement;
      const dayText = cellContent?.innerText;
      const month = moment().month();
     
      
      if (dayText && !isNaN(Number(dayText))) {
        const day = Number(dayText);
       
        if (this.isSpecialDay(day, this.monthRepresentado)) {
          const customText = this.renderer.createElement('span') as HTMLElement;
          this.renderer.setStyle(customText, 'position', 'absolute');
          this.renderer.setStyle(customText, 'bottom', '33px');
          this.renderer.setStyle(customText, 'left', '50%');
          this.renderer.setStyle(customText, 'transform', 'translateX(-50%)');
          this.renderer.setStyle(customText, 'font-size', '15px');
          this.renderer.setStyle(customText, 'color', '#ECECEC');
          this.renderer.setStyle(customText, 'background-color', '#92B975');
          const text = this.renderer.createText(this.text);
          this.renderer.appendChild(customText, text);
          this.renderer.appendChild(cellContent, customText);
          this.renderer.setStyle(cellContent, 'background-color', '#92B975');
          this.renderer.setStyle(cellContent, 'color', '#ECECEC');
        }
      }
      
    });

  }

  public isSpecialDay(day: number, month: number): boolean {
    this.specialDaysArray = [];
    if (this.specialDay){
      this.specialDay.forEach((element) => {
        const partes = element.split('-');
        const diaString = partes[0];
        const mesString = partes[1];
        const diaNumero = parseInt(diaString, 10);
        const mesNumero = parseInt(mesString, 10);
        this.specialDaysArray.push({ dia: diaNumero, mes: mesNumero });
      });
    }
    return this.specialDaysArray.some(specialDay => specialDay.dia === day && specialDay.mes === month);
  }

  // metodo para pintar el dia de la semana actual en el header del calendario
  public paintDayOfWeek() {
    const headerCells: NodeListOf<Element> = this.el.nativeElement.querySelectorAll('.mat-calendar-table-header');
    headerCells.forEach((cell: Element, index: number) => {
      const fileWeek = cell.querySelector('tr') as HTMLElement;
      const files = cell.querySelectorAll('tr');
      const lineHeader = files[1] as HTMLElement;  
      if (lineHeader){
        this.renderer.setStyle(lineHeader, 'display', 'none');
      }
      const ths = fileWeek.querySelectorAll('th');
      ths.forEach((th: Element, index: number) => {
        const selectorSpan = th.querySelectorAll('span');
        const span = selectorSpan[1] as HTMLElement;
        const dayText = span?.innerText;
        const month = moment().month();
        const monthText = moment().locale('es').month(month).format('MMMM');

        if (dayText) {
          const currentDayIndex = (moment().day() + 6) % 7;
          if ((index === currentDayIndex) && (this.monthCalendar === monthText)) {
            //this.renderer.setStyle(span, 'background-color', '#8EAB49');
            this.renderer.setStyle(span, 'background-color', '#92B975');
            this.renderer.setStyle(span, 'font-size', '15px');
            this.renderer.setStyle(span, 'color', '#ECECEC');
            
          }else{
            this.renderer.setStyle(span, 'font-size', '15px');
          }
        }
      });

    });
  }

  

  // metodo para ocultar el nombre del mes en el calendario
  public hideMonthName() {
    const monthAbbreviationToNumber: { [key: string]: number } = {
      'ENE.': 1,
      'FEB.': 2,
      'MAR.': 3,
      'ABR.': 4,
      'MAY.': 5,
      'JUN.': 6,
      'JUL.': 7,
      'AGO.': 8,
      'SEP.': 9,
      'OCT.': 10,
      'NOV.': 11,
      'DIC.': 12
    };
    const headerCells: NodeListOf<Element> = this.el.nativeElement.querySelectorAll('.mat-calendar-body');
    headerCells.forEach((cell: Element) => {
      const files = cell.querySelectorAll('tr');
      const abreviationMonth = files[0] as HTMLElement;
      if (abreviationMonth){
        const monthText = abreviationMonth.querySelectorAll('td')[0].innerText.trim();
        const tdMonth = abreviationMonth.querySelectorAll('td')[0] as HTMLElement;
        const monthNumber = monthAbbreviationToNumber[monthText];
        this.monthRepresentado = monthNumber;
        if (tdMonth){
          this.renderer.setStyle(tdMonth, 'visibility', 'hidden');
        }
        
      }
    });
  }

 
  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
