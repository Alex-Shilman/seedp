package com.cainc.seedp;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.common.PartitionInfo;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.json.JSONArray;
import org.json.JSONObject;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

public class SeeDP
{
	
	public static final String CONNECTOR_CLASS_DEBEZIUM = "io.debezium.connector.mysql.MySqlConnector";
	public static final String CONNECTOR_CLASS_S3 = "io.confluent.connect.s3.S3SinkConnector";
		
	protected void process() throws Exception {
		print("Staring...");
		
		JSONArray connectors = getConnectors();
		
		for (Object connector : connectors) {
			String connectorName = connector.toString();
			print(connectorName);
			
			JSONObject config = getConnectorConfig(connectorName);
			String connectorClass = config.getString("connector.class");
			if (CONNECTOR_CLASS_DEBEZIUM == connectorClass) {
				processDebeziumConfig(connectorName, config);
			}
			else if (CONNECTOR_CLASS_S3 == connectorClass) {
				processS3Config(connectorName, config);
			}
			else {
				throw new Exception("Bad connector class");
			}
									
		}
	}
	
	protected void processS3Config(String connectorName, JSONObject config) {		

	}
	
	protected void processDebeziumConfig(String connectorName, JSONObject config) {		
		String dbHost = config.getString("database.hostname");
		String dbName = config.getString("database.whitelist");
		String topicRouter = config.getString("transforms.router.replacement");
				
		print(dbHost);
		print(dbName);
		print(topicRouter);
		print(config.toString());
	}
	
	protected List<String> getTopics() {
		List<String> topicNames = new ArrayList<String>();
		try (KafkaConsumer<String, String> consumer = createKafkaConsumer();) {
			Map<String, List<PartitionInfo>> topics = consumer.listTopics();
			
			for (String topicName : topics.keySet()) {
				topicNames.add(topicName);
			}
		}
		
		return topicNames;
	}
	
    protected KafkaConsumer<String, String> createKafkaConsumer() {
    	Properties kafkaConsumerProps = new Properties();
        kafkaConsumerProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        kafkaConsumerProps.put(ConsumerConfig.GROUP_ID_CONFIG, "consumer_see_dp");
        kafkaConsumerProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
        kafkaConsumerProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
        return new KafkaConsumer<String, String>(kafkaConsumerProps);
    }

	protected JSONObject getConnectorConfig(String connectorName) throws UnirestException {
		JsonNode node = getRestData("http://localhost:8083/connectors/" + connectorName + "/config");
		return node.getObject();		
	}
	
	protected JSONArray getConnectors() throws UnirestException {
		JsonNode node = getRestData("http://localhost:8083/connectors");
		return node.getArray();		
	}
	
	protected JsonNode getRestData(String endpoint) throws UnirestException {
		HttpResponse<JsonNode> response = Unirest.get(endpoint)
	        .header("Accept","application/json")
			.header("Content-Type","application/json")
	        .asJson();
		
		return response.getBody();
	}
	
    public static void main( String[] args ) throws Exception
    {
    	new SeeDP().process();
    }
    
    protected void print(String s){
        System.out.println(s);
    }
}
