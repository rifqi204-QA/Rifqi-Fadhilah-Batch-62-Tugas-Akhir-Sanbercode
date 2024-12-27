/// <reference types="cypress"/>
import loginPage from "../../../POM/OrangeHRM/Login/login";
import forgotPassword from "../../../POM/OrangeHRM/Login/forgotPassword";

describe('Forgot Password Feature', () => {
   it('Reset Password with credential user', () => {
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       loginPage.textLogin().should('have.text','Login');
       forgotPassword.buttonForgotPassword().click();
       forgotPassword.textResetPassword().should('have.text', 'Reset Password');
       forgotPassword.inputUsername().type('Admin');
       cy.intercept("GET", "**/index.php/auth/sendPasswordReset").as("sendPasswordReset");
       forgotPassword.buttonResetPassword().click();
       cy.wait("@sendPasswordReset").then((intercept)=>{
        expect(intercept.response.statusCode).to.equal(200)
       });
       forgotPassword.textResetPassword().should('have.text','Reset Password link sent successfully')
    })

    it('Reset Password then cancel', ()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text','Login');
        cy.intercept("GET", "**/web/index.php/auth/requestPasswordResetCode").as("requestResetPassword");
        forgotPassword.buttonForgotPassword().click();
        forgotPassword.textResetPassword().should('have.text', 'Reset Password');
        cy.wait("@requestResetPassword").then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(200)
        });
        forgotPassword.buttonCancel().click();
        loginPage.textLogin().should('have.text','Login');
    })

    it('Click Reset Button tanpa mengisi Username',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text','Login');
        forgotPassword.buttonForgotPassword().click();
        forgotPassword.inputUsername().should('have.value', '');
        forgotPassword.buttonResetPassword().click();
        forgotPassword.messageRequired().should('have.text','Required');
    })
})