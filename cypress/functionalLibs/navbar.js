///<reference types = "Cypress"/> 
const { navbarElements } = require(`../support/webElements`);
const homePage = require("./homePage");
const loginPage = require("./loginPage");

module.exports = {
    clickOnNewBtn: (flag) => {
        cy.xpath(navbarElements.NewBtn).click();
        if (flag) {

        } else {
            loginPage.validateLoginPage();
        }
    },
    clickOnLoginBtn: () => {
        cy.xpath(navbarElements.LoginBtn).click();
    },
    clickOnLogoutBtn: () => {
        cy.xpath(navbarElements.LogoutBtn).click();
        homePage.validateHomePage();
    }
}