/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  10 de dic. de 2015 - 8:46:03 a. m.
 */
package com.spia.businessportal.web.controller;

import java.io.IOException;

import javax.annotation.PostConstruct;



import org.apache.poi.hssf.record.formula.functions.T;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.client.HttpServerErrorException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fluxit.n4api.snx.model.AppointmentRequestBaseType.Booking;
import com.spia.businessportal.backend.bo.BillOfLadingMdwBO;
import com.spia.businessportal.backend.bo.BookingBO;
import com.spia.businessportal.backend.bo.ChargeableUnitEventsMdwBO;
import com.spia.businessportal.backend.bo.CreditNoteMdwBO;
import com.spia.businessportal.backend.bo.CustomerContractMdwBO;
import com.spia.businessportal.backend.bo.CustomerMdwBO;
import com.spia.businessportal.backend.bo.UpdateDataMdwBO;
import com.spia.businessportal.backend.bo.DocumentalBO;
import com.spia.businessportal.backend.bo.CustomerRequestBO;
import com.spia.businessportal.backend.bo.CustomerDataBO;
import com.spia.businessportal.backend.bo.DriverMdwBO;
import com.spia.businessportal.backend.bo.EdoMdwBO;
import com.spia.businessportal.backend.bo.EroMdwBO;
import com.spia.businessportal.backend.bo.GenericMdwBO;
import com.spia.businessportal.backend.bo.HazardMdwBO;
import com.spia.businessportal.backend.bo.HoldPermissionMdwBO;
import com.spia.businessportal.backend.bo.InvoiceMdwBO;
import com.spia.businessportal.backend.bo.LdapProxyEsbBO;
import com.spia.businessportal.backend.bo.NotificationBO;
import com.spia.businessportal.backend.bo.NotificationMdwBO;
import com.spia.businessportal.backend.bo.PinBO;
import com.spia.businessportal.backend.bo.SecurityEsbBO;
import com.spia.businessportal.backend.bo.ServiceOrderMdwBO;
import com.spia.businessportal.backend.bo.ShipperMdwBO;
import com.spia.businessportal.backend.bo.TruckVisitAppointmentMdwBO;
import com.spia.businessportal.backend.bo.UnitFacilityVisitMdwBO;
import com.spia.businessportal.backend.bo.UserBO;
import com.spia.businessportal.backend.bo.impl.JMSQueueServiceImpl;
import com.spia.businessportal.backend.onlineinvoice.bo.OnlineInvoiceMdwBO;
import com.spia.businessportal.backend.payu.bo.PayuMdwBO;

import com.spia.businessportal.common.entities.CustomerRequestNV;
import com.spia.businessportal.common.entities.DocumentationFileState;
import com.spia.businessportal.common.entities.DocumentationSpecificFile;
import com.spia.businessportal.common.entities.DocumentationType;
import com.spia.businessportal.common.entities.InvoicePortal;
import com.spia.businessportal.common.entities.PinContainerized;
import com.spia.businessportal.common.entities.TruckVisit;
import com.spia.businessportal.common.entities.TruckVisitAppointmentBreakBulk;
import com.spia.businessportal.common.entities.CustomerNV;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;

import com.spia.services.entities.Agent;
import com.spia.services.entities.BillOfLading;
import com.spia.services.entities.Container;
import com.spia.services.entities.Driver;
import com.spia.services.entities.Edo;
import com.spia.services.entities.EquipmentType;
import com.spia.services.entities.Ero;
import com.spia.services.entities.Hazard;
import com.spia.services.entities.LineOperator;
import com.spia.services.entities.ServiceOrder;
import com.spia.services.entities.ShipperConsignee;
import com.spia.services.entities.Truck;
import com.spia.services.entities.TruckVisitAppointment;
import com.spia.services.entities.TruckingCompany;
import com.spia.services.entities.UnitFacilityVisit;
import com.spia.services.entities.VesselVisit;
import com.spia.services.entities.appointment.TruckVisitAppointmentResponse;
import com.spia.services.entities.billing.CurrencyExchange;
import com.spia.services.entities.billing.Customer;
import com.spia.services.entities.billing.CustomerContract;
import com.spia.services.entities.billing.Invoice;
import com.spia.services.entities.navis.ShipperInfo;
import com.spia.services.security.esb.entities.SecurityEsbResponse;
import com.spia.servicies.entities.notification.Notification;

