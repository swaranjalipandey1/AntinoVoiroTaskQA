class CheckRequiredFields {
    visit() {
      cy.visit("https://demo.voiro.com/phoenix/");
    }
  
    login(username, password) {
      cy.get("#username").type(username);
      cy.get("#password").type(password);
      cy.get('button[type="submit"]').click();
    }
  
    navigateToCreateReport() {
      cy.get(".icon3-report-builder").click();
      cy.wait(9000);
      cy.get(".cursor > .icon2-add").click();
    }
    checkReqFields() {
      cy.get('#name').clear();
      cy.get("#name").should("have.value", "");
      cy.get("#dateRangeType").click();
      cy.get(".typehead-dropdown-scroller > :nth-child(1) > span").click();
      cy.get("#date_range").click();
      cy.get(".bs-datepicker-container").should("be.visible");
      cy.get(
        ":nth-child(1) > bs-calendar-layout > .bs-datepicker-head > bs-datepicker-navigation-view > .ng-star-inserted > span"
      );
      cy.get(
        ":nth-child(1) > bs-calendar-layout > .bs-datepicker-body > .days > tbody > :nth-child(1) > :nth-child(6) > .ng-star-inserted"
      ).click();
      cy.get(
        ":nth-child(1) > bs-calendar-layout > .bs-datepicker-body > .days > tbody > :nth-child(2) > :nth-child(1) > .ng-star-inserted"
      ).click();
      cy.get(
        ".px-3 > .form-group > .w-100 > app-tab-multi-select-checkbox > .section > .sectionHeader > .main-chips > .chip-parent > :nth-child(2) > .paused"
      ).click();
      cy.wait(2000);
      cy.get('.btn-outline-primary').click();
      cy.get('#name_field > span').should('have.text','  is a required field. ');
    }
  }
  
  export default CheckRequiredFields;
  