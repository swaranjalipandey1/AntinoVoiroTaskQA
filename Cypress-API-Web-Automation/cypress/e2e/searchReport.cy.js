import searchReport from "../POM/searchReport";

describe('Search Report Feature with DDT', () => {
    const SearchReport = new searchReport();
  
    it("test",() => {
      cy.fixture('createReportData').then((data) => {
        SearchReport.visit();
        SearchReport.login(data.login.username, data.login.password);
        cy.wait(6000)
        SearchReport.navigateToCreateReport();
        SearchReport.navigateToSearchReport();
        
        // cy.fixture('createReportData').then((data)=>{
        //   createReportPage.fillReportDetails(reportDetails);
  
        // })
  
  
      
      });
    });
});