import ar.com.fluxit.framework.business.generic.GenericService;

// ASSIST 13-04-2022
import com.spia.services.entities.GenericResponseDTO;

/**
 * @author leandro
 *
 *         Controlador abstracto que tiene todos los beans inyectados para hacer
 *         más fácil el mantenimiento de la aplicación. En él se definen todos
 *         los bean de mdw y base de datos, y para los beans de mdw además se
 *         setean la url del servicio y la clase de retorno.
 */
public abstract class AbstractController {

	public AbstractController() {
	}

	///////////////////////////////////////
	// BEANS DE BASE DE MDW
	///////////////////////////////////////
	@Autowired
	private DriverMdwBO<Driver> driverMdwBo;
	@Autowired
	private GenericMdwBO<TruckVisitAppointmentResponse> appointmentConfigurationMdwBo;
	@Autowired
	private BillOfLadingMdwBO<BillOfLading> billOfLadingMdwBo;
	@Autowired
	private InvoiceMdwBO<Invoice> invoiceMdwBO;
	@Autowired
	private TruckVisitAppointmentMdwBO<TruckVisitAppointment> truckVisitAppointmentMdwBO;
	@Autowired
	private ChargeableUnitEventsMdwBO<T> chargeableUnitEventsMdwBO;
	@Autowired
	private BookingBO<T> bookingMdwBo;
	@Autowired
	private UnitFacilityVisitMdwBO<UnitFacilityVisit> unitFacilityVisitMdwBo;
	@Autowired
	private GenericMdwBO<Container> containerMdwBO;
	@Autowired
	private CustomerMdwBO<Customer> customerMdwBO;
	@Autowired
	private UpdateDataMdwBO<GenericResponseDTO> updateDataMdwBO;
	@Autowired
	private EdoMdwBO<Edo> edoMdwBo;
	@Autowired
	private EroMdwBO<Ero> eroMdwBo;
	@Autowired
	private GenericMdwBO<EquipmentType> equipmentTypeMdwBo;
	@Autowired
	private GenericMdwBO<CurrencyExchange> currencyMdwBO;
	@Autowired
	private GenericMdwBO<VesselVisit> vesselVisitMdwBO;
	@Autowired
	private GenericMdwBO<LineOperator> lineOperatorMdwBo;
	@Autowired
	private GenericMdwBO<Truck> truckMdwBo;
	@Autowired
	private GenericMdwBO<TruckingCompany> truckingCompanyMdwBo;
	@Autowired
	private GenericMdwBO<Agent> agentMdwBo;
	@Autowired
	private PayuMdwBO<String> payuMdwBO;
	@Autowired
	private OnlineInvoiceMdwBO<T> onlineInvoiceMdwBO;
	@Autowired
	private NotificationMdwBO<Notification> notificationMdwBO;
	@Autowired
	private HazardMdwBO<Hazard> hazardMdwBO;
	@Autowired
	private HoldPermissionMdwBO<T> holdPermissionMdwBO;
	@Autowired
	private CustomerContractMdwBO<CustomerContract> customerContractMdwBO;
	@Autowired
	private GenericMdwBO<ShipperConsignee> shipperConsigneeMdwBo;
	@Autowired
	private ShipperMdwBO<ShipperInfo> shipperMdwBO;
	@Autowired
	private CreditNoteMdwBO<String> creditNoteMdwBO;
	// ASSIST 13-04-2022
	@Autowired
	private GenericMdwBO<GenericResponseDTO> containerDamageReportMdwBO;
	///////////////////////////////////////
	// BEANS DE BASE DE DATOS
	///////////////////////////////////////

