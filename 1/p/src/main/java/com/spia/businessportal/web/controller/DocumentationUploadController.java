package com.spia.businessportal.web.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;
import org.apache.commons.net.util.Base64;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.itextpdf.text.exceptions.InvalidPdfException;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.parser.PdfTextExtractor;
import com.spia.businessportal.common.entities.BooleanDeserializer;
import com.spia.businessportal.common.entities.Documentation;
import com.spia.businessportal.common.entities.DocumentationFile;
import com.spia.businessportal.common.entities.DocumentationFileNameForType;
import com.spia.businessportal.common.entities.DocumentationSpecificFile;
import com.spia.businessportal.common.entities.User;
import com.spia.businessportal.common.entities.errorHandling.ResponseError;
import com.spia.businessportal.common.utils.EncoderDecoder;
import com.spia.businessportal.constant.BusinessPortalConstant;
import com.spia.businessportal.common.entities.dto.autentication.ldap.UsuarioLoginDTO;

@Controller
public class DocumentationUploadController extends AbstractController {

	private static final Log LOG = LogFactory.getLog(DocumentationUploadController.class);
	private static final int BUFFER_SIZE = 8192;
	private static final String JBOSS_SERVER_LOG_DIR = "jboss.server.log.dir";

	@Value("#{ftpProperties['ftp.url']}")
	private String ftpServer;
	@Value("#{ftpProperties['ftp.port']}")
	private Integer ftpPort;
	@Value("#{ftpProperties['ftp.user']}")
	private String ftpUser;
	@Value("#{ftpProperties['ftp.pass']}")
	private String ftpPass;
	@Value("#{ftpProperties['shared.folder']}")
	private String sharedFolder;
	@Value("#{ftpProperties['maxFileSize']}")
	private Integer maxFileSize;
	@Value("#{ftpProperties['acceptedFileTypes']}")
	private String acceptedFileTypes;
	@Value("#{ftpProperties['fileNameSize']}")
	private Integer fileNameSize;

	@Value("#{esb['esb.password.key']}")
	private String key;
	@Value("#{esb['esb.password.initialVector']}")
	private String initVector;

