package com.spia.businessportal.common.entities;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;

/**
 * Entidad que representa al usuario agente.
 * 
 * @author leandro
 *
 */
public class BooleanDeserializer implements JsonDeserializer<Boolean> {

    @Override
    public Boolean deserialize(JsonElement jsonElement, java.lang.reflect.Type type,
            JsonDeserializationContext jsonDeserializationContext) throws JsonParseException {
        // TODO Auto-generated method stub
        return jsonElement.getAsInt() == 0 ? false : true;
    }
}