	@Autowired
	private PinBO pinBO;
	@Autowired
	private NotificationBO notificationBO;
	@Autowired
	private GenericService<TruckVisit> truckVisitBO;
	@Autowired
	private GenericService<CustomerRequestNV> customerRequestNVBO;
	@Autowired
	private GenericService<CustomerNV> customerBO;
	@Autowired
	public UserBO userBO;
	@Autowired
	private GenericService<TruckingCompany> truckingCompanyBO;
	@Autowired
	private GenericService<TruckVisitAppointmentBreakBulk> truckVisitAppointmentBreakBulkBO;
	@Autowired
	private GenericService<InvoicePortal> invoicePortalBO;
	@Autowired
	private GenericService<PinContainerized> pinContainerizedBO;
	@Autowired
	private DocumentalBO documentalBO;
	@Autowired
	private CustomerRequestBO customerRequestBO;
	@Autowired
	private CustomerDataBO customerDataBO;
	@Autowired
	private GenericService<DocumentationSpecificFile> documentationSpecificFileBO;
	@Autowired
	private GenericService<DocumentationType> documentationTypeBO;
	@Autowired
	private GenericService<DocumentationFileState> documentationFileStateBO;

	//////////////////////////////////////////////////////////
	// Contexto de aplicación, principalmente para locale
	//////////////////////////////////////////////////////////
	@Autowired
	private ApplicationContext applicationContext;

	//////////////////////////////
	// Bean de ESB de seguridad //
	//////////////////////////////
	@Autowired
	private SecurityEsbBO<SecurityEsbResponse> securityEsbBO;

	//////////////////////////////
	// Bean de ESB de LDAP pROXY //
	//////////////////////////////
	@Autowired
	private LdapProxyEsbBO<SecurityEsbResponse> ldapProxyEsbBO;

	//////////////////////////////
	// Bean de JMS //
	//////////////////////////////
	@Autowired
	private JMSQueueServiceImpl jmsQueueServiceImpl;
	
	@Autowired
	private ServiceOrderMdwBO<ServiceOrder> serviceOrderMdwBo;

