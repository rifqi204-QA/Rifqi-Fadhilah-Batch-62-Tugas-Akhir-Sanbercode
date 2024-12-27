/// <reference types="cypress"/>

describe('login Feature', () => {
    // it('user login with valid credentials', () => {
    //    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login')
    //    cy.get('[name="username"]').type('Admin');
    //    cy.get('[name="password"]').type('admin123');
    //    cy.intercept("GET","**/employees/action-summary").as("actionsummary");
    //    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    //    cy.wait("@actionsummary").then((intercept) => {
    //        expect(intercept.response.statusCode).to.equal(200)
    //    });
    //    cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard');
    // })
    // it('login dengan username tidak terdaftar', () => {
    //    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
    //    cy.get('[name="username"]').type('superadmin');
    //    cy.get('[name="password"]').type('admin123');
    //    cy.intercept("GET","**/index.php/core/i18n/messages").as("messages");
    //    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    //    cy.wait("@messages").then((intercept) => {
    //        expect(intercept.response.statusCode).to.equal(304);
    //    });
    //    cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');
    // })
    // it('login dengan username terdaftar tetapi Password Invalid', () => {
    //    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
    //    cy.get('[name="username"]').type('Admin');
    //    cy.get('[name="password"]').type('admin12345');
    //    cy.intercept("GET","**/index.php/core/i18n/messages").as("messages");
    //    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    //    cy.wait("@messages").then((intercept) => {
    //        expect(intercept.response.statusCode).to.equal(304)
    //    });
    //    cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');
    // })
    // it('login dengan username terdaftar tetapi password Blank', () => {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //     cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login');
    //     cy.get('[name="username"]').type('Admin'); 
    //     cy.get('[name="password"]').should('have.value', '');    
    //     cy.intercept("GET", "**/index.php/core/i18n/messages").as("messages");
    //     cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    //     cy.get('.oxd-text--span', {timeout: 5000}).should('contain.text', 'Required');
    //     cy.wait("@messages").then((intercept) => {
    //         expect(intercept.response.statusCode).to.equal(200);
    //     })
    // });
    
    // it('login dengan username blank dan Password Blank', () => {
    //    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
    //    cy.get('[name="username"]').should('have.value', '');
    //    cy.get('[name="password"]').should('have.value', '');
    //    cy.intercept("GET","**/index.php/core/i18n/messages").as("messages");
    //    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    //    cy.wait("@messages").then((intercept) => {
    //        expect(intercept.response.statusCode).to.equal(200)
    //    });
    //    cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','RequiredRequired');
    // })
})