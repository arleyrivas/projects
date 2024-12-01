package com.spia.businessportal.web.controller;

import java.lang.reflect.Type;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;

public class DateDeserializer implements JsonDeserializer<Date> {

	@Override
	public Date deserialize(JsonElement element, Type arg1, JsonDeserializationContext arg2) throws JsonParseException {
	if (element.isJsonNull())
		return null;

      String s = element.getAsJsonPrimitive().getAsString();
      long l = Long.parseLong(s.substring(6, s.length() - 2));
      Date d = new Date(l);

      return d; 
	}
}
