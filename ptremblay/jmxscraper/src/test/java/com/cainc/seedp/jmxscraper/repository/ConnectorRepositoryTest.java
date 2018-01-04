package com.cainc.seedp.jmxscraper.repository;

import static org.junit.Assert.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.cainc.seedp.jmxscraper.model.Connector;

public class ConnectorRepositoryTest {

    private Connection connection;
    private ConnectorRepository objectUnderTest;

    private String testId = "test_id";
    private String testNodeId = "test_node_id";


    @Before
    public void setUp() {
        // TODO pull creds from DPConfig (dp.conf) once available
        String hostname = "10.25.1.123";
        String schema = "seedp";
        String username = "ireadyRW";
        String password = "readwrite";
        connection = MySQLConnectionFactory.getConnection(hostname, schema, username, password);
        cleanUpTestRecords();

        objectUnderTest = new ConnectorRepository(connection);
    }

    @After
    public void tearDown() {
        cleanUpTestRecords();
    }

    @Test
    public void testConnectorInsert() {
        // given
        Connector testConnector = new Connector();
        testConnector.setId(testId);
        testConnector.setNodeId(testNodeId);
        testConnector.setType("debezium_mysql");
        testConnector.setDatabaseId("test_slave_dbz_iready");
        testConnector.setStatus("test--RUNNING");
        testConnector.setDerivedDetails("{\"test\":\"foo\",\"bar\":\"baz\"}");
        testConnector.setFullConfig("{\"hostname\":\"foobar.baz\"}");
        // TODO include health field once present

        // when
        boolean actualPersisted = objectUnderTest.updateConnector(testConnector);

        // then
        assertTrue(actualPersisted);
    }

    @Test
    public void testConnectorUpsert() {
        // given
        Connector testConnector = new Connector();
        testConnector.setId(testId);
        testConnector.setNodeId(testNodeId);
        testConnector.setType("debezium_mysql");
        testConnector.setDatabaseId("test_slave_dbz_iready");
        testConnector.setStatus("test--RUNNING");
        testConnector.setDerivedDetails("{\"test\":\"foo\",\"bar\":\"baz\"}");
        testConnector.setFullConfig("{\"hostname\":\"foobar.baz\"}");
        // TODO include health field once present

        // when
        objectUnderTest.updateConnector(testConnector);
        boolean actualPersistedAgain = objectUnderTest.updateConnector(testConnector);

        // then
        assertTrue(actualPersistedAgain);
    }

    private void cleanUpTestRecords() {
        try {
            String deleteStatementStr = "DELETE FROM tbl_connector WHERE id = ? AND node_id = ?";
            PreparedStatement deleteTestTecord = connection.prepareStatement(deleteStatementStr);
            deleteTestTecord.setString(1, testId);
            deleteTestTecord.setString(2, testNodeId);
            deleteTestTecord.execute();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
}
