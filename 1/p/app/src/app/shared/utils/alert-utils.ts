export interface Alert {
    message: string;
    showAlert: boolean;
    clase: string;
  }
  
  export function showAlertTime(alert: Alert, message: string, clase: string) {
    alert.message = message;
    alert.showAlert = true;
    alert.clase = clase;
  
    setTimeout(() => {
      alert.showAlert = false;
    }, 4000);
  }

  