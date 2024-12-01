/*
 * Fluxit S.A
 * La Plata - Buenos Aires - Argentina
 * http://www.fluxit.com.ar
 * Author: leandro
 * Date:  14 de oct. de 2015 - 2:31:12 p. m.
 */
package com.spia.businessportal.web.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spia.businessportal.common.entities.Server;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;

/**
 * @author facundo Controlador donde se expone la api de negocios del portal para los logs
 */
@RequestMapping("/api/log")
@Controller
public class LogController extends AbstractController {

    private static final Log LOG = LogFactory.getLog(LogController.class);
    private static final int BUFFER_SIZE = 8192;
    private static final String JBOSS_SERVER_LOG_DIR = "jboss.server.log.dir";

    /**
     * Retorna todos los archivos de log generados.
     * 
     * @param request
     *            petición http.
     * @param response
     *            respuesta http
     * @return {@link Server}
     */
    @RequestMapping(value = "/list", method = { RequestMethod.GET })
    public @ResponseBody ResponseEntity<?> logList(HttpServletRequest request, HttpServletResponse response) {
        ResponseEntity<?> re = null;
        try {
            File logDir = new File(System.getProperty(JBOSS_SERVER_LOG_DIR));
            ArrayList<Server> arr = new ArrayList<Server>();
            Server s = new Server();
            s.setFiles(logDir.list());
            s.setServer(System.getProperty("jboss.server.name") + " / " + System.getProperty("jboss.bind.address"));

            arr.add(s);

            re = new ResponseEntity<List<Server>>(arr, HttpStatus.OK);
        } catch (Exception e) {
            String[] strParams = {};
            String msg = getProperty("Controller.LogErrorList", strParams, getApplicationContext());
            LOG.error(msg, e);
            ResponseError error = new ResponseError();
            error.setError(msg);
            re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
        }
        return re;
    }

    /**
     * Previsualiza la siguiente página del log.
     * 
     * @param log
     *            log que se va a previsualizar
     * @param page
     *            página del log
     * @return String
     */
    @RequestMapping(value = "/{log:.+}/{page}", method = { RequestMethod.GET })
    public @ResponseBody ResponseEntity previewPage(@PathVariable String log, @PathVariable int page) {
        ResponseEntity<?> re = null;
        File file = new File(System.getProperty(JBOSS_SERVER_LOG_DIR) + "/" + log);
        BufferedReader reader = null;
        String out = null;
        try {
            reader = new BufferedReader(new FileReader(file));
            out = getStringFromInputStream(reader, page);
            re = new ResponseEntity<String>(out, HttpStatus.OK);
        } catch (Exception e) {
            String[] strParams = {};
            String msg = getProperty("Controller.LogErrorContent", strParams, getApplicationContext());
            LOG.error(msg + " (" + log + ")", e);
            ResponseError error = new ResponseError();
            error.setError(msg + " (" + log + ")");
            re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
        }
        return re;
    }

    /**
     * Previsualiza la primera página del log.
     * 
     * @param log
     *            log que se va a previsualizar
     * @return String
     */
    @RequestMapping(value = "/{log:.+}", method = { RequestMethod.GET })
    public @ResponseBody ResponseEntity preview(@PathVariable String log) {
        ResponseEntity<?> re = null;
        File file = new File(System.getProperty(JBOSS_SERVER_LOG_DIR) + "/" + log);
        BufferedReader reader = null;
        String out = null;
        try {
            reader = new BufferedReader(new FileReader(file));
            out = getStringFromInputStream(reader, 0);
            re = new ResponseEntity<String>(out, HttpStatus.OK);
        } catch (Exception e) {
            String[] strParams = {};
            String msg = getProperty("Controller.LogErrorContent", strParams, getApplicationContext());
            LOG.error(msg + " (" + log + ")", e);
            ResponseError error = new ResponseError();
            error.setError(msg + " (" + log + ")");
            re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
        }
        return re;
    }

    /**
     * Descarga el archivo de log.
     * 
     * @param log
     *            log que se va a deacargar
     * @param request
     *            petición http
     * @param response
     *            respuesta http
     */
    @RequestMapping(value = "/download/{log:.+}", method = { RequestMethod.GET })
    public @ResponseBody void downloadFile(@PathVariable String log, HttpServletRequest request,
            HttpServletResponse response) {
        ServletContext context = request.getServletContext();
        String appPath = context.getRealPath("");
        LOG.info("appPath = " + appPath);

        // construct the complete absolute path of the file
        String fullPath = System.getProperty(JBOSS_SERVER_LOG_DIR) + "/" + log;
        File downloadFile = new File(fullPath);
        FileInputStream inputStream = null;
        OutputStream outStream = null;
        try {
            inputStream = new FileInputStream(downloadFile);

            // get MIME type of the file
            String mimeType = context.getMimeType(fullPath);
            if (mimeType == null) {
                // set to binary type if MIME mapping not found
                mimeType = "application/octet-stream";
            }
            LOG.info("MIME type: " + mimeType);

            // set content attributes for the response
            response.setContentType(mimeType);
            response.setContentLength((int) downloadFile.length());

            // set headers for the response
            String headerKey = "Content-Disposition";
            String headerValue = String.format("attachment; filename=\"%s\"", downloadFile.getName());
            response.setHeader(headerKey, headerValue);

            // get output stream of the response

            outStream = response.getOutputStream();

            byte[] buffer = new byte[BUFFER_SIZE];
            int bytesRead = -1;

            // write bytes read from the input stream into the output stream
            if (inputStream != null) {
                while ((bytesRead = inputStream.read(buffer)) != -1) {
                    if (outStream != null) {
                        outStream.write(buffer, 0, bytesRead);
                    }
                }
            }
        } catch (IOException e) {
            LOG.error(e.getStackTrace());
        } finally {
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException e) {
                    LOG.error(e.getStackTrace());
                }
            }
            if (outStream != null) {
                try {
                    outStream.close();
                } catch (IOException e) {
                    LOG.error(e.getStackTrace());
                }
            }
        }

    }

    /**
     * Lee el archivo de texto.
     * 
     * @param br
     *            buffer
     * @param page
     *            página
     * @return String
     * @throws IOException
     *             cuando ocurre un error en la lectura del archivo
     */
    private static String getStringFromInputStream(BufferedReader br, int page) throws IOException {

        StringBuilder sb = new StringBuilder();

        String line = null;
        long buffer_size = new Long(BUFFER_SIZE).longValue();
        br.skip(buffer_size * page);
        while (sb.length() < BUFFER_SIZE && (line = br.readLine()) != null) {
            sb.append(line).append("\n");
        }
        br.close();
        return sb.length() > BUFFER_SIZE ? sb.substring(0, BUFFER_SIZE) : sb.toString();

    }
}
