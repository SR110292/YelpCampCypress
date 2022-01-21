///<reference types = "Cypress"/> 
const { frontPageElements } = require(`../support/webElements`);
const loginPage = require('./loginPage');
module.exports = {
    launchurl: () => {
        cy.visit(Cypress.env('prod'));
    },
    clickViewCampgroundBtn: () => {
        cy.xpath(frontPageElements.viewCampgroundBtn).click();
    },
    clickLoginTab: () => {
        cy.xpath(frontPageElements.LoginTab).click();
        loginPage.validateLoginPage();
    }
}
