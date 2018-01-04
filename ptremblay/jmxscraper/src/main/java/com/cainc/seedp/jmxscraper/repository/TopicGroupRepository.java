package com.cainc.seedp.jmxscraper.repository;

import com.cainc.seedp.jmxscraper.model.TopicGroup;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class TopicGroupRepository {

    private Connection connection;

    public TopicGroupRepository(Connection connection) {
        this.connection = connection;
    }

    public boolean updateTopicGroup(TopicGroup topicGroup) {
        String upsertStatementStr =
                "REPLACE INTO tbl_topic_group(id, disp_name) "
                + "VALUES (?, ?) ";
        try {
            PreparedStatement updateStatement = connection.prepareStatement(upsertStatementStr);
            updateStatement.setString(1, topicGroup.getId());
            updateStatement.setString(2, topicGroup.getDisplayName());
            updateStatement.execute();
            return true;
        } catch (SQLException ex) {
            ex.printStackTrace();
            return false;
        }
    }
}
