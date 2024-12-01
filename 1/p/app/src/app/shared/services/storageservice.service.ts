import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subject } from 'rxjs';
import { IContainer } from 'src/app/core/interfaces/data-appointment-cc.interface';
import { IDetachedLoad } from 'src/app/core/interfaces/detached-load.interface';
import { IGrantGroupDetachedLoad } from 'src/app/core/interfaces/group-detached-load.interface';
import { cleanItemCheckeados, cleanItemCheckeadosContenerized, cleanPlate, cleanSharedLoad, cleanTruck, cleanTypeContainer, cleanValidationPin, cleanValidationPinContainerized, cleanValidationPinContainerizedIndividual, cleanValidationPinIndividual, deleteTypeContainer, setTypeContainer } from 'src/app/state/shared/shared.actions';
interface StorageAction {
  action: string;
  key?: string;
  value?: any;
  operation?: string;
  id?: string;
  hbl?: string;
  unds?: number;
  unitSequence?: number;
  placa?: string;
  unitNbr?: string;
  category?: string;
  origin?: string;
  pin?: string;
  pinOrBooking?: string;
  isoType?: string;
  retiro?: boolean;
  eroNbr?: string;
  edoNbr?: string;
  line?: string;
  siteAppointment?: string;
  holdConsigneeActive?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StorageserviceService {
  
  private storageSubject =  new Subject<StorageAction>();
  private origen: any;
  private isCleanAppointmentCard: boolean = false;
  private containersSelected: {id: string, size: number, type: string, pinOrBooking: string | null}[] = [];
  private siteAppointment: string[] = [];
  
  constructor(private readonly store: Store) { }


  clearStorageValidationPin(isViewEditAppointment: boolean = false) {
    // Elimina los datos del storage
    //if (!isViewEditAppointment){
      this.store.dispatch(cleanValidationPin());
      this.store.dispatch(cleanValidationPinContainerized()); 
    //}
    
    this.store.dispatch(cleanItemCheckeados());
    this.store.dispatch(cleanItemCheckeadosContenerized());
    this.store.dispatch(cleanTypeContainer());
    this.clearContainersSelected();
    this.clearSiteAppointment();
    this.storageSubject.next({ action: 'cleanValidationPin', value: isViewEditAppointment }); // Notifica a los suscriptores
  }

  clearStorageValidationPinIndividual(pin: string, isViewEditAppointment: boolean = false, isMakeAppointmentCC: boolean = false) {
    // Elimina los datos del storage
    //(!isViewEditAppointment){
      if(isMakeAppointmentCC){
        this.store.dispatch(deleteTypeContainer({ pinOrBooking: pin }));
      }
      
      this.store.dispatch(cleanValidationPinIndividual({pin: pin}));
      this.store.dispatch(cleanValidationPinContainerizedIndividual({pin: pin}));
    //}
    this.storageSubject.next({ action: 'cleanValidationPinIndividual', key: pin, value:isViewEditAppointment }); // Notifica a los suscriptores
  }
  setInicio(value: boolean) {
    
    this.storageSubject.next({ action: 'setInicio', value: value });
    
  }

  setPlacaValida(value: boolean, placa: string) {
    this.storageSubject.next({ action: 'setPlacaValida', value: value, placa: placa });
  }

  setCantidadCarga(value: number, operation: string, id:string, hbl: string, unds: number, unitSequence: number, placa: string, unitNbr: string,
    viewOrigin: string = "", pin: string = "", holdConsigneeActive: boolean = false
  ) {
    this.storageSubject.next({ action: 'setCantidadCarga', value: value, operation: operation, id: id, hbl: hbl, unds:unds, unitSequence: unitSequence, placa: placa,
      unitNbr: unitNbr, origin: viewOrigin, pin: pin, holdConsigneeActive: holdConsigneeActive
      
     });
  }

  
  setCheckedMatCheckbox(value: boolean, id:string) {
    this.storageSubject.next({ action: 'setCheckedMatCheckbox', value: value, id: id });
  }
  cleanPlaca(){
    this.store.dispatch(cleanValidationPin());
    this.store.dispatch(cleanPlate());
    this.store.dispatch(cleanItemCheckeados());
    this.store.dispatch(cleanTruck());
    this.store.dispatch(cleanSharedLoad());
    this.storageSubject.next({ action: 'cleanPlaca' });
  }
  setIntermedio(){
    this.storageSubject.next({ action: 'setIntermedio' });
  }
  cleanValues(){
    this.storageSubject.next({ action: 'cleanValues' });
  }
  setCapacityTruck(value: number) {
    this.storageSubject.next({ action: 'setCapacityTruck', value: value });
  }

  setDisponibilityTruck(value: string, viewOrigin: string = "") {
    this.storageSubject.next({ action: 'setDisponibilityTruck', value: value, origin: viewOrigin });
  }

  setCapacityTruckDos(value: string) {
    this.storageSubject.next({ action: 'setCapacityTruckDos', value: value });
  }

  cleanAll(){
    this.storageSubject.next({ action: 'cleanAll' });
  }

  appointmentWasCreated(){
    this.storageSubject.next({ action: 'appointmentWasCreated' });
  }

  continueOperation(){
    this.storageSubject.next({ action: 'continueOperation' });
  }

  setPlaca(placa: string) {
    this.storageSubject.next({ action: 'setPlaca', placa: placa });
  }

  viewEditAppointment() {
    this.storageSubject.next({ action: 'viewEditAppointment'});
  }

  viewEditAppointmentCC(value: IContainer[]) {
    this.storageSubject.next({ action: 'viewEditAppointmentCC', value: value});
  }

  viewCreateAppointment() {
    this.storageSubject.next({ action: 'viewCreateAppointment'});
  }
  

  getStorageChanges() {
    return this.storageSubject.asObservable();
  }

  setTecnomecanica(value: string) {
    this.storageSubject.next({ action: 'setTecnomecanica', value: value });
  }

  setSoat(value: string) {
    this.storageSubject.next({ action: 'setSoat', value: value });
  }

  setPin(value: string) {
    this.storageSubject.next({ action: 'setPin', value: value });
  }

  setDataPin(value: any){
    this.storageSubject.next({action: 'setDataPin', value: value});
  }

  setResetItemCheckeados(value: boolean) {
    this.storageSubject.next({ action: 'setResetItemCheckeados', value: value });
  }
  showHistoryAppointment(value: boolean) {
    this.storageSubject.next({ action: 'showHistoryAppointment', value: value });
  }

  setData(data: any) {
    this.origen = data;
  }
  getData() {
   const currentOrigen = this.origen;
   this.origen = null;
   return currentOrigen;  
  }
  showAppointmentCard(value: boolean) {
    if(value){
      this.store.dispatch(cleanTypeContainer());
      this.clearContainersSelected();
    }
    this.storageSubject.next({ action: 'showAppointmentCard', value: value });
  }

  setContanerized(value: boolean) {
    this.storageSubject.next({ action: 'setContanerized', value: value });
  }

  setContenedorType(value: number, operation: string, id:string, category: string, pinOrBooking: string | null = null, isoType: string | null = null, retiro: boolean = false, edoNbr: string | null = null,
    eroNbr: string | null = null, line: string | null, siteAppointment: string | null, holdConsigneeActive: boolean = false
  ) {
    this.store.dispatch(setTypeContainer({data: {value: value, operation: operation, id: id, category: category, pinOrBooking: pinOrBooking, holdConsigneeActive: holdConsigneeActive, siteAppointment:siteAppointment? siteAppointment: ""}}));
    this.storageSubject.next({ action: 'setContenedorType', value: value, operation: operation, id: id, category: category, pinOrBooking: pinOrBooking ? pinOrBooking: "", isoType: isoType? isoType: "",
      retiro: retiro? retiro : false, edoNbr: edoNbr? edoNbr: "", eroNbr: eroNbr? eroNbr: "", line: line? line: "", siteAppointment: siteAppointment? siteAppointment: ""
     });
  }

  setPrivateTransport(value: boolean) {
    this.storageSubject.next({ action: 'setPrivateTransport', value: value });
  }

  setBloqueoCheckbox(value: boolean, category: string, type: string) {
    this.storageSubject.next({ action: 'setBloqueoCheckbox', value: value, category: category, key: type });
  }

  setBooking(value: boolean) {
    this.storageSubject.next({ action: 'setBooking', value: value });
  }

  setAsoaciateContainer(value: boolean) {
    this.storageSubject.next({ action: 'setAsoaciateContainer', value: value });
  }

  setDisassociateContainer(value: boolean) {
    this.storageSubject.next({ action: 'setDisassociateContainer', value: value });
  }

  deleteContainer(value: boolean) {
    this.storageSubject.next({ action: 'deleteContainer'});
  }

  addContainerSelected(id: string, size: number, type: string, pinOrBooking: string | null = null) {
    this.containersSelected.push({id: id, size: size, type: type, pinOrBooking: pinOrBooking});
  }

  getContainersSelected() {
    return this.containersSelected;
  }

  setContainersSelected(containers: {id: string, size: number, type: string, pinOrBooking: string | null}[]) {
    this.containersSelected = containers;
  }

  clearContainersSelected() {
    this.containersSelected = [];
    this.clearSiteAppointment();
  }

  addSiteAppointment(name: string){
    this.siteAppointment.push(name);
  }

  setSiteAppointment(list: string[]){
    this.siteAppointment = list;
  }

  getSiteAppointment() {
    return this.siteAppointment;
  }

  clearSiteAppointment(){
    this.siteAppointment = [];
  }

  setDate(value: boolean){
    this.storageSubject.next({ action: 'setDate', value: value });
  }

  cleanAssociateContainerForm(){
    this.storageSubject.next({ action: 'cleanAssociateContainerForm' });
  }

  setNavigateToContainerDocumentation(value: boolean) {
    this.storageSubject.next({ action: 'setNavigateToContainerDocumentation'});
  }

  setDisponibilityTruckByHistory(value: string) {
    this.storageSubject.next({ action: 'setDisponibilityTruckByHistory', value: value });
  }

  setIsEditInMakeAppointment(){
    this.storageSubject.next({action: 'setIsEditInMakeAppointment'})
  }

  cleanMakeAppointment(){
    this.storageSubject.next({action: 'cleanMakeAppointment'})
  }

}