	@PostConstruct
	public void init() {
		///////////////////////////////////
		///// BEANS DE MDW
		//////////////////////////////////
		this.getAppointmentConfigurationMdwBo().setPath("/appointmentrules");
		this.getAppointmentConfigurationMdwBo().setClazz(TruckVisitAppointmentResponse.class);

		this.getBillOfLadingMdwBo().setPath("/billOfLading");
		this.getBillOfLadingMdwBo().setClazz(BillOfLading.class);

		this.getBookingMdwBo().setPath("/booking");
		this.getBookingMdwBo().setClazz(Booking.class);

		this.getChargeableUnitEventsMdwBO().setPath("/chargeableunitevents");

		this.getContainerMdwBO().setPath("/container");
		this.getContainerMdwBO().setClazz(Container.class);

		this.getCurrencyMdwBO().setPath("/currencyExchange");
		this.getCurrencyMdwBO().setClazz(CurrencyExchange.class);

		this.getCustomerMdwBO().setPath("/customer");
		this.getCustomerMdwBO().setClazz(Customer.class);
		this.getCustomerMdwBO().setArrayClazz(Customer[].class);

		this.getDriverMdwBo().setPath("/driver");
		this.getDriverMdwBo().setClazz(Driver.class);
		this.getDriverMdwBo().setArrayClazz(Driver[].class);

		this.getEdoMdwBo().setPath("/edo");
		this.getEdoMdwBo().setClazz(Edo.class);

		this.getEquipmentTypeMdwBo().setPath("/equipmentType");
		this.getEquipmentTypeMdwBo().setClazz(EquipmentType.class);

		this.getEroMdwBo().setPath("/ero");
		this.getEroMdwBo().setClazz(Ero.class);

		this.getInvoiceMdwBO().setPath("/invoice");
		this.getInvoiceMdwBO().setClazz(Invoice.class);

		this.getLineOperatorMdwBo().setPath("/lineoperator");
		this.getLineOperatorMdwBo().setClazz(LineOperator.class);
		this.getLineOperatorMdwBo().setArrayClazz(LineOperator[].class);

		this.getTruckingCompanyMdwBo().setPath("/truckingcompany");
		this.getTruckingCompanyMdwBo().setClazz(TruckingCompany.class);
		this.getTruckingCompanyMdwBo().setArrayClazz(TruckingCompany[].class);

		this.getTruckMdwBo().setPath("/truck");
		this.getTruckMdwBo().setClazz(Truck.class);
		this.getTruckMdwBo().setArrayClazz(Truck[].class);

		this.getTruckVisitAppointmentMdwBO().setPath("/truckVisitAppointment");
		this.getTruckVisitAppointmentMdwBO().setClazz(TruckVisitAppointment.class);

		this.getUnitFacilityVisitMdwBo().setPath("/unitfacilityvisit");
		this.getUnitFacilityVisitMdwBo().setClazz(UnitFacilityVisit.class);

		this.getVesselVisitMdwBO().setPath("/vesselvisit");
		this.getVesselVisitMdwBO().setClazz(VesselVisit.class);
		this.getVesselVisitMdwBO().setArrayClazz(VesselVisit[].class);

		this.getAgentMdwBo().setPath("/agent");
		this.getAgentMdwBo().setClazz(Agent.class);
		this.getAgentMdwBo().setArrayClazz(Agent[].class);

		this.getPayuMdwBO().setPath("/payment");

		this.getOnlineInvoiceMdwBO().setPath("/online-invoice");

		this.getNotificationMdwBO().setPath("/notification");
		this.getNotificationMdwBO().setClazz(Notification.class);
		this.getNotificationMdwBO().setArrayClazz(Notification[].class);

		this.getHazardMdwBO().setPath("/hazard");
		this.getHazardMdwBO().setClazz(Hazard.class);

		this.getHoldPermissionMdwBO().setPath("/hold-permission");

		this.getCustomerContractMdwBO().setPath("/customer-contract");
		this.getCustomerContractMdwBO().setClazz(CustomerContract.class);
		this.getCustomerContractMdwBO().setArrayClazz(CustomerContract[].class);
		
		this.getShipperConsigneeMdwBo().setPath("/shipperconsignee");
		this.getShipperConsigneeMdwBo().setClazz(ShipperConsignee.class);
		this.getShipperConsigneeMdwBo().setArrayClazz(ShipperConsignee[].class);
		
		this.getServiceOrderMdwBo().setPath("/serviceOrder");
		this.getServiceOrderMdwBo().setClazz(ServiceOrder.class);
		
		this.getShipperMdwBO().setPath("/shipper");
		this.getShipperMdwBO().setClazz(ShipperInfo.class);
		
		this.getCreditNoteMdwBO().setPath("/creditNote");

		// ASSIST 13-04-2022
		this.getContainerDamageReportMdwBO().setPath("/container");
		this.getContainerDamageReportMdwBO().setClazz(GenericResponseDTO.class);

		this.getUpdateDataMdwBO().setPath("/updateData");
		this.getUpdateDataMdwBO().setClazz(GenericResponseDTO.class);


	}
	// ASSIST 13-04-2022
	public GenericMdwBO<GenericResponseDTO> getContainerDamageReportMdwBO() {
		return containerDamageReportMdwBO;
	}
	// ASSIST 13-04-2022
	public void setContainerDamageReportMdwBO(GenericMdwBO<GenericResponseDTO> containerDamageReportMdwBO) {
		this.containerDamageReportMdwBO = containerDamageReportMdwBO;
	}
	

	public DriverMdwBO<Driver> getDriverMdwBo() {
		return driverMdwBo;
	}

	public void setDriverMdwBo(DriverMdwBO<Driver> driverMdwBo) {
		this.driverMdwBo = driverMdwBo;
	}

