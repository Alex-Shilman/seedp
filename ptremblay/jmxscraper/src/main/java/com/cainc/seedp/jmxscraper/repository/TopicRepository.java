package com.cainc.seedp.jmxscraper.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.cainc.seedp.jmxscraper.model.Topic;


public class TopicRepository {

    private Connection connection;

    public TopicRepository(Connection connection) {
        this.connection = connection;
    }

    public boolean updateTopic(Topic topic) {
        String upsertStatementStr =
                "INSERT INTO tbl_topic(id, name, node_id, topic_group_id, last_updated) "
                + "VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP) "
                + "ON DUPLICATE KEY UPDATE last_updated = CURRENT_TIMESTAMP";
        try {
            PreparedStatement updateStatement = connection.prepareStatement(upsertStatementStr);
            updateStatement.setString(1, topic.getId());
            updateStatement.setString(2, topic.getName());
            updateStatement.setString(3, topic.getNodeId());
            updateStatement.setString(4, topic.getTopicGroupId());
            updateStatement.execute();
            return true;
        } catch (SQLException ex) {
            ex.printStackTrace();
            return false;
        }
    }
}
