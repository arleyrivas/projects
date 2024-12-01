import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorypinstateService {

  private shouldReload = false;

  get shouldReloadComponent(): boolean {
    return this.shouldReload;
  }

  set shouldReloadComponent(value: boolean) {
    this.shouldReload = value;
  }

  resetState(): void {
    this.shouldReload = false;
  }


}
