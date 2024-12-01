import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications-ventana',
  templateUrl: './notifications-ventana.component.html',
  styleUrls: ['./notifications-ventana.component.css']
})
export class NotificationsVentanaComponent {
  items = [
    { content: 'Contenido 1', isVisible: true },
    { content: 'Contenido 2', isVisible: true },
    { content: 'Contenido 3', isVisible: true }
  ];



  public toggleDivVisibility(index: number): void {
    this.items[index].isVisible = !this.items[index].isVisible;
  }
}