	public GenericMdwBO<TruckVisitAppointmentResponse> getAppointmentConfigurationMdwBo() {
		return appointmentConfigurationMdwBo;
	}

	public void setAppointmentConfigurationMdwBo(
			GenericMdwBO<TruckVisitAppointmentResponse> appointmentConfigurationMdwBo) {
		this.appointmentConfigurationMdwBo = appointmentConfigurationMdwBo;
	}

	public BillOfLadingMdwBO<BillOfLading> getBillOfLadingMdwBo() {
		return billOfLadingMdwBo;
	}

	public void setBillOfLadingMdwBo(BillOfLadingMdwBO<BillOfLading> billOfLadingMdwBo) {
		this.billOfLadingMdwBo = billOfLadingMdwBo;
	}

	public InvoiceMdwBO<Invoice> getInvoiceMdwBO() {
		return invoiceMdwBO;
	}

	public void setInvoiceMdwBO(InvoiceMdwBO<Invoice> invoiceMdwBO) {
		this.invoiceMdwBO = invoiceMdwBO;
	}

	public TruckVisitAppointmentMdwBO<TruckVisitAppointment> getTruckVisitAppointmentMdwBO() {
		return truckVisitAppointmentMdwBO;
	}

	public void setTruckVisitAppointmentMdwBO(
			TruckVisitAppointmentMdwBO<TruckVisitAppointment> truckVisitAppointmentMdwBO) {
		this.truckVisitAppointmentMdwBO = truckVisitAppointmentMdwBO;
	}

	public ChargeableUnitEventsMdwBO<T> getChargeableUnitEventsMdwBO() {
		return chargeableUnitEventsMdwBO;
	}

	public void setChargeableUnitEventsMdwBO(ChargeableUnitEventsMdwBO<T> chargeableUnitEventsMdwBO) {
		this.chargeableUnitEventsMdwBO = chargeableUnitEventsMdwBO;
	}

	public BookingBO getBookingMdwBo() {
		return bookingMdwBo;
	}

	public void setBookingMdwBo(BookingBO bookingMdwBo) {
		this.bookingMdwBo = bookingMdwBo;
	}

	public UnitFacilityVisitMdwBO<UnitFacilityVisit> getUnitFacilityVisitMdwBo() {
		return unitFacilityVisitMdwBo;
	}

	public void setUnitFacilityVisitMdwBo(UnitFacilityVisitMdwBO<UnitFacilityVisit> unitFacilityVisitMdwBo) {
		this.unitFacilityVisitMdwBo = unitFacilityVisitMdwBo;
	}

	public GenericMdwBO<Container> getContainerMdwBO() {
		return containerMdwBO;
	}

	public void setContainerMdwBO(GenericMdwBO<Container> containerMdwBO) {
		this.containerMdwBO = containerMdwBO;
	}

	public CustomerMdwBO<Customer> getCustomerMdwBO() {
		return customerMdwBO;
	}

	public void setCustomerMdwBO(CustomerMdwBO<Customer> customerMdwBO) {
		this.customerMdwBO = customerMdwBO;
	}

	public UpdateDataMdwBO<GenericResponseDTO> getUpdateDataMdwBO() {
		return updateDataMdwBO;
	}

	public void setUpdateDataMdwBO(UpdateDataMdwBO<GenericResponseDTO> updateDataMdwBO) {
		this.updateDataMdwBO = updateDataMdwBO;
	}

	public EdoMdwBO<Edo> getEdoMdwBo() {
		return edoMdwBo;
	}

	public void setEdoMdwBo(EdoMdwBO<Edo> edoMdwBo) {
		this.edoMdwBo = edoMdwBo;
	}

	public EroMdwBO<Ero> getEroMdwBo() {
		return eroMdwBo;
	}

	public void setEroMdwBo(EroMdwBO<Ero> eroMdwBo) {
		this.eroMdwBo = eroMdwBo;
	}

