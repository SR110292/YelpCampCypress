const { loginPageElements, navbarElements } = require(`../support/webElements`);
const HomePage = require("./homePage");

module.exports = {
    closeMsg: () => {
        cy.scrollTo(`top`);
        cy.xpath(loginPageElements.msgCloseIcon).click({ force: true });
        cy.xpath(loginPageElements.msgAlert).should('not.exist');
    },
    validateWarningMsg: (msg) => {
        cy.xpath(loginPageElements.msgAlert).should(`contain.text`, msg);
    },
    enterUserName: (txt) => {
        cy.xpath(loginPageElements.userNameField).type(txt)
    },
    enterPassword: (txt) => {
        cy.xpath(loginPageElements.passwordField).type(txt)
    },
    validateLoginPage() {
        return cy.url().should('include', '/login')
    },
    clickOnLoginBtn: (flag) => {
        cy.xpath(loginPageElements.loginBtn).click()
        if (flag) {
            HomePage.validateHomePage()
            cy.xpath(navbarElements.LoginBtn).should('not.exist');
            cy.xpath(navbarElements.RegisterBtn).should('not.exist');
            cy.xpath(navbarElements.LogoutBtn).should('exist');
        } else {
            cy.xpath(navbarElements.LoginBtn).should('exist');
            cy.xpath(navbarElements.RegisterBtn).should('exist');
            cy.xpath(navbarElements.LogoutBtn).should('not.exist');

        }
    }
}