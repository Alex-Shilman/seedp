package com.cainc.seedp.jmxscraper.repository;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import com.cainc.seedp.jmxscraper.model.KafkaTopic;

public class TopicRepositoryTest {

    private TopicRepository objectUnderTest;

    @Before
    public void setUp() {
        String hostname = "10.25.1.123";
        String schema = "seedp";
        String username = "ireadyRW";
        String password = "readwrite";
        objectUnderTest = new TopicRepository(hostname, schema, username, password);
    }

    @Test
    public void testKafkaTopicInsert() {
        // given
        KafkaTopic testTopic = new KafkaTopic();
        testTopic.setId("test_id");
        testTopic.setName("test_name");
        testTopic.setNodeId("test_node_id");

        // when
        boolean actualPersisted = objectUnderTest.updateTopicStatus(testTopic);

        // then
        assertTrue(actualPersisted);
    }
}
