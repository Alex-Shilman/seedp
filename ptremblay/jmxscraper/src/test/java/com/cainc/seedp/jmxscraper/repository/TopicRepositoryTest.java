package com.cainc.seedp.jmxscraper.repository;

import static org.junit.Assert.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.cainc.seedp.jmxscraper.model.Topic;

public class TopicRepositoryTest {

    private Connection connection;
    private TopicRepository objectUnderTest;

    private String testId = "test_id";


    @Before
    public void setUp() {
        // TODO pull creds from DPConfig (dp.conf) once available
        String hostname = "10.25.1.123";
        String schema = "seedp";
        String username = "ireadyRW";
        String password = "readwrite";
        connection = MySQLConnectionFactory.getConnection(hostname, schema, username, password);
        cleanUpTestRecords();

        objectUnderTest = new TopicRepository(connection);
    }

    @After
    public void tearDown() {
        cleanUpTestRecords();
    }

    @Test
    public void testTopicInsert() {
        // given
        Topic testTopic = new Topic();
        testTopic.setId(testId);
        testTopic.setName("test_name");
        testTopic.setNodeId("test_node_id");

        // when
        boolean actualPersisted = objectUnderTest.updateTopic(testTopic);

        // then
        assertTrue(actualPersisted);
    }

    @Test
    public void testTopicUpsert() {
        // given
        Topic testTopic = new Topic();
        testTopic.setId(testId);
        testTopic.setName("test_name");
        testTopic.setNodeId("test_node_id");

        // when
        objectUnderTest.updateTopic(testTopic);
        boolean actualPersistedAgain = objectUnderTest.updateTopic(testTopic);

        // then
        assertTrue(actualPersistedAgain);
    }

    private void cleanUpTestRecords() {
        try {
            String deleteStatementStr = "DELETE FROM tbl_topic WHERE id = ?";
            PreparedStatement deleteTestTecord = connection.prepareStatement(deleteStatementStr);
            deleteTestTecord.setString(1, testId);
            deleteTestTecord.execute();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
}
