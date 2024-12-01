import { createReducer, on } from "@ngrx/store";
import { IDocumentHistory } from "src/app/core/interfaces/document-history.interface";
import { IDocumentObservations } from "src/app/core/interfaces/document-observations.interface";
import { IDocument } from "src/app/core/interfaces/document.interface";
import { IDocumentalRequest } from "src/app/core/interfaces/documental-request.interface";
import { IDocumentalStore } from "src/app/core/interfaces/documental-store.interface";
import { IDocumentationRequestInformation } from "src/app/core/interfaces/documentation-request-information.interface";
import { IFile } from "src/app/core/interfaces/file.interface";
import { addCancelRequestTime, addComment, addRequestTime, approveInformation, changeComment, changeFileStatus, changeNotifyState, cleanDocumentations, clearComment, clearRequestTime, closeDocumentationInformation, disapproveDocumentation, disapproveInformation, rejectNoChecked, resetDocumentationsSuccessfully, saveApproveDocumentation, saveDateEnd, saveDisapproveDocumentation, saveDocumentation, saveDocumentationInformation, saveDocumentations, SaveRejectedWarning, saveRequestTime, saveUnlockInformation, setUpdateAt } from "./documental.actions";
import * as moment from 'moment-timezone';

export const initialState: IDocumentalStore = {
    documentations: [],
    information: null,
    approved: false,
    history: {
        date: "",
        note: "",
        user: ""
    },
    requestTime: null,
    rejectWarning: false
};

