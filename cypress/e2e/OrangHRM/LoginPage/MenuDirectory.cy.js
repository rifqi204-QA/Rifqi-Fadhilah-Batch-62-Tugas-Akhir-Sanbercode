/// <reference types="cypress"/>
import loginPage from "../../../POM/OrangeHRM/Login/login";
import DashboardDirectory from "../../../POM/OrangeHRM/Login/MenuDirectory";

describe('Dashboard : Directory', () => {
it('Search by Filter Employee Name', () => {
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       loginPage.textLogin().should('have.text','Login');
       loginPage.inputUsername().type('Admin');
       loginPage.inputPassword().type('admin123');
       cy.intercept("GET","**/employees/action-summary").as("actionsummary");
       loginPage.buttonLogin().click();
       cy.wait("@actionsummary").then((intercept) => {
           expect(intercept.response.statusCode).to.equal(200)
       });
       loginPage.menuDashboard().should('have.text','Dashboard');
       cy.intercept("GET","**/index.php/api/v2/directory/*").as("employ-limit");
       DashboardDirectory.menuDirectory().click();
       cy.wait("@employ-limit").then((intercept)=>{
        expect(intercept.response.statusCode).to.equal(200)
       });
       DashboardDirectory.inputEmployeeName().type('Peter');
       DashboardDirectory.dropdownEmployee().should('contain.text', 'Peter').click();
       DashboardDirectory.buttonSearch().click();
    })
// it('Search by Filter Job Title', () => {
//        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//        loginPage.textLogin().should('have.text','Login');
//        loginPage.inputUsername().type('Admin');
//        loginPage.inputPassword().type('admin123');
//        cy.intercept("GET","**/employees/action-summary").as("actionsummary");
//        loginPage.buttonLogin().click();
//        cy.wait("@actionsummary").then((intercept) => {
//            expect(intercept.response.statusCode).to.equal(200)
//        });
//        loginPage.menuDashboard().should('have.text','Dashboard');
//        cy.intercept("GET","**/index.php/api/v2/directory/*").as("employ-limit");
//        cy.get('[href="/web/index.php/directory/viewDirectory"]').click();
//        cy.wait("@employ-limit").then((intercept)=>{
//         expect(intercept.response.statusCode).to.equal(200)
//        });
//        cy.get('[class="oxd-input-group__label-wrapper"]').get('[class="oxd-label"]').should('contain.text','Job Title');
//        cy.get('[class="oxd-select-wrapper"]');
//        cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(0).scrollIntoView().click();
//     })

})