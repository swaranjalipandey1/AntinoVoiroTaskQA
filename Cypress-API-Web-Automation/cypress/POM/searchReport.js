class searchReport{
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
      }

      navigateToSearchReport(){
        cy.get(".d-inline-flex > :nth-child(1) > a").click({force:true,multiple: true });
        cy.wait(5000);
        cy.get(".material-text-field").click({force:true}).type('AntinoReporttask');
        cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > [style="width: 375px; min-width: 375px; max-width: 375px; height: auto;"] > .datatable-body-cell-label > app-cell > .d-flex > .w-100').should('have.text','AntinoReporttask');
      }


      
}

export default searchReport;