package com.cainc.seedp.jmxscraper.model;

public class Connector {

    private String id;
    private String nodeId;
    private String type;
    private String databaseId;
    private String status;
    private String derivedDetails;
    private String fullConfig;
    private SystemHealth health;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNodeId() {
        return nodeId;
    }

    public void setNodeId(String nodeId) {
        this.nodeId = nodeId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDatabaseId() {
        return databaseId;
    }

    public void setDatabaseId(String databaseId) {
        this.databaseId = databaseId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDerivedDetails() {
        return derivedDetails;
    }

    public void setDerivedDetails(String derivedDetails) {
        this.derivedDetails = derivedDetails;
    }

    public String getFullConfig() {
        return fullConfig;
    }

    public void setFullConfig(String fullConfig) {
        this.fullConfig = fullConfig;
    }

    public SystemHealth getHealth() {
        return health;
    }

    public void setHealth(SystemHealth health) {
        this.health = health;
    }
}
