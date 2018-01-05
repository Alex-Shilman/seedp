package com.cainc.seedp.jmxscraper.repository;

import static org.junit.Assert.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.cainc.seedp.jmxscraper.model.Schema;

public class SchemaRepositoryTest {

    private Connection connection;
    private SchemaRepository objectUnderTest;

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

        objectUnderTest = new SchemaRepository(connection);
    }

    @After
    public void tearDown() {
        cleanUpTestRecords();
    }

    @Test
    public void testSchemaInsert() {
        // given
        Schema testSchema = new Schema();
        testSchema.setId(testId);
        testSchema.setHostname("test-hostname");
        testSchema.setName("test-name");
        // TODO include health field once present

        // when
        boolean actualPersisted = objectUnderTest.updateSchema(testSchema);

        // then
        assertTrue(actualPersisted);
    }


    @Test
    public void testSchemaUpsert() {
        // given
        Schema testSchema = new Schema();
        testSchema.setId(testId);
        testSchema.setHostname("test-hostname");
        testSchema.setName("test-name");
        // TODO include health field once present

        // when
        objectUnderTest.updateSchema(testSchema);
        boolean actualPersistedAgain = objectUnderTest.updateSchema(testSchema);

        // then
        assertTrue(actualPersistedAgain);
    }

    private void cleanUpTestRecords() {
        try {
            String deleteStatementStr = "DELETE FROM tbl_databases WHERE id = ?";
            PreparedStatement deleteTestTecord = connection.prepareStatement(deleteStatementStr);
            deleteTestTecord.setString(1, testId);
            deleteTestTecord.execute();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
}
