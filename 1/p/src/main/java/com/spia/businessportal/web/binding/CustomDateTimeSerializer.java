/**
 * 
 */
package com.spia.businessportal.web.binding;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

/**
 * implementación de {@link JsonSerializer} para DateTime
 * @author diego
 *
 */
public class CustomDateTimeSerializer extends JsonSerializer<Date> {
	
	
	/**
	 * 
	 */
	public CustomDateTimeSerializer() {
		super();
	}

	@Override
	public void serialize(Date value, JsonGenerator jgen,
			SerializerProvider provider) throws IOException, JsonProcessingException {
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm");
		String formattedDate = formatter.format(value);
		jgen.writeString(formattedDate);
	}
}
