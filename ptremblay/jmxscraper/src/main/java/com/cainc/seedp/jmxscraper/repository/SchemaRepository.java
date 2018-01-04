package com.cainc.seedp.jmxscraper.repository;

import com.cainc.seedp.jmxscraper.model.Schema;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class SchemaRepository {

    private Connection connection;

    public SchemaRepository(Connection connection) {
        this.connection = connection;
    }

    public boolean updateSchema(Schema schema) {
        String upsertStatementStr =
                "INSERT INTO tbl_databases(id, host, name, last_updated) "
                + "VALUES (?, ?, ?, CURRENT_TIMESTAMP) "
                + "ON DUPLICATE KEY UPDATE last_updated = CURRENT_TIMESTAMP";
        try {
            PreparedStatement updateStatement = connection.prepareStatement(upsertStatementStr);
            updateStatement.setString(1, schema.getId());
            updateStatement.setString(2, schema.getHostname());
            updateStatement.setString(3, schema.getName());
            updateStatement.execute();
            return true;
        } catch (SQLException ex) {
            ex.printStackTrace();
            return false;
        }
    }
}
