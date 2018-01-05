package com.cainc.seedp.jmxscraper.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.cainc.seedp.jmxscraper.model.Connector;

public class ConnectorRepository {

    private Connection connection;

    public ConnectorRepository(Connection connection) {
        this.connection = connection;
    }

    public boolean updateConnector(Connector connector) {
        // TODO add health state once available
        String upsertStatementStr =
                "INSERT INTO tbl_connector("
                + "     id, node_id, type, database_id, status, derived_details, full_config, last_updated) "
                + "VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP) "
                + "ON DUPLICATE KEY "
                + "UPDATE last_updated = CURRENT_TIMESTAMP";
        try {
            PreparedStatement updateStatement = connection.prepareStatement(upsertStatementStr);
            updateStatement.setString(1, connector.getId());
            updateStatement.setString(2, connector.getNodeId());
            updateStatement.setString(3, connector.getType());
            updateStatement.setString(4, connector.getDatabaseId());
            updateStatement.setString(5, connector.getStatus());
            updateStatement.setString(6, connector.getDerivedDetails());
            updateStatement.setString(7, connector.getFullConfig());
            updateStatement.execute();
            return true;
        } catch (SQLException ex) {
            ex.printStackTrace();
            return false;
        }
    }
}
