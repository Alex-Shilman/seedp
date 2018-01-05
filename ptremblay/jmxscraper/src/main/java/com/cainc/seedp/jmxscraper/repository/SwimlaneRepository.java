package com.cainc.seedp.jmxscraper.repository;

import com.cainc.seedp.jmxscraper.model.Swimlane;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class SwimlaneRepository {

    private Connection connection;

    public SwimlaneRepository(Connection connection) {
        this.connection = connection;
    }

    public boolean updateSwimlane(Swimlane swimlane) {
        String upsertStatementStr =
                "REPLACE INTO tbl_swimlanes(id, swimlanes_json) "
                + "VALUES (?, ?)";
        try {
            PreparedStatement updateStatement = connection.prepareStatement(upsertStatementStr);
            updateStatement.setInt(1, swimlane.getId());
            updateStatement.setString(2, swimlane.getData());
            updateStatement.execute();
            return true;
        } catch (SQLException ex) {
            ex.printStackTrace();
            return false;
        }
    }
}
