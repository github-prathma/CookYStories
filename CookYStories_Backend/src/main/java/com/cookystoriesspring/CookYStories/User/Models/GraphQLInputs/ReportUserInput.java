package com.cookystoriesspring.CookYStories.User.Models.GraphQLInputs;

public class ReportUserInput {
    private String username;
    private String reportedBy;

    public ReportUserInput(String username, String reportedBy) {
        this.username = username;
        this.reportedBy = reportedBy;
    }

    public ReportUserInput() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getReportedBy() {
        return reportedBy;
    }

    public void setReportedBy(String reportedBy) {
        this.reportedBy = reportedBy;
    }
}
