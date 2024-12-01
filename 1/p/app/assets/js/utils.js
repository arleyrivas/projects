/**
 * Construye una órden para generar appointment a partir del pin.
 */
function constructByPin(orders){
	var order = {};
	order.generation = "PIN";
	order.createdAt = orders[0].createdAt;
	order.createdBy = orders[0].createdByLDAP;
	order.nbr = orders[0].pinNbr;
	order.isExpo = orders[0].bkgNbr !== null || orders[0].eroNbr !== null;
	order.units = [];
	var isEdo=false;
	var isEro=false;
	for (var i = 0; i < orders[0].pinContainerized.length; i++){
		order.units.push({nbr: orders[0].pinContainerized[i].unitNbr, twenty: orders[0].pinContainerized[i].twenty, equipmentType : orders[0].pinContainerized[i].isoType, isReefer: orders[0].pinContainerized[i].isReefer, isHazard: orders[0].pinContainerized[i].isHazard, typeDocument: orders[0].pinContainerized[i].typeDocument, siteAppointment: orders[0].pinContainerized[i].siteAppointment});
		isEdo = isEdo || ((typeof (orders[0].edoNbr) !== "undefined") && orders[0].edoNbr !== null  && orders[0].edoNbr !== "");
		isEro = isEro || ((typeof (orders[0].eroNbr) !== "undefined") && orders[0].eroNbr !== null && orders[0].eroNbr !== "");
	}
	if(isEdo){
		order.orderType = "Orden de Retiro";
		order.orderTypeNbr = orders[0].edoNbr;
	}else{
		if(isEro){
			order.orderType = "Orden de Ingreso";
			order.orderTypeNbr = orders[0].eroNbr;
		}else{
			if(order.isExpo){
				order.orderType = "EXPO";
			}else{
				order.orderType = "IMPO";
			}
			order.orderTypeNbr = orders[0].pinNbr;
		}
	}
	order.isEdo=isEdo;
	return order;
}

function constructByPinService(orders, response){
	var order = {};
	order.type_pin = orders[0].type_pin;
	order.generation = "PIN";
	order.createdAt = orders[0].createdAt;
	order.createdBy = orders[0].createdByLDAP;
	order.nbr = orders[0].pinNbr;
	order.isExpo = orders[0].bkgNbr !== "" || orders[0].eroNbr !== "";
	order.units = [];
	var isEdo=false;
	var isEro=false;
	for (var i = 0; i < orders[0].pinContainerized.length; i++){
		for (var j = 0; j < response.length; j++){
			if(response[j].unitNbr == orders[0].pinContainerized[i].unitNbr)
			{
				order.units.push({nbr: orders[0].pinContainerized[i].unitNbr, twenty: orders[0].pinContainerized[i].twenty, equipmentType : orders[0].pinContainerized[i].isoType, tva: response[j].truckVisit, oea: response[j].oea, holdUnitActive: response[j].holdUnitActive, holdConsigneeActive: response[j].holdConsigneeActive, emptyRuleActive : false, description : "", manifestNbr: response[j].manifestNbr, isReefer: response[j].isReefer, isHazard: response[j].isHazard, typeDocument: response[j].typeDocument, siteAppointment: response[j].siteAppointment, vesselVisitId:response[j].vesselVisitId, shipperId:response[j].shipperId, line:response[j].line });
				isEdo = isEdo || ((typeof (orders[0].edoNbr) !== "undefined") && orders[0].edoNbr !== null  && orders[0].edoNbr !== "");
				isEro = isEro || ((typeof (orders[0].eroNbr) !== "undefined") && orders[0].eroNbr !== null && orders[0].eroNbr !== "");
			}
		}
	}
	if(isEdo){
		order.orderType = "Orden de Retiro";
		order.orderTypeNbr = orders[0].edoNbr;
	}else{
		if(isEro){
			order.orderType = "Orden de Ingreso";
			order.orderTypeNbr = orders[0].eroNbr;
		}else{
			if(order.isExpo && order.type_pin !== "1"){
				order.orderType = "EXPO";
			}else{
				order.orderType = "IMPO";
			}
			order.orderTypeNbr = orders[0].pinNbr;
		}
	}
	order.isEdo=isEdo;
	return order;
}

/**
 * Construye una órden para generar appointment a partir del ero.
 */
function constructByEro(orders){
	var order = {};
	order.generation = "ERO";
	order.orderType = "Orden de Ingreso";
	order.nbr = orders.number;
	order.isExpo = true;
	order.units = [];
	order.orderTypeNbr = orders.number;
	for (var i = 0; i < orders.units.length; i++){
		order.units.push({nbr: orders.units[i].id, twenty: orders.units[i].container.type.startsWith(2), equipmentType : orders.units[i].container.type});
	}
	return order;
}

