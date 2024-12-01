package com.spia.businessportal.common.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.jms.Connection;
import javax.jms.ConnectionFactory;
import javax.jms.Destination;
import javax.jms.JMSException;
import javax.jms.MessageProducer;
import javax.jms.ObjectMessage;
import javax.jms.Session;

 
public class Producer
{
    private ConnectionFactory factory;
    private Connection connection;
    private Session session;
    private MessageProducer producer;
    private List<Map<String, String>> messages;
    private String fromMail;
 
    public Producer(ConnectionFactory factory, String queueName, String fromMail) throws JMSException
    {
        this.factory = factory;
        connection = factory.createConnection();
        connection.start();
        session = connection.createSession(false, Session.AUTO_ACKNOWLEDGE);
        Destination destination = session.createQueue(queueName);
        producer = session.createProducer(destination);
        this.setFromMail(fromMail);
    }
 
    public void run() throws JMSException
    {
        for(Map<String, String> mapMessage : messages){
        	ObjectMessage message = session.createObjectMessage();
        	message.setStringProperty("from", fromMail);
        	for (Map.Entry<String, String> entry : mapMessage.entrySet()){
        		message.setStringProperty(entry.getKey(), entry.getValue());
        	}
        	producer.send(message);
        }        
    }
 
    public void close() throws JMSException
    {
        if (connection != null)
        {
            connection.close();
        }
    }

	public List<Map<String, String>> getMessages() {
		if(messages == null){
			messages = new ArrayList<Map<String, String>>();
		}
		return messages;
	}

	public void setMessages(List<Map<String, String>> messages) {
		this.messages = messages;
	}

	public String getFromMail() {
		return fromMail;
	}

	public void setFromMail(String fromMail) {
		this.fromMail = fromMail;
	}
    
}