	public GenericMdwBO<EquipmentType> getEquipmentTypeMdwBo() {
		return equipmentTypeMdwBo;
	}

	public void setEquipmentTypeMdwBo(GenericMdwBO<EquipmentType> equipmentTypeMdwBo) {
		this.equipmentTypeMdwBo = equipmentTypeMdwBo;
	}

	public GenericMdwBO<CurrencyExchange> getCurrencyMdwBO() {
		return currencyMdwBO;
	}

	public void setCurrencyMdwBO(GenericMdwBO<CurrencyExchange> currencyMdwBO) {
		this.currencyMdwBO = currencyMdwBO;
	}

	public GenericMdwBO<VesselVisit> getVesselVisitMdwBO() {
		return vesselVisitMdwBO;
	}

	public void setVesselVisitMdwBO(GenericMdwBO<VesselVisit> vesselVisitMdwBO) {
		this.vesselVisitMdwBO = vesselVisitMdwBO;
	}

	public GenericMdwBO<LineOperator> getLineOperatorMdwBo() {
		return lineOperatorMdwBo;
	}

	public void setLineOperatorMdwBo(GenericMdwBO<LineOperator> lineOperatorMdwBo) {
		this.lineOperatorMdwBo = lineOperatorMdwBo;
	}

	public GenericMdwBO<Truck> getTruckMdwBo() {
		return truckMdwBo;
	}

	public void setTruckMdwBo(GenericMdwBO<Truck> truckMdwBo) {
		this.truckMdwBo = truckMdwBo;
	}

	public GenericMdwBO<TruckingCompany> getTruckingCompanyMdwBo() {
		return truckingCompanyMdwBo;
	}

	public void setTruckingCompanyMdwBo(GenericMdwBO<TruckingCompany> truckingCompanyMdwBo) {
		this.truckingCompanyMdwBo = truckingCompanyMdwBo;
	}

	public NotificationBO getNotificationBO() {
		return notificationBO;
	}

	public void setNotificationBO(NotificationBO notificationBO) {
		this.notificationBO = notificationBO;
	}

	public PinBO getPinBO() {
		return pinBO;
	}

	public void setPinBO(PinBO pinBO) {
		this.pinBO = pinBO;
	}

	public GenericService<TruckVisit> getTruckVisitBO() {
		return truckVisitBO;
	}

	public void setTruckVisitBO(GenericService<TruckVisit> truckVisitBO) {
		this.truckVisitBO = truckVisitBO;
	}

	public GenericService<CustomerRequestNV> getCustomerRequestNVBO() {
		return customerRequestNVBO;
	}
	public void setCustomerRequestNVBO(GenericService<CustomerRequestNV> customerRequestNVBO) {
		this.customerRequestNVBO = customerRequestNVBO;
	}
	public GenericService<CustomerNV> getCustomerBO() {
		return customerBO;
	}
	public void setCustomerBO(GenericService<CustomerNV> customerBO) {
		this.customerBO = customerBO;
	}
	public GenericService<InvoicePortal> getInvoicePortalBO() {
		return invoicePortalBO;
	}

	public void setInvoicePortalBO(GenericService<InvoicePortal> invoicePortalBO) {
		this.invoicePortalBO = invoicePortalBO;
	}

	public UserBO getUserBO() {
		return userBO;
	}

	public GenericService<PinContainerized> getPinContainerizedBO() {
		return pinContainerizedBO;
	}

	public void setPinContainerizedBO(GenericService<PinContainerized> pinContainerizedBO) {
		this.pinContainerizedBO = pinContainerizedBO;
	}

	public void setUserBO(UserBO userBO) {
		this.userBO = userBO;
	}

	public GenericService<TruckingCompany> getTruckingCompanyBO() {
		return truckingCompanyBO;
	}

	public void setTruckingCompanyBO(GenericService<TruckingCompany> truckingCompanyBO) {
		this.truckingCompanyBO = truckingCompanyBO;
	}

	public GenericMdwBO<Agent> getAgentMdwBo() {
		return agentMdwBo;
	}

