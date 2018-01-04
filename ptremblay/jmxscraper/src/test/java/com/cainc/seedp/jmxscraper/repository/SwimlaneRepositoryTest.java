package com.cainc.seedp.jmxscraper.repository;

import static org.junit.Assert.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.cainc.seedp.jmxscraper.model.Swimlane;

public class SwimlaneRepositoryTest {

    private Connection connection;
    private SwimlaneRepository objectUnderTest;

    private int testId = 12345;

    @Before
    public void setUp() {
        // TODO pull creds from DPConfig (dp.conf) once available
        String hostname = "10.25.1.123";
        String schema = "seedp";
        String username = "ireadyRW";
        String password = "readwrite";
        connection = MySQLConnectionFactory.getConnection(hostname, schema, username, password);
        cleanUpTestRecords();

        objectUnderTest = new SwimlaneRepository(connection);
    }

    @After
    public void tearDown() {
        cleanUpTestRecords();
    }

    @Test
    public void testSwimlaneInsert() {
        // given
        Swimlane testSwimlane = new Swimlane();
        testSwimlane.setId(testId);
        testSwimlane.setData("{\"foo\":\"bar\"}");

        // when
        boolean actualPersisted = objectUnderTest.updateSwimlane(testSwimlane);

        // then
        assertTrue(actualPersisted);
    }

    @Test
    public void testSwimlaneUpsert() {
        // given
        Swimlane testSwimlane = new Swimlane();
        testSwimlane.setId(testId);
        testSwimlane.setData("{\"foo\":\"bar\"}");

        // when
        objectUnderTest.updateSwimlane(testSwimlane);
        boolean actualPersistedAgain = objectUnderTest.updateSwimlane(testSwimlane);

        // then
        assertTrue(actualPersistedAgain);
    }

    private void cleanUpTestRecords() {
        try {
            String deleteStatementStr = "DELETE FROM tbl_swimlanes WHERE id = ?";
            PreparedStatement deleteTestTecord = connection.prepareStatement(deleteStatementStr);
            deleteTestTecord.setInt(1, testId);
            deleteTestTecord.execute();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
}
