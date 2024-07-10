import CheckRequiredFields from "../POM/checkRequiredFields";

describe("Create report with empty fields", () => {
  const checkRequiredFields = new CheckRequiredFields();

  it("test", () => {
    cy.fixture("checkRequiredData").then((data) => {
      checkRequiredFields.visit();
      checkRequiredFields.login(data.login.username, data.login.password);
      cy.wait(6000);
      checkRequiredFields.navigateToCreateReport();
      checkRequiredFields.checkReqFields();
    });
  });
});