	@RequestMapping(method = RequestMethod.GET, value = "/api/uploadFile/max-upload-size")
	public ResponseEntity<?> getMaxSizeFile() {
		return new ResponseEntity<Integer>(maxFileSize, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/api/uploadFile/accepted-file-types")
	public ResponseEntity<?> getAcceptedFileTypes() {
		List<String> acceptedTypes = Arrays.asList(acceptedFileTypes.split(","));
		return new ResponseEntity<List<String>>(acceptedTypes, HttpStatus.OK);
	}

	// public ResponseEntity handleFileUpload(@RequestParam(value = "file", required
	// = true) MultipartFile[] files, @RequestParam(value = "documentation",
	// required = false) String documentation) {
	@RequestMapping(method = RequestMethod.POST, value = "/api/uploadFile/{folder}")
	public ResponseEntity handleFileUpload(@PathVariable String folder, MultipartHttpServletRequest request,
			HttpServletResponse response) {
		ResponseEntity re = null;
		Set archivos = new HashSet<DocumentationFile>();
		String errorMsg = "";
		String fName = "";
		String fType = "";
		String documentation = "";
		folder = EncoderDecoder.decodeBase64(folder);
		try {

			Iterator<String> itr = request.getFileNames();
			MultipartFile file = null;

			while (itr.hasNext()) {
				file = request.getFile(itr.next());
				documentation = request.getParameter("documentation");

				// Do your stuff here.......
			}
			String decode = EncoderDecoder.bse64toDocumentation(documentation);
			Documentation ob = new ObjectMapper().readValue(decode, Documentation.class);
			// TODO GUARDAR PRIMERO EN BD PARA LA TRANSACCIONALIDAD

			DocumentationFileNameForType fileType = new DocumentationFileNameForType();
			// Recupero el usuario para armar el path.

			UsuarioLoginDTO user = this.getUserBO().getCurrentUser();
			// Todo buscar fyletype por string

			// for (MultipartFile file : files) {
			fName = file.getOriginalFilename();
			fType = FilenameUtils.getExtension(fName);

			if (!fType.toLowerCase().equals("pdf") && !fType.toLowerCase().equals("xls") && !fType.toLowerCase().equals("xlsx")) {
				String[] strParams = { file.getOriginalFilename() };
				errorMsg += getProperty("Controller.FileTypeError", strParams, getApplicationContext());
				LOG.error(errorMsg);
				re = new ResponseEntity<String>(documentation, HttpStatus.BAD_REQUEST);
				// re = new ResponseEntity<Documentation>(ob, HttpStatus.BAD_REQUEST);
				return re;
			}

			if (!file.isEmpty()) {
				if (file.getSize() == 0) {
					String[] strParams = {};
					errorMsg += getProperty("Controller.SaveDocumentationError", strParams, getApplicationContext());
					LOG.error(errorMsg);
					re = new ResponseEntity<String>(documentation, HttpStatus.BAD_REQUEST);
					// re = new ResponseEntity<Documentation>(ob, HttpStatus.BAD_REQUEST);
					return re;
				}

				if (file.getSize() > maxFileSize) {
					String[] strParams = { file.getOriginalFilename(), maxFileSize.toString() };
					errorMsg += getProperty("Controller.FileSizeError", strParams, getApplicationContext());
					LOG.error(errorMsg);
					re = new ResponseEntity<String>(documentation, HttpStatus.BAD_REQUEST);
					// re = new ResponseEntity<Documentation>(ob, HttpStatus.BAD_REQUEST);
					return re;
				}
				if (fType.toLowerCase().equals("pdf")) {
					try {
						PdfReader pdfReader = new PdfReader(file.getInputStream());
						PdfTextExtractor.getTextFromPage(pdfReader, 1);
					} catch (InvalidPdfException e) {
						e.printStackTrace();
						String[] strParams = { file.getOriginalFilename() };
						errorMsg += getProperty("Controller.FileTypeError", strParams, getApplicationContext());
						LOG.error(errorMsg);
						re = new ResponseEntity<String>(documentation, HttpStatus.BAD_REQUEST);
						// re = new ResponseEntity<Documentation>(ob, HttpStatus.BAD_REQUEST);
						return re;
					}
				}
				boolean validType = false;

				for (String s : Arrays.asList(acceptedFileTypes.split(","))) {
					if (file.getContentType().toLowerCase().equals(s.toLowerCase())) {
						validType = true;
					}
				}

				if (!validType) {
					String[] strParams = { file.getOriginalFilename() };
					errorMsg += getProperty("Controller.FileTypeError", strParams, getApplicationContext());
					LOG.error(errorMsg);
					re = new ResponseEntity<String>(documentation, HttpStatus.BAD_REQUEST);
					// re = new ResponseEntity<Documentation>(ob, HttpStatus.BAD_REQUEST);
					return re;
				}
			}
			// }

			BufferedOutputStream stream = null;

			// for (MultipartFile file : files) {
			String newPath = new SimpleDateFormat("yyyyMMddHHmmSS'.pdf'").format(new Date());
			String filePath = "";
			if (ob.getId() == null) {
				filePath = this.getUserBO().getCurrentUser().getEmpresa().getId() + "_" + ob.getId() + "/";
			} else {
				filePath = this.getUserBO().getCurrentUser().getEmpresa().getId() + "_" + newPath + "/";
			}

			for (DocumentationFile df : ob.getFiles()) {
				for (DocumentationSpecificFile dsf : df.getFiles()) {
//						if (dsf.getId() == null && dsf.getFileName().equals(file.getOriginalFilename())) {
					if (dsf.getFileName().equals(file.getOriginalFilename())) {
						String path = "";
						String requestValidate = null;
						requestValidate = ob.getNbr();
						path = decrypt(ob.getPath());
						LOG.info("path--> " + path);
						if (requestValidate.equals("REQUEST") && path.indexOf("GEST") != -1) {
							path = path.concat("/").concat(ob.getOwnerId()).concat("/").concat(folder);
							ob.setPath(path);
							documentation = folder;

						}
						// Carpeta compartida
						if (!"".equals(sharedFolder) && sharedFolder != null) {

							File dir = new File(sharedFolder + path + filePath + df.getFileName().getName());

							if (!dir.exists()) {
								LOG.info("creando directorio en filesystem: " + dir.getAbsolutePath());
								dir.mkdirs();
							}

							try {
								stream = new BufferedOutputStream(new FileOutputStream(new File(sharedFolder + path
										+ filePath + df.getFileName().getName() + "/" + file.getOriginalFilename())));

								FileCopyUtils.copy(file.getInputStream(), stream);

								LOG.info("guardado archivo en filesystem: " + sharedFolder + path + filePath
										+ df.getFileName().getName() + "/" + file.getOriginalFilename());

							} catch (Exception e) {
								String msg;
								String[] strParams = null;
								msg = getProperty("Controller.SaveDocumentationError", strParams,
										getApplicationContext());
								LOG.error(e.getStackTrace());
								throw new Exception(msg);
							} finally {
								if (stream != null) {
									stream.close();
								}
							}

						}

						// FTP
						if (!"".equals(ftpServer) && ftpServer != null) {
							dsf.setFileName(filePath + "/" + dsf.getFileName());
							try {
								uploadToFTP(file, path + "/");
							} catch (Exception e) {
								String msg;
								String[] strParams = null;
								msg = getProperty("Controller.SaveDocumentationError", strParams,
										getApplicationContext());
								LOG.error(e.toString());
								re = new ResponseEntity<String>(documentation, HttpStatus.BAD_REQUEST);
								// re = new ResponseEntity<Documentation>(ob, HttpStatus.BAD_REQUEST);
								return re;
							}
						}
					}
				}

				DocumentationFile archivo = new DocumentationFile();
				archivo.setDocumentation(ob);

				archivo.setFileName(fileType);
				archivos.add(archivo);
			}
			// }
			// Converting the Object to JSONString
			re = new ResponseEntity<String>(documentation, HttpStatus.OK);
			return re;
		} catch (Exception e) {
			String msg;
			LOG.error(e.getMessage(), e);
			if (errorMsg.isEmpty()) {
				String[] strParams = null;
				msg = getProperty("Controller.SaveDocumentationError", strParams, getApplicationContext());
			} else
				msg = errorMsg;
			ResponseError error = new ResponseError();
			error.setError(msg);
			re = new ResponseEntity<ResponseError>(error, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	private void uploadToFTP(MultipartFile file, String path) throws Exception {
		FTPClient ftp = new FTPClient();
		boolean error = false;
		try {
			int reply;
			String server = this.getFtpServer();
			int port = this.getFtpPort();

			ftp.connect(server, port);
			ftp.login(this.getFtpUser(), this.getFtpPass());
			ftp.enterLocalPassiveMode();
			ftp.setFileType(FTP.BINARY_FILE_TYPE);

			// After connection attempt, you should check the reply code to
			// verify
			// success.
			reply = ftp.getReplyCode();

			if (FTPReply.isPositiveCompletion(reply)) {
				ftp.getStatus(path);
				if (!FTPReply.isPositiveCompletion(ftp.getReplyCode())) {
					ftpCreateDirectoryTree(ftp, path);
				}
				boolean done = ftp.storeFile(path + file.getOriginalFilename(), file.getInputStream());
				if (done) {
					if (ftp.getReplyString().contains("0.000 KB/s")) {
						String msg;
						String[] strParams = null;
						msg = getProperty("Controller.SaveDocumentationError", strParams, getApplicationContext());
						throw new Exception(msg);
					}
					LOG.info("creando archivo en ftp: " + sharedFolder + path + file.getOriginalFilename());
				}
				ftp.logout();
			}
			ftp.disconnect();
		} catch (IOException e) {
			String msg;
			String[] strParams = null;
			msg = getProperty("Controller.SaveDocumentationError", strParams, getApplicationContext());
			LOG.error(e.toString());
			throw new Exception(msg);
		} finally {
			if (ftp.isConnected()) {
				try {
					ftp.disconnect();
				} catch (IOException ioe) {
					// do nothing
				}
			}
		}
	}

	private void ftpCreateDirectoryTree(FTPClient client, String dirTree) throws IOException {

		boolean dirExists = true;

		// tokenize the string and attempt to change into each directory level. If you
		// cannot, then start creating.
		String[] directories = dirTree.split("/");
		for (String dir : directories) {
			if (!dir.isEmpty()) {
				if (dirExists) {
					dirExists = client.changeWorkingDirectory(dir);
				}
				if (!dirExists) {
					LOG.info("creando directorio en ftp: " + sharedFolder + dir);
					//Se agrega dirTree.indexOf("GEST") == -1 para evitar errores en la primera carga con mas de 1 archivo hacia DOCUMENTAL/GESTION_CLIENTE
					if (!client.makeDirectory(dir) && dirTree.indexOf("GEST") == -1) {
						throw new IOException("Unable to create remote directory '" + dir + "'.  error='"
								+ client.getReplyString() + "'");
					}
					//Se agrega dirTree.indexOf("GEST") == -1 para evitar errores en la primera carga con mas de 1 archivo hacia DOCUMENTAL/GESTION_CLIENTE
					if (!client.changeWorkingDirectory(dir) && dirTree.indexOf("GEST") == -1) {
						throw new IOException("Unable to change into newly created remote directory '" + dir
								+ "'.  error='" + client.getReplyString() + "'");
					}
				}
			}
		}
	}

	public String getFtpServer() {
		return ftpServer;
	}

	public void setFtpServer(String ftpServer) {
		this.ftpServer = ftpServer;
	}

	public Integer getFtpPort() {
		return ftpPort;
	}

	public void setFtpPort(Integer ftpPort) {
		this.ftpPort = ftpPort;
	}

	public String getFtpUser() {
		return ftpUser;
	}

	public void setFtpUser(String ftpUser) {
		this.ftpUser = ftpUser;
	}

	public String getFtpPass() {
		return ftpPass;
	}

	public void setFtpPass(String ftpPass) {
		this.ftpPass = ftpPass;
	}

	public String getSharedFolder() {
		return sharedFolder;
	}

	public void setSharedFolder(String ftpFolder) {
		this.sharedFolder = ftpFolder;
	}

	public Integer getMaxFileSize() {
		return maxFileSize;
	}

	public void setMaxFileSize(Integer maxFilesize) {
		this.maxFileSize = maxFilesize;
	}

	public void setAcceptedFileTypes(String acceptedFileTypes) {
		this.acceptedFileTypes = acceptedFileTypes;
	}

	@RequestMapping(method = RequestMethod.GET, value = "/api/uploadFile/file-name-size")
	public ResponseEntity<?> getFileNameSize() {
		return new ResponseEntity<Integer>(fileNameSize, HttpStatus.OK);
	}

	private String encrypt(String value) {
		try {
			IvParameterSpec iv = new IvParameterSpec(initVector.getBytes("UTF-8"));
			SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes("UTF-8"), "AES");

			Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
			cipher.init(Cipher.ENCRYPT_MODE, skeySpec, iv);

			byte[] encrypted = cipher.doFinal(value.getBytes());
			LOG.info("encrypted string: " + Base64.encodeBase64String(encrypted));
			String decryptedText = Base64.encodeBase64String(encrypted);
			LOG.info(decryptedText);

			return decryptedText;
		} catch (Exception ex) {
			LOG.error(ex.getStackTrace());
		}

		return null;
	}

	private String decrypt(String encrypted) {
		try {
			IvParameterSpec iv = new IvParameterSpec(initVector.getBytes("UTF-8"));
			SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes("UTF-8"), "AES");

			Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
			cipher.init(Cipher.DECRYPT_MODE, skeySpec, iv);

			byte[] original = cipher.doFinal(Base64.decodeBase64(encrypted));

			return new String(original);
		} catch (Exception ex) {
			LOG.error(ex.getStackTrace());
		}

		return null;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getInitVector() {
		return initVector;
	}

	public void setInitVector(String initVector) {
		this.initVector = initVector;
	}
}
