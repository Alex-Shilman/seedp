package com.cainc.seedp.jmxscraper.repository;


import static org.junit.Assert.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.cainc.seedp.jmxscraper.model.ConnectorToTopic;

public class ConnectorToTopicRepositoryTest {

    private Connection connection;
    private ConnectorToTopicRepository objectUnderTest;

    private String testConnectorId = "test_connector_id";
    private String testTopicId = "test_topic_id";


    @Before
    public void setUp() {
        // TODO pull creds from DPConfig (dp.conf) once available
        String hostname = "10.25.1.123";
        String schema = "seedp";
        String username = "ireadyRW";
        String password = "readwrite";
        connection = MySQLConnectionFactory.getConnection(hostname, schema, username, password);
        cleanUpTestRecords();

        objectUnderTest = new ConnectorToTopicRepository(connection);
    }

    @After
    public void tearDown() {
        cleanUpTestRecords();
    }


    @Test
    public void testConnectorTopicLinkInsert() {
        // given
        ConnectorToTopic testLink = new ConnectorToTopic();
        testLink.setConnectorId(testConnectorId);
        testLink.setTopicId(testTopicId);

        // when
        boolean actualPersisted = objectUnderTest.updateConnectorToTopic(testLink);

        // then
        assertTrue(actualPersisted);
    }


    @Test
    public void testConnectorTopicLinkUpsert() {
        // given
        ConnectorToTopic testLink = new ConnectorToTopic();
        testLink.setConnectorId(testConnectorId);
        testLink.setTopicId(testTopicId);

        // when
        objectUnderTest.updateConnectorToTopic(testLink);
        boolean actualPersistedAgain = objectUnderTest.updateConnectorToTopic(testLink);

        // then
        assertTrue(actualPersistedAgain);
    }

    private void cleanUpTestRecords() {
        try {
            String deleteStatementStr = "DELETE FROM tbl_connector_topic WHERE connector_id = ? AND topic_id = ?";
            PreparedStatement deleteTestTecord = connection.prepareStatement(deleteStatementStr);
            deleteTestTecord.setString(1, testConnectorId);
            deleteTestTecord.setString(2, testTopicId);
            deleteTestTecord.execute();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
}
