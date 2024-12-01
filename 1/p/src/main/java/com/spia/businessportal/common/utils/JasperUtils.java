/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  4 de dic. de 2015 - 10:26:16 a. m.
 */
package com.spia.businessportal.common.utils;

import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import net.sf.jasperreports.engine.JRDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.engine.export.JRPdfExporterParameter;
import net.sf.jasperreports.engine.xml.JRXmlLoader;

/**
 * Clase utilitaria para los reportes de jasper.
 * 
 * @author leandro
 *
 */
public class JasperUtils {

	private static final Logger logger = LoggerFactory.getLogger(JasperUtils.class);

	/**
	 * exporta un reporte a jasper.
	 * 
	 * @param reporte           nombre del reporte
	 * @param jasperReport      reporte de jasper
	 * @param parameterMap      parametros
	 * @param invoiceDataSource fuentes para los parametros
	 * @param jasperPrint       formato
	 * @param request           petición HTTP
	 * @param response          respuesta HTTP
	 * @throws JRException cuando ocurre un error en la compilación de Jasper.
	 * @throws IOException cuando ocurre un error en la lectura del archivo.
	 */
	public static void exportReport(String reporte, JasperReport jasperReport, HashMap<String, Object> parameterMap,
			JRDataSource invoiceDataSource, JasperPrint jasperPrint, HttpServletRequest request,
			HttpServletResponse response) throws JRException, IOException {
		List<JasperPrint> finalGetPassesList = new ArrayList<>();
		JRPdfExporter jasperExporter = new JRPdfExporter();
		ServletContext context = request.getServletContext();
		JasperDesign jasperDesign = JRXmlLoader.load(context.getRealPath("/WEB-INF/reports/" + reporte));

		finalGetPassesList.add(JasperFillManager.fillReport(JasperCompileManager.compileReport(jasperDesign),
				parameterMap, invoiceDataSource));

		response.setContentType("application/pdf");
		response.setHeader("Content-Disposition", "inline; filename=invoices.pdf");
		jasperExporter.setParameter(JRPdfExporterParameter.JASPER_PRINT_LIST, finalGetPassesList);
		jasperExporter.setParameter(JRPdfExporterParameter.OUTPUT_STREAM, response.getOutputStream());

		jasperExporter.exportReport();
	}

	/**
	 * exporta un reporte a jasper.
	 * 
	 * @param reporte           nombre del reporte
	 * @param jasperReport      reporte de jasper
	 * @param parameterMap      parametros
	 * @param invoiceDataSource fuentes para los parametros
	 * @param jasperPrint       formato
	 * @param request           petición HTTP
	 * @param outputStream      stream de salida
	 * @throws JRException cuando ocurre un error en la compilación de Jasper.
	 * @throws IOException cuando ocurre un error en la lectura del archivo.
	 */
	public static void exportReport(String reporte, JasperReport jasperReport, HashMap<String, Object> parameterMap,
			JRDataSource invoiceDataSource, JasperPrint jasperPrint, HttpServletRequest request, OutputStream stream)
			throws JRException, IOException {
		List<JasperPrint> finalGetPassesList = new ArrayList<>();
		JRPdfExporter jasperExporter = new JRPdfExporter();
		ServletContext context = request.getServletContext();
		JasperDesign jasperDesign = JRXmlLoader.load(context.getRealPath("/WEB-INF/reports/" + reporte));

		finalGetPassesList.add(JasperFillManager.fillReport(JasperCompileManager.compileReport(jasperDesign),
				parameterMap, invoiceDataSource));
		jasperExporter.setParameter(JRPdfExporterParameter.JASPER_PRINT_LIST, finalGetPassesList);
		jasperExporter.setParameter(JRPdfExporterParameter.OUTPUT_STREAM, stream);
		jasperExporter.exportReport();
	}

	

}
