import { Injectable } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class CustomDateAdapterService extends MomentDateAdapter {

  override getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
    return ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  }
}
