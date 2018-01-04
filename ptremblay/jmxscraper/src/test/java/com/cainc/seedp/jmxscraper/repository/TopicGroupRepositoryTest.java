package com.cainc.seedp.jmxscraper.repository;

import static org.junit.Assert.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.cainc.seedp.jmxscraper.model.TopicGroup;

public class TopicGroupRepositoryTest {

    private Connection connection;
    private TopicGroupRepository objectUnderTest;

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

        objectUnderTest = new TopicGroupRepository(connection);
    }

    @After
    public void tearDown() {
        cleanUpTestRecords();
    }

    @Test
    public void testTopicGroupInsert() {
        // given
        TopicGroup testGroup = new TopicGroup();
        testGroup.setId(testId);
        testGroup.setDisplayName("test-topic-group");

        // when
        boolean actualPersisted = objectUnderTest.updateTopicGroup(testGroup);

        // then
        assertTrue(actualPersisted);
    }


    @Test
    public void testTopicGroupUpsert() {
        // given
        TopicGroup testGroup = new TopicGroup();
        testGroup.setId(testId);
        testGroup.setDisplayName("test-topic-group");

        // when
        objectUnderTest.updateTopicGroup(testGroup);
        boolean actualPersistedAgain = objectUnderTest.updateTopicGroup(testGroup);

        // then
        assertTrue(actualPersistedAgain);
    }

    private void cleanUpTestRecords() {
        try {
            String deleteStatementStr = "DELETE FROM tbl_topic_group WHERE id = ?";
            PreparedStatement deleteTestTecord = connection.prepareStatement(deleteStatementStr);
            deleteTestTecord.setString(1, testId);
            deleteTestTecord.execute();
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }
}
