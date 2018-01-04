package com.cainc.seedp.jmxscraper.repository;

import com.cainc.seedp.jmxscraper.model.ConnectorToTopic;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class ConnectorToTopicRepository {

    private Connection connection;

    public ConnectorToTopicRepository(Connection connection) {
        this.connection = connection;
    }

    public boolean updateConnectorToTopic(ConnectorToTopic link) {
        String upsertStatementStr =
                "INSERT INTO tbl_connector_topic(connector_id, topic_id, last_updated) "
                        + "VALUES (?, ?, CURRENT_TIMESTAMP) "
                        + "ON DUPLICATE KEY UPDATE last_updated = CURRENT_TIMESTAMP";
        try {
            PreparedStatement updateStatement = connection.prepareStatement(upsertStatementStr);
            updateStatement.setString(1, link.getConnectorId());
            updateStatement.setString(2, link.getTopicId());
            updateStatement.execute();
            return true;
        } catch (SQLException ex) {
            ex.printStackTrace();
            return false;
        }
    }
}