	public void setAgentMdwBo(GenericMdwBO<Agent> agentMdwBo) {
		this.agentMdwBo = agentMdwBo;
	}
	
	public GenericMdwBO<ShipperConsignee> getShipperConsigneeMdwBo() {
		return shipperConsigneeMdwBo;
	}

	public void setShipperConsigneeMdwBo(GenericMdwBO<ShipperConsignee> shipperConsigneeMdwBo) {
		this.shipperConsigneeMdwBo = shipperConsigneeMdwBo;
	}

	public ApplicationContext getApplicationContext() {
		return applicationContext;
	}

	public void setApplicationContext(ApplicationContext applicationContext) {
		this.applicationContext = applicationContext;
	}

	public GenericService<TruckVisitAppointmentBreakBulk> getTruckVisitAppointmentBreakBulkBO() {
		return truckVisitAppointmentBreakBulkBO;
	}

	public void setTruckVisitAppointmentBreakBulkBO(
			GenericService<TruckVisitAppointmentBreakBulk> truckVisitAppointmentBreakBulkBO) {
		this.truckVisitAppointmentBreakBulkBO = truckVisitAppointmentBreakBulkBO;
	}

	public PayuMdwBO<String> getPayuMdwBO() {
		return payuMdwBO;
	}

	public void setPayuMdwBO(PayuMdwBO<String> payuMdwBO) {
		this.payuMdwBO = payuMdwBO;
	}

	public OnlineInvoiceMdwBO<T> getOnlineInvoiceMdwBO() {
		return onlineInvoiceMdwBO;
	}

	public void setOnlineInvoiceMdwBO(OnlineInvoiceMdwBO<T> onlineInvoiceMdwBO) {
		this.onlineInvoiceMdwBO = onlineInvoiceMdwBO;
	}

	public GenericService<DocumentationSpecificFile> getDocumentationSpecificFileBO() {
		return documentationSpecificFileBO;
	}

	public void setDocumentationSpecificFileBO(GenericService<DocumentationSpecificFile> documentationSpecificFileBO) {
		this.documentationSpecificFileBO = documentationSpecificFileBO;
	}

	public NotificationMdwBO<Notification> getNotificationMdwBO() {
		return notificationMdwBO;
	}

	public DocumentalBO getDocumentalBO() {
		return documentalBO;
	}

	public void setDocumentalBO(DocumentalBO documentalBO) {
		this.documentalBO = documentalBO;
	}

	public CustomerRequestBO getCustomerRequestBO() {
		return customerRequestBO;
	}

	public void setCustomerRequestBO(CustomerRequestBO customerRequestBO) {
		this.customerRequestBO = customerRequestBO;
	}

	public void setNotificationMdwBO(NotificationMdwBO<Notification> notificationMdwBO) {
		this.notificationMdwBO = notificationMdwBO;
	}

	public HoldPermissionMdwBO<T> getHoldPermissionMdwBO() {
		return holdPermissionMdwBO;
	}

	public void setHoldPermissionMdwBO(HoldPermissionMdwBO<T> holdPermissionMdwBO) {
		this.holdPermissionMdwBO = holdPermissionMdwBO;
	}

	public GenericService<DocumentationType> getDocumentationTypeBO() {
		return documentationTypeBO;
	}

	public void setDocumentationTypeBO(GenericService<DocumentationType> documentationTypeBO) {
		this.documentationTypeBO = documentationTypeBO;
	}

	public GenericService<DocumentationFileState> getDocumentationFileStateBO() {
		return documentationFileStateBO;
	}

	public void setDocumentationFileStateBO(GenericService<DocumentationFileState> documentationFileStateBO) {
		this.documentationFileStateBO = documentationFileStateBO;
	}

	public CustomerDataBO getCustomerDataBO() {
		return customerDataBO;
	}

	public void setCustomerDataBO(CustomerDataBO customerDataBO) {
		this.customerDataBO = customerDataBO;
	}

