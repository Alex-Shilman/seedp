package com.cainc.seedp.jmxscraper.repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.cainc.seedp.jmxscraper.model.KafkaTopic;


public class TopicRepository {

    private Connection connection;

    public TopicRepository(String hostname, String schema, String username, String password) {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            String jdbcConnectionStr = "jdbc:mysql://" + hostname + ":3306/" + schema;
            connection = DriverManager.getConnection(jdbcConnectionStr, username, password);
        } catch (ClassNotFoundException ex) {
            throw new IllegalArgumentException("JDBC driver not found.");
        } catch (SQLException ex) {
            throw new IllegalArgumentException(ex.getMessage());
        }
    }

    public boolean updateTopicStatus(KafkaTopic kafkaTopic) {
        String upsertStatementStr =
                "INSERT INTO tbl_topic(id, name, node_id, last_updated) "
                + "VALUES (?, ?, ?, CURRENT_TIMESTAMP) "
                + "ON DUPLICATE KEY UPDATE last_updated = CURRENT_TIMESTAMP";
        try {
            PreparedStatement updateStatement = connection.prepareStatement(upsertStatementStr);
            updateStatement.setString(1, kafkaTopic.getId());
            updateStatement.setString(2, kafkaTopic.getName());
            updateStatement.setString(3, kafkaTopic.getNodeId());
            return updateStatement.execute();
        } catch (SQLException ex) {
            ex.printStackTrace();
            return false;
        }
    }
}
