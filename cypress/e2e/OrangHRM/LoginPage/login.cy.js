/// <reference types="cypress"/>
import loginPage from "../../../POM/OrangeHRM/Login/login";

describe('Login Feature', () => {
   it('user Login with valid credentials', () => {
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
   });
   it('Login dengan username tidak terdaftar', () => {
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       loginPage.textLogin().should('have.text','Login');
       loginPage.inputUsername().type('superadmin');
       loginPage.inputPassword().type('admin123');
       cy.intercept("GET","**/index.php/core/i18n/messages").as("messages");
       loginPage.buttonLogin().click();
       cy.wait("@messages").then((intercept) => {
           expect(intercept.response.statusCode).to.equal(304);
       });
       loginPage.messageInvalid().should('have.text','Invalid credentials');
   })
   it('Login dengan username terdaftar tetapi Password Invalid', () => {
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       loginPage.textLogin().should('have.text','Login');
       loginPage.inputUsername().type('Admin');
       loginPage.inputPassword().type('admin12345');
       cy.intercept("GET","**/index.php/core/i18n/messages").as("messages");
       loginPage.buttonLogin().click();
       cy.wait("@messages").then((intercept) => {
           expect(intercept.response.statusCode).to.equal(304);
       });
       loginPage.messageInvalid().should('have.text','Invalid credentials');
   })
   it('Login dengan username terdaftar tetapi password Blank', () => {
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       loginPage.textLogin().should('have.text','Login');
       loginPage.inputUsername().type('Admin');
       loginPage.inputPassword().should('have.value', '');
       loginPage.buttonLogin().click();
       loginPage.messageRequired().should('have.text','Required');
   })
   it('Login dengan username blank dan Password Blank', () => {
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       loginPage.textLogin().should('have.text','Login');
       loginPage.inputUsername().should('have.value', '');
       loginPage.inputPassword().should('have.value', '');
       loginPage.buttonLogin().click();
       loginPage.messageRequired().should('have.text','RequiredRequired');
   })    
})