	public JMSQueueServiceImpl getJmsQueueServiceImpl() {
		return jmsQueueServiceImpl;
	}

	public void setJmsQueueServiceImpl(JMSQueueServiceImpl jmsQueueServiceImpl) {
		this.jmsQueueServiceImpl = jmsQueueServiceImpl;
	}
	
	public ShipperMdwBO<ShipperInfo> getShipperMdwBO() {
		return shipperMdwBO;
	}

	public void setShipperMdwBO(ShipperMdwBO<ShipperInfo> shipperMdwBO) {
		this.shipperMdwBO = shipperMdwBO;
	}
	

	///////////////////////////////////////////////////////////////////////////////////
	// obtener info de properties, en particular de los msgs externializados para
	/////////////////////////////////////////////////////////////////////////////////// i18n//
	///////////////////////////////////////////////////////////////////////////////////

	public CustomerContractMdwBO<CustomerContract> getCustomerContractMdwBO() {
		return customerContractMdwBO;
	}

	public void setCustomerContractMdwBO(CustomerContractMdwBO<CustomerContract> customerContractMdwBO) {
		this.customerContractMdwBO = customerContractMdwBO;
	}

	public static String getProperty(String propertyCode, Object[] params, ApplicationContext context) {
		MessageSource messageSource = context.getBean(MessageSource.class);
		return messageSource.getMessage(propertyCode, params, LocaleContextHolder.getLocale());
	}

	/**
	 * @return the hazardMdwBO
	 */
	public HazardMdwBO<Hazard> getHazardMdwBO() {
		return hazardMdwBO;
	}

	/**
	 * @param hazardMdwBO the hazardMdwBO to set
	 */
	public void setHazardMdwBO(HazardMdwBO<Hazard> hazardMdwBO) {
		this.hazardMdwBO = hazardMdwBO;
	}

	public static ResponseError extractMdwMessageException(Exception e)
			throws JsonParseException, JsonMappingException, IOException {
		ResponseError r = null;
		if (e instanceof HttpServerErrorException) {
			ObjectMapper mapper = new ObjectMapper();
			String error = ((HttpServerErrorException) e).getResponseBodyAsString();
			r = mapper.readValue(error, ResponseError.class);
			r.setError(r.getMessage());
		}
		return r;
	}

	/**
	 * @return the securityEsbBO
	 */
	public SecurityEsbBO<SecurityEsbResponse> getSecurityEsbBO() {
		return securityEsbBO;
	}

	/**
	 * @param securityEsbBO the securityEsbBO to set
	 */
	public void setSecurityEsbBO(SecurityEsbBO<SecurityEsbResponse> securityEsbBO) {
		this.securityEsbBO = securityEsbBO;
	}

	/**
	 * 
	 * @return
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-09-25
	 */
	public LdapProxyEsbBO<SecurityEsbResponse> getLdapProxyEsbBO() {
		return ldapProxyEsbBO;
	}

	/**
	 * 
	 * @param ldapProxyEsbBO
	 * @company Assert Solutions S.A.S.
	 * @author Andres Falla
	 * @since 2019-09-25
	 */
	public void setLdapProxyEsbBO(LdapProxyEsbBO<SecurityEsbResponse> ldapProxyEsbBO) {
		this.ldapProxyEsbBO = ldapProxyEsbBO;
	}

	public ServiceOrderMdwBO<ServiceOrder> getServiceOrderMdwBo() {
		return serviceOrderMdwBo;
	}

	public void setServiceOrderMdwBo(ServiceOrderMdwBO<ServiceOrder> serviceOrderMdwBo) {
		this.serviceOrderMdwBo = serviceOrderMdwBo;
	}

	public CreditNoteMdwBO<String> getCreditNoteMdwBO() {
		return creditNoteMdwBO;
	}

	public void setCreditNoteMdwBO(CreditNoteMdwBO<String> creditNoteMdwBO) {
		this.creditNoteMdwBO = creditNoteMdwBO;
	}
	
	
	

}
