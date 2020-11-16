package com.cookystoriesspring.CookYStories.User.Models.GraphQLInputs;

public class ReportPostInput {
    private String postId;
    private String reportedBy;

    public ReportPostInput() {
    }

    public ReportPostInput(String postId, String reportedBy) {
        this.postId = postId;
        this.reportedBy = reportedBy;
    }

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    public String getReportedBy() {
        return reportedBy;
    }

    public void setReportedBy(String reportedBy) {
        this.reportedBy = reportedBy;
    }
}
