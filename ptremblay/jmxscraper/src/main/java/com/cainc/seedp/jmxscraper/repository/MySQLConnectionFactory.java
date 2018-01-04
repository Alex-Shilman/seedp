package com.cainc.seedp.jmxscraper.repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySQLConnectionFactory {

    public static Connection getConnection(String hostname, String schema, String username, String password) {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            String jdbcConnectionStr = "jdbc:mysql://" + hostname + ":3306/" + schema;
            return DriverManager.getConnection(jdbcConnectionStr, username, password);
        } catch (ClassNotFoundException ex) {
            throw new IllegalArgumentException("JDBC driver not found.");
        } catch (SQLException ex) {
            throw new IllegalArgumentException(ex.getMessage());
        }
    }
}
