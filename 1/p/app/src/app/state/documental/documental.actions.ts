import { createAction, props } from "@ngrx/store";
import { NgScrollbar } from "ngx-scrollbar";
import { IDocumentHistory } from "src/app/core/interfaces/document-history.interface";
import { IDocumentationInformation } from "src/app/core/interfaces/documentation-information.interface";
import { IDocumentationRequestInformation } from "src/app/core/interfaces/documentation-request-information.interface";
import { IDocumentation } from "src/app/core/interfaces/documentation.interface";
import { IPagination } from "src/app/core/interfaces/pagination.interface";

export const getAllDocumentation = createAction(
    "[Documental] Get All Documentations",
    props<{ pagination: IPagination }>()
);

export const searchDocumentation = createAction(
    "[Documental] Search Documentations",
    props<{ nbr: string }>()
);

export const saveDocumentations = createAction(
    "[Documental] Save Documentations",
    props<{ documentations: IDocumentation[] }>()
);

export const saveDocumentation = createAction(
    "[Documental] Save an Documentation",
    props<{ documentations: IDocumentation[] }>()
);

export const resetDocumentations = createAction(
    "[Documental] Reset Documentation List"
);

export const resetDocumentationsSuccessfully = createAction(
    "[Documental] Reset Documentation List successfully",
    props<{ documentations: IDocumentation[] }>()
);

export const cleanDocumentations = createAction(
  "[Documental] Clean Documentation List"
);

export const setUpdateAt = createAction(
  "[Documental] Set Update At",
  props<{ documentID: number, fileID: number, updateAt: number, state: string }>()
);

export const getDocumentationInformation = createAction(
    "[Documental] Get information of documentation",
    props<{ document: IDocumentation }>()
);

export const saveDocumentationInformation = createAction(
    "[Documental] Save information of documentation",
    props<{ information: IDocumentationInformation }>()
);

export const closeDocumentationInformation = createAction(
    "[Documental] Close Documentation Information"
);

export const changeNotifyState = createAction(
    "[Documental] Change State Of Notify",
    props<{ state: boolean }>()
);

export const changeComment = createAction(
    "[Documental] Change Comment",
    props<{ history: IDocumentHistory }>()
);

export const clearComment = createAction(
    "[Documental] Clear Comment"
);

export const changeFileStatus = createAction(
    "[Documental] Change File Statues",
    props<{ id: number, mode: boolean, checked: boolean }>()
);

export const approveDocumentation = createAction(
    "[Documental] Approve Documentation",
    props<{ information: IDocumentationInformation }>()
);

export const saveApproveDocumentation = createAction(
    "[Documental] Save Approve Documentation",
    props<{ information: IDocumentationInformation }>()
);

export const disapproveDocumentation = createAction(
    "[Documental] Disapprove Documentation",
    props<{ information: IDocumentationInformation }>()
);

export const saveDisapproveDocumentation = createAction(
    "[Documental] Save Disapprove Documentation",
    props<{ information: IDocumentationInformation }>()
);

export const addComment = createAction(
    "[Documental] Add Comments",
    props<{ history: IDocumentHistory | null, approve: boolean }>()
);

export const approveInformation = createAction(
    "[Documental] Approve Information"
);

export const disapproveInformation = createAction(
    "[Documental] Disapprove Information"
);

export const unlockInformation = createAction(
    "[Documental] Unlock Information",
    props<{ information: IDocumentationInformation | null }>()
);

export const saveUnlockInformation = createAction(
    "[Documental] Save Unlock Information"
);

export const saveRequestTime = createAction(
    "[Documental] Save Request Time",
    props<{ requestTime: IDocumentationRequestInformation }>()
);

export const saveDateEnd = createAction(
    "[Documental] Save Date End",
    props<{ date: string }>()
);

export const addRequestTime = createAction(
    "[Documental] Add Request Time",
    props<{ requestTime: IDocumentationRequestInformation | null, approve: boolean }>()
);

export const addCancelRequestTime = createAction(
  "[Documental] Add Cancel Request Time"
);

export const clearRequestTime = createAction(
    "[Documental] Clear Request Time"
);

export const rejectNoChecked = createAction(
    "[Documental] Reject No Checked"
);

export const SaveRejectedWarning = createAction(
    "[Documental] Save RejectedWarning"
);

export const requestListScrollToTop = createAction(
    "[Documental] Request List Scroll To Top",
    props<{ scrollable: NgScrollbar }>()
);

export const SuccessRequestListScrollToTop = createAction(
    "[Documental] Success Request List Scroll To Top",
    props<{ scrollable: NgScrollbar }>()
);