/**
 * Construye una órden para generar appointment a partir del ero.
 */
function constructByEroService(orders){
	var order = {};
	order.generation = "ERO";
	order.orderType = "Orden de Ingreso";
	order.nbr = orders[0].eroNbr;
	order.isExpo = true;
	order.units = [];
	order.orderTypeNbr = orders[0].eroNbr;
	for (var i = 0; i < orders.length; i++){
		order.units.push({nbr: orders[i].unitNbr, twenty: orders[i].twenty, equipmentType : orders[i].isoType, tva: orders[i].truckVisit, oea: orders[i].oea});
	}
	return order;
}

/**
 * Construye una órden para generar appointment a partir del edo.
 */
function constructByEdo(orders, dataValidation){
	var order = {};
	order.generation = "EDO";
	order.orderType = "Orden de Retiro";
	order.nbr = orders.number;
	order.isExpo = false;
	order.units = [];
	order.orderTypeNbr = orders.number;
	for (var i = 0; i < orders.units.length; i++){
		order.units.push({nbr: orders.units[i].id, twenty: orders.units[i].container.type.startsWith(2), equipmentType : orders.units[i].container.type, isUnit: false, truckingCompany: null});
		if(dataValidation !== ""){
			for(var j = 0; j < dataValidation.length; j++){
				if(order.units[i].nbr === dataValidation[j].unitNbr && dataValidation[j].hasPin){
					order.units[i].isPin=true;
					order.units[i].truckingCompany=dataValidation[j].pin.truckingCompanyNameLDAP;
				}
			}
		}
	}
	return order;
}

/**
 * Construye una órden para generar appointment a partir del booking.
 */
function constructByBooking(orders, dataValidation, vesselVisit){
	var order = {};
	order.generation = "Booking";
	order.orderType = "EXPO";
	order.nbr = orders.nbr;
	order.isExpo = true;
	order.units = [];
	order.orderTypeNbr = orders.nbr;
	for (var i = 0; i < orders.units.length; i++){
		order.units.push({nbr: orders.units[i].id, twenty: orders.units[i].container.type.startsWith(2), equipmentType : orders.units[i].container.type, isUnit: false, truckingCompany: null, vesselVisitId:vesselVisit.id, fechaCierreDocumental : vesselVisit.fechaCierreDocumental, 
			earlyArrival : vesselVisit.earlyArrival, shipperId : orders.shipperId, line: orders.line});
		if(dataValidation !== ""){
			for(var j = 0; j < dataValidation.length; j++){
				if(order.units[i].nbr === dataValidation[j].unitNbr && dataValidation[j].hasPin){
					order.units[i].isPin=true;
					order.units[i].truckingCompany=dataValidation[j].pin.truckingCompanyNameLDAP;
				}
			}
		}
	}
	return order;
}

/**
 * Construye una órden para generar appointment a partir del booking.
 */
function constructByBookingService(orders){
	var order = {};
	order.generation = "Booking";
	order.orderType = "EXPO";
	order.nbr =  orders[0].bookingNbr;
	order.isExpo = true;
	order.units = [];
	order.orderTypeNbr =  orders[0].bookingNbr;
	for (var i = 0; i < orders.length; i++){
		order.units.push({nbr: orders[i].unitNbr, twenty: orders[i].twenty, equipmentType : orders[i].isoType, isUnit: false, truckingCompany: null, vesselVisitId:orders[i].vesselVisitId, fechaCierreDocumental : orders[i].fechaCierreDocumental, 
			earlyArrival : orders[i].earlyArrival, shipperId : orders[i].shipperId, line: orders[i].line, tva: orders[i].truckVisit, oea: orders[i].oea, emptyRuleActive : orders[i].emptyRuleActive, description : orders[i].description, manifestNbr : orders[i].manifestNbr, gate : orders[i].gate, isReefer: orders[i].isReefer, isHazard: orders[i].isHazard, typeDocument: orders[i].typeDocument, siteAppointment: orders[i].siteAppointment});
	}
	return order;
}

/**
 * Construye una órden para generar appointment de carga suelta a partir del pin de carga suelta.
 */
