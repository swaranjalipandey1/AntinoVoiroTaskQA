class CreateReportPage {
    visit() {
      cy.visit('https://demo.voiro.com/phoenix/'); // Update this with the correct login URL if needed
    }
  
    login(username, password) {
      cy.get('#username').type(username);
      cy.get('#password').type(password);
      cy.get('button[type="submit"]').click();
    }
  
    navigateToCreateReport() {
       
      cy.get(".icon3-report-builder").click(); // Update with the actual selector
      cy.wait(9000)
      cy.get('.cursor > .icon2-add').click();
    }
    createReport(){
      cy.get('#name').clear().type('AntinoReporttask');
      cy.get('#dateRangeType').click();
      cy.get('.typehead-dropdown-scroller > :nth-child(1) > span').click();
      cy.get('#date_range').click();
      cy.get('.bs-datepicker-container').should('be.visible');
      cy.get(':nth-child(1) > bs-calendar-layout > .bs-datepicker-head > bs-datepicker-navigation-view > .ng-star-inserted > span');
      cy.get(':nth-child(1) > bs-calendar-layout > .bs-datepicker-body > .days > tbody > :nth-child(1) > :nth-child(6) > .ng-star-inserted').click();
      cy.get(':nth-child(1) > bs-calendar-layout > .bs-datepicker-body > .days > tbody > :nth-child(2) > :nth-child(1) > .ng-star-inserted').click();
      cy.get('.px-3 > .form-group > .w-100 > app-tab-multi-select-checkbox > .section > .sectionHeader > .main-chips > .chip-parent > :nth-child(2) > .paused').click();
      cy.wait(2000);
      cy.get('.px-3 > .form-group > .w-100 > app-tab-multi-select-checkbox > .section > .sectionHeader > .row.align-items-center > .d-flex > label > .ng-untouched').click();
      cy.get('.px-2 > .form-group > .w-100 > app-tab-multi-select-checkbox > .section > .sectionHeader > .main-wrapper > .row > :nth-child(1) > .d-flex > .me-3').click();
      cy.get('.btn-outline-primary').click();
      cy.get('[data-layer="Content"]').should('have.text',' Report created successfully ');
    

      // cy.get(':nth-child(1) > bs-calendar-layout > .bs-datepicker-body > .days > tbody > :nth-child(1) > :nth-child(2) > .ng-star-inserted').click();
      // cy.get(':nth-child(3) > :nth-child(4) > .in-range').click();
  
    
    }
  
    // fillReportDetails(details) {
    //   cy.get('input[name="reportName"]').type(details.name);
    //   cy.get('textarea[name="description"]').type(details.description);
    //   cy.get('input[name="date"]').type(details.date);
    //   // Add more fields as necessary based on your application
    // }
  
    // submitReport() {
    //   cy.get('button[type="submit"]').click();
    // }
  
    // verifyReportCreation() {
    //   cy.contains('Report created successfully').should('be.visible');
    //   // Add more verification steps as necessary
    // }
  }
  
  export default CreateReportPage;
  