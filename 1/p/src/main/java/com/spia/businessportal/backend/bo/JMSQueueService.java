package com.spia.businessportal.backend.bo;

import java.util.List;
import java.util.Map;

public interface JMSQueueService {

	void sendMessages(List<Map<String, String>> messages);
}