function constructByBreakBulkPin(pins){
	var orders = [];
	for(var i = 0; i < pins.length; i++){
		var order = {};
		order.generation = "PIN";
		order.createdAt = pins[0].pin.createdAt;
		order.createdBy = pins[0].pin.createdByLDAP;
		order.nbr = pins[0].pin.pinNbr;
		order.isExpo = pins[0].pin.pinBreakBulk[0].category === "EXPORT";
		order.commodity = pins[0].pin.pinBreakBulk[0].commodity;
		order.totalQuantity = pins[0].pin.pinBreakBulk[0].quantity;
		order.availableQuantity = pins[0].pin.pinBreakBulk[0].quantity - pins[0].quantityCoordinated;
		orders.push(order);
	}
	return orders;
}


/**
 * Valida que los units a los que se les va a generar pin tengan transportista
 *
 * @param units
 * @returns {Array}
 */
function validateUnits(units){
	var validUnits = [];
	for (var i=0; i <= units.length - 1; i++){
		if (units[i].truckName.length > 0 && units[i].truckId.length > 0){
			validUnits.push({
								isoType: units[i].isoType,
								nbr: units[i].nbr,
								truckId: units[i].truckId,
								truckName: units[i].truckName,
								twenty: units[i].twenty,
								isoType : units[i].isoType
							}
			);
		}
	}
	return validUnits;
}

/**
 * Autocompleta todos los trucking company del formulario de pin.
 *
 * @param init
 * @param units
 * @param truckId
 * @param truckName
 * @returns
 */
function populateTruckingCompanies(init,units, truckId, truckName){
	for (var i=init; i <= units.length -1; i++){
 			units[i].truckId = truckId;
 			units[i].truckName = truckName;
	}
	return units;
}

/**
 * Retorna true si el unitNbr está agendado en la truckVisit.
 *
 * @returns {Boolean}
 */
function hasTruckVisit(unitNbr, truckVisit){
	if(unitNbr === truckVisit.firstContainerImport ||
	   unitNbr === truckVisit.secondContainerImport ||
	   unitNbr === truckVisit.firstContainerExport ||
	   unitNbr === truckVisit.secondContainerExport ||
	   unitNbr === truckVisit.firstContainerEdo ||
	   unitNbr === truckVisit.secondContainerEdo ||
	   unitNbr === truckVisit.firstContainerEro ||
	   unitNbr === truckVisit.secondContainerEro){
			return true;
	}
	return false;
}

/**
 * Actualiza los targetUnits, marcando que los que tienen pin generado por pinUnits ya tienen pin.
 *
 * @param targetUnits
 * @param pinUnits
 */
function markAsPin(targetUnits, pinUnits){
	for(var i = 0; i < targetUnits.length; i++){
		for(var j = 0; j < pinUnits.length; j++){
			if(targetUnits[i].id === pinUnits[j].unitNbr){
				targetUnits[i].isPin = true;
			}
		}
	}
}

/**
 * detecto si un elemento existe en la lista o no.
 * Creo la función indexOf porque para el ie puede no existir.
 *
 */
var indexOf = function(elm) {
    if(typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(elm) {
            var i = -1, index = -1;

            for(i = 0; i < this.length; i++) {
                if(this[i] === elm) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, elm);
};

/*
 * resaltador de sintaxis para los logs
 */

$(document).ready(function() {
	$('input').inputmask();
    document.onkeydown = function(e) {
            if (event.keyCode == 123) {
                return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
                return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
                return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
                return false;
            }
            if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
                return false;
            }
        }
});
if (hljs){
	hljs.registerLanguage('jbosslog', function(hljs) {
	  return {
	    contains: [
	      // IP
	      /*{
	        className: 'number',
	        begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
	      },*/
	      // Other numbers
	      {
	        className: 'number',
	        begin: '\\b\\d+\\b',
	        relevance: 0
	      },
	      // Requests
	      {
	        className: 'string',
	        begin: '(INFO|DEBUG|WARN|TRACE|TRACE_INT|FATAL)',
	        //end: '"',
	        emphasis: 'INFO DEBUG WARN TRACE TRACE_INT FATAL',
	        illegal: '\\n',
	        relevance: 10
	      },
	       // Requests
	      {
	        className: 'tag',
	        begin: 'ERROR',
	        //end: '"',
	        strong: 'ERROR',
	        illegal: '\\n',
	        relevance: 10
	      },
	      // Dates
	      {
	        className: 'string',
	        begin: /\[/, end: /\]/,
	        illegal: '\\n'
	      },
	      // Strings
	      {
	        className: 'string',
	        begin: '"', end: '"',
	        illegal: '\\n'
	      }
	    ]
	  };
	});
}
else
	console.error("intento de iniciar resaltador de sintaxis para jboss antes que el motoro hightlightjs");
	

