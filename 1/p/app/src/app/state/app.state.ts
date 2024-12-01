import { DocumentalEffects } from "./documental/documental.effects";
import { UserEffects } from "./user/user.effects";
import { ContainerizedLoadReducer } from "./containerized-load/containerized-load.reducer";
import { documentalReducer } from "./documental/documental.reducer";
import { paginationReducer } from "./pagination/pagination.reducer";
import { userReducer } from "./user/user.reducer";
import { ContainerizedLoadEffects } from "./containerized-load/containerized-load.effects";
import { DetachedLoadReducer } from "./detached-load/detached-load.reducer";
import { DetachedLoadEffects } from "./detached-load/detached-load.effects";
import { QueriesEffects } from "./queries/queries.effects";
import { queriesReducer } from "./queries/queries.reducer";
import { BillingEffects } from "./billing/billing.effects";
import { billingReducer } from "./billing/billing.reducer";
import { HistoryCrossEffects } from "./history-cross/history-cross.effects";
import { historyCrossReducer } from "./history-cross/history-cross.reducer";
import { CreditNotesEffects } from "./credit-notes/credit-notes.effects";
import { creditNotesReducer } from "./credit-notes/credit-notes.reducer";
import { SharedEffects } from "./shared/shared.effects";
import { sharedReducer } from "./shared/shared.reducer";
import { AdministrationEffects } from "./administration/admistration.effects";
import { administrationReducer } from "./administration/administration.reducer";
import { APIGatewayEffects } from "./api-gateway/api-gateway.effects";
import { apiGatewayReducer } from "./api-gateway/api-gateway.reducer";
import { payuReducer } from "./payu/payu.reducer";
import { PayuEffects } from "./payu/payu.effects";
import { ServicesEffects } from "./services/services.effects";
import { servicesReducer } from "./services/services.reducer";
import { ServiceOrderEffects } from "./service-order/service-order.effects";
import { serviceOrderReducer } from "./service-order/service-order.reducer";
import { historyReducer } from "./history/history.reducer";
import { HistoryEffects } from "./history/history.effects";

export const BUSINESS_PORTAL_EFFECTS = [
    UserEffects,
    DocumentalEffects,
    ContainerizedLoadEffects,
    DetachedLoadEffects,
    QueriesEffects,
    BillingEffects,
    HistoryCrossEffects,
    CreditNotesEffects,
    SharedEffects,
    AdministrationEffects,
    APIGatewayEffects,
    PayuEffects,
    ServicesEffects,
    ServiceOrderEffects,
    HistoryEffects
];

export const BUSINESS_PORTAL_REDUCERS = {
    user: userReducer,
    documental: documentalReducer,
    pagination: paginationReducer,
    containerizedLoad: ContainerizedLoadReducer,
    detachedLoad: DetachedLoadReducer,
    queries: queriesReducer,
    billing: billingReducer,
    historyCross: historyCrossReducer,
    creditNotes: creditNotesReducer,
    shared: sharedReducer,
    administration: administrationReducer,
    apiGateway: apiGatewayReducer,
    payu: payuReducer,
    services: servicesReducer,
    serviceOrder: serviceOrderReducer,
    history: historyReducer
};