export const documentalReducer = createReducer(
    initialState,
    on(saveDocumentation, (state, action) => {
        let newState: IDocumentalStore = Object.assign({}, state);

        if(action.documentations) newState.documentations = [...action.documentations];
        else newState.documentations = [];

        return newState;
    }),
    on(cleanDocumentations, (state, action) => {
      let newState: IDocumentalStore = Object.assign({}, state);

      newState.documentations = [];

      return newState;
    }),
    on(saveDocumentations, (state, action) => {
        let newState: IDocumentalStore = Object.assign({}, state);

        if(action.documentations)
        newState.documentations = [...newState.documentations, ...action.documentations];

        return newState;
    }),
    on(saveDocumentationInformation, (state, action) => {
            let newState: IDocumentalStore = Object.assign({}, state);

            if(action.information) {
              newState.information = action.information;
              newState.information.files = newState.information.files.sort((previous, next) => previous.fileName.order - next.fileName.order);

              newState.information.files.forEach(document => {
                document.files.sort((previous, next) => previous.id - next.id);
              });
            }

            return newState;
        }
    ),
    on(saveApproveDocumentation, saveDisapproveDocumentation,
      (state, action) => {
          let newState: IDocumentalStore = Object.assign({}, state);

          if(action.information) newState.information = null;

          return newState;
      }
  ),
    on(closeDocumentationInformation, saveUnlockInformation, state => {
        let newState: IDocumentalStore = Object.assign({}, state);

        newState.information = null;

        return newState;
    }),
    on(changeNotifyState, (state, action) => {
        let newState: IDocumentalStore = Object.assign({}, state);

        newState.approved = action.state;

        return newState;
    }),
    on(changeComment, (state, action) => {
        let newState: IDocumentalStore = Object.assign({}, state);

        newState.history = action.history;

        return newState;
    }),
    on(clearComment, (state) => {
        let newState: IDocumentalStore = Object.assign({}, state);

        newState.history = {
            date: "",
            note: "",
            user: ""
        }

        return newState;
    }),
    on(changeFileStatus, (state, action) => {
        let newState: IDocumentalStore = Object.assign({}, state);

        if(newState.information) {
            newState.information.files.forEach((document: IDocument) => {
                document.files = document.files.map((file: IFile) => {
                    let newFile = Object.assign({}, file);

                    if(file.id == action.id) {
                        if(action.mode) {
                            newFile.approved = action.checked;

                            return newFile;
                        } else {
                            newFile.rejected = action.checked;

                            return newFile;
                        }
                    }

                    return file;
                });
            });
        }

        return newState;
    }),
    on(addComment, (state, action) => {
        let newState: IDocumentalStore = Object.assign({}, state);

        if(newState.information) {
            let observations: IDocumentObservations =
                newState.information.observations ?
                JSON.parse(newState.information.observations) :
                { revision: [] };

            let newHistory: IDocumentHistory = action.history as IDocumentHistory;

            if(!newHistory.note.length) newHistory.note = action.approve ? "Documentación Desaprobada" : "Documentación Aprobada";
            newHistory.date = new Date().toISOString();

            observations.revision = [...observations.revision, newHistory];

            newState.information.observations = JSON.stringify(observations);
        }

        return newState;
    }),
    on(setUpdateAt, (state, action) => {
      let newState: IDocumentalStore = Object.assign({}, state);

      newState.information?.files.forEach(document => {
        if(document.id === action.documentID) {
          document.files.forEach(file => {
            if(file.id === action.fileID) {
              if(action.state === 'Approved') file.approvedAt = action.updateAt;
              else file.rejectedAt = action.updateAt;
            }
          });
        }
      });

      return newState;
    }),
    on(approveInformation, (state) => {
        let newState: IDocumentalStore = Object.assign({}, state);

        if(newState.information) newState.information.approved = true;

        return newState;
    }),
    on(disapproveInformation, (state) => {
        let newState: IDocumentalStore = Object.assign({}, state);

        if(newState.information) newState.information.approved = false;

        return newState;
    }),
    on(saveRequestTime, (state, action) => {
      let newState: IDocumentalStore = Object.assign({}, state);

      newState.requestTime = action.requestTime;

      return newState;
    }),
    on(addRequestTime, (state, action) => {
        let newState: IDocumentalStore = Object.assign({}, state);
        let newRequestTime: IDocumentationRequestInformation | null = newState.requestTime;

        if(newRequestTime) {
          newRequestTime.date_end = moment().tz("America/Bogota").format("YYYY/MM/DD HH:mm:ss");
          newRequestTime.end_state = action.approve ? "Disapproved" : "Approved";

          if(newState.information) {
              const oldRequestTime: IDocumentalRequest =
                  newState.information.requestTime ? JSON.parse(newState.information.requestTime) :
                  { tiempoSolicitud: [] };

              oldRequestTime.tiempoSolicitud = [...oldRequestTime.tiempoSolicitud, newRequestTime];

              newState.information.requestTime = JSON.stringify(oldRequestTime);
          }
        }

        return newState;
    }),
    on(addCancelRequestTime, (state, action) => {
      let newState: IDocumentalStore = Object.assign({}, state);
      let newRequestTime: IDocumentationRequestInformation | null = newState.requestTime;

      if(newRequestTime) {
        newRequestTime.date_end = moment().tz("America/Bogota").format("YYYY/MM/DD HH:mm:ss");
        newRequestTime.end_state = "Cancel";

        if(newState.information) {
            const oldRequestTime: IDocumentalRequest =
                newState.information.requestTime ? JSON.parse(newState.information.requestTime) :
                { tiempoSolicitud: [] };

            oldRequestTime.tiempoSolicitud = [...oldRequestTime.tiempoSolicitud, newRequestTime];

            newState.information.requestTime = JSON.stringify(oldRequestTime);
        }
      }

      return newState;
    }),
    on(clearRequestTime, (state, action) => {
        let newState: IDocumentalStore = Object.assign({}, state);

        newState.requestTime = null;

        return newState;
    }),
    on(rejectNoChecked, (state, action) => {
        let newState: IDocumentalStore = Object.assign({}, state);

        if(newState.information) {
            newState.information.files.forEach((document: IDocument) => {
                document.files = document.files.map((file: IFile) => {
                    const newFile = Object.assign({}, file);

                    if(!newFile.approved && !newFile.rejected) {
                        newFile.rejected = true;
                    }

                    return newFile;
                });
            });
        }

        return newState;
    }),
    on(SaveRejectedWarning, (state, action) => {
        let newState: IDocumentalStore = Object.assign({}, state);
        let rejectedCounter: number = 0;

        if(newState.information) {
            newState.information.files.forEach((document: IDocument) => {
                for(let file of document.files) {
                    if(!file.deleted) {
                      if(file.rejected || (!file.approved && !file.rejected)) rejectedCounter = ++rejectedCounter;
                    }
                }
            })
        }

        if(rejectedCounter > 0) newState.rejectWarning = true;
        else newState.rejectWarning = false;

        return newState;
    })
);
