package com.spia.businessportal.backend.bo.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.jms.ConnectionFactory;

import org.apache.activemq.ActiveMQConnectionFactory;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Value;

import com.spia.businessportal.backend.bo.JMSQueueService;
import com.spia.businessportal.common.utils.Producer;

public class JMSQueueServiceImpl implements JMSQueueService{

	private static final Log LOG = LogFactory.getLog(JMSQueueServiceImpl.class);
	
//	@Value("${jms.url}")
	private String jmsUrl;
//	@Value("${jms.queue}")
	private String jmsQueue;
//	@Value("${jms.user}")
	private String jmsUser;
//	@Value("${jms.password}")
	private String jmsPassword;
//	@Value("${mail.from}")
	private String from;
	
	@Override
	public void sendMessages(List<Map<String, String>> messages) {
		ConnectionFactory factory = null;
		try{
			factory = new ActiveMQConnectionFactory(jmsUser, jmsPassword, jmsUrl);
			
			Producer producer = new Producer(factory, jmsQueue, from);
			producer.getMessages().addAll(messages);
			producer.run();
			producer.close();
			
		} catch (Exception e){
			LOG.error(e.getMessage(), e);
		}	
	}	
	
	public String getJmsUrl() {
		return jmsUrl;
	}
	public void setJmsUrl(String jmsUrl) {
		this.jmsUrl = jmsUrl;
	}
	public String getJmsQueue() {
		return jmsQueue;
	}
	public void setJmsQueue(String jmsQueue) {
		this.jmsQueue = jmsQueue;
	}
	public String getJmsPassword() {
		return jmsPassword;
	}
	public void setJmsPassword(String jmsPassword) {
		this.jmsPassword = jmsPassword;
	}
	public String getJmsUser() {
		return jmsUser;
	}
	public void setJmsUser(String jmsUser) {
		this.jmsUser = jmsUser;
	}